import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    desc: "Highest standards of sterilization and patient safety in every procedure.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    desc: "Advanced equipment for pain-free, stress-free dental experiences.",
  },
  {
    icon: Users,
    title: "Patient-First",
    desc: "Personalized treatment plans tailored to your unique dental needs.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Why Choose Beaks Dental?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Beaks Advanced Dental Care in Ashok Nagar, Chennai, is committed to
            providing exceptional dental care in a welcoming and comfortable
            environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow group"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
