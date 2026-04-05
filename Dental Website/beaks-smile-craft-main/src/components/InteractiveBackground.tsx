import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
}

const PARTICLE_COUNT = 80;
const GLOW_RADIUS = 200;

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -400, y: -400 });
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Init particles
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * (document.documentElement.scrollHeight || h * 4),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.15 + 0.05,
        alpha: 0.05,
      });
    }
    particlesRef.current = particles;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -400, y: -400 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = mouseRef.current;
      const scrollY = window.scrollY;

      // Cursor glow
      if (mx > -100) {
        const outer = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        outer.addColorStop(0, "hsla(174, 80%, 60%, 0.18)");
        outer.addColorStop(0.4, "hsla(174, 70%, 50%, 0.08)");
        outer.addColorStop(1, "transparent");
        ctx.fillStyle = outer;
        ctx.fillRect(mx - 220, my - 220, 440, 440);

        const inner = ctx.createRadialGradient(mx, my, 0, mx, my, 90);
        inner.addColorStop(0, "hsla(174, 85%, 65%, 0.25)");
        inner.addColorStop(0.5, "hsla(174, 75%, 55%, 0.1)");
        inner.addColorStop(1, "transparent");
        ctx.fillStyle = inner;
        ctx.fillRect(mx - 90, my - 90, 180, 180);
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen width
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;

        // Viewport-relative Y
        const screenY = p.y - scrollY;

        // Only draw if on screen
        if (screenY < -50 || screenY > h + 50) {
          // Slowly drift particles back toward visible area
          if (screenY < -500 || screenY > h + 500) {
            p.y = scrollY + Math.random() * h;
          }
          continue;
        }

        // Distance to mouse
        const dx = p.x - mx;
        const dy = screenY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Glow when near cursor
        const targetAlpha = dist < GLOW_RADIUS
          ? p.baseAlpha + (1 - dist / GLOW_RADIUS) * 0.7
          : p.baseAlpha;
        p.alpha += (targetAlpha - p.alpha) * 0.08;

        const glowSize = dist < GLOW_RADIUS
          ? p.size + (1 - dist / GLOW_RADIUS) * 3
          : p.size;

        // Draw glow halo when near cursor
        if (dist < GLOW_RADIUS) {
          const glow = ctx.createRadialGradient(p.x, screenY, 0, p.x, screenY, glowSize * 4);
          glow.addColorStop(0, `hsla(174, 80%, 65%, ${p.alpha * 0.4})`);
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.fillRect(p.x - glowSize * 4, screenY - glowSize * 4, glowSize * 8, glowSize * 8);
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, screenY, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(174, 70%, 60%, ${p.alpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[15]"
      style={{ mixBlendMode: "screen", opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground;
