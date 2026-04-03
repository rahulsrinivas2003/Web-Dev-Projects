import { motion } from "framer-motion";
import { Clock, Calendar, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "E-Bike Rentals",
    desc: "High-quality electric bikes available for daily, weekly, or long-term hire.",
  },
  {
    icon: Clock,
    title: "9 AM – 7 PM",
    desc: "Convenient opening hours so you can pick up or drop off with ease.",
  },
  {
    icon: Calendar,
    title: "7 Days a Week",
    desc: "We're open every single day — weekends and public holidays included.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Friendly support available during working hours for anything you need.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Ride With Us
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Simple, affordable, and hassle-free e-bike rentals right in Dulwich Hill.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
