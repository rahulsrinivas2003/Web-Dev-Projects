import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import bikeImage from "@/assets/bike-olive-side.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Dulwich Hill, Sydney</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Ride the city.
            <br />
            <span className="text-primary">Your way.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Affordable e-bike rentals in Dulwich Hill. Explore Sydney's streets with zero emissions and maximum freedom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="https://www.facebook.com/marketplace/profile/61586826105702/?ref=permalink&mibextid=dXMIcH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-accent transition-colors text-base"
            >
              Book a Bike
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#fleet"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors text-base"
            >
              View Fleet
            </a>
          </div>

          <div className="flex gap-8 mt-6">
            {[
              { value: "7", label: "Days a week" },
              { value: "9–7", label: "Open hours" },
              { value: "E-Bikes", label: "Electric fleet" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-foreground font-heading">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Bike image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl" />
          <motion.img
            src={bikeImage}
            alt="MyFriends Rental E-Bike"
            className="relative w-full max-w-lg rounded-2xl shadow-2xl object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
