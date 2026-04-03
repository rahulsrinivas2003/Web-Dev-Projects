import { motion } from "framer-motion";
import bikeOlive from "@/assets/bike-olive-other.jpeg";
import bikeBlack from "@/assets/bike-black-delivery.jpeg";
import bikeSilver from "@/assets/bike-silver.jpeg";
import bikeRear from "@/assets/bike-rear.jpeg";

const bikes = [
  { src: bikeOlive, alt: "Olive E-Bike", label: "City Cruiser" },
  { src: bikeBlack, alt: "Black Delivery E-Bike", label: "Delivery Pro" },
  { src: bikeSilver, alt: "Silver E-Bike", label: "Silver Commuter" },
  { src: bikeRear, alt: "E-Bike rear view", label: "Rugged Build" },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our E-Bike Fleet
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Quality VINXS electric bikes built for Sydney streets — reliable, powerful, and ready to ride.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bike.src}
                  alt={bike.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground">{bike.label}</h3>
                <p className="text-sm text-muted-foreground">Electric • VINXS</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
