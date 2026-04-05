import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Sun, Wrench, Baby, Stethoscope, AlignLeft, X, Scissors, Shield, HeartPulse, Crown } from "lucide-react";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceWhitening from "@/assets/service-whitening.jpg";
import serviceOrthodontics from "@/assets/service-orthodontics.jpg";
import serviceRootcanal from "@/assets/service-rootcanal.jpg";
import serviceCosmetic from "@/assets/service-cosmetic.jpg";
import servicePediatric from "@/assets/service-pediatric.jpg";
import serviceOmfs from "@/assets/service-omfs.jpg";
import servicePeriodontics from "@/assets/service-periodontics.jpg";
import serviceProsthodontics from "@/assets/service-prosthodontics.jpg";
import serviceGeneral from "@/assets/service-general.jpg";

const services = [
  {
    icon: Stethoscope, name: "Dental Implants", desc: "Permanent, natural-looking tooth replacements.", image: serviceImplants,
    consultant: "Dr. A.K. Suthanraj, Dr. Manoj Kumar C",
    details: "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. They provide a strong foundation for fixed or removable replacement teeth. Our implants look, feel, and function like natural teeth, restoring your confidence and bite strength.",
    benefits: ["Permanent solution", "Preserves jawbone", "Natural appearance", "No dietary restrictions"],
  },
  {
    icon: Scissors, name: "Oral & Maxillofacial Surgery", desc: "Advanced surgical procedures for jaw and facial conditions.", image: serviceOmfs,
    consultant: "Dr. A.K. Suthanraj",
    details: "Our OMFS specialists handle complex surgical procedures including wisdom tooth extractions, corrective jaw surgery, facial trauma management, and TMJ disorders. We use advanced imaging and minimally invasive techniques for faster recovery.",
    benefits: ["Expert surgical care", "Advanced imaging", "Minimally invasive", "Fast recovery"],
  },
  {
    icon: Wrench, name: "Root Canal (Endodontics)", desc: "Pain-free root canal treatment with modern tools.", image: serviceRootcanal,
    consultant: "Dr. Ram Prasad, Dr. Deepalakshmi",
    details: "Modern root canal therapy is virtually painless thanks to advanced anesthesia and rotary instruments. We remove infected pulp tissue, disinfect the canal system, and seal the tooth to prevent future infection.",
    benefits: ["Pain-free procedure", "Saves natural teeth", "Modern rotary tools", "Same-day treatment available"],
  },
  {
    icon: AlignLeft, name: "Orthodontics", desc: "Braces & aligners for perfectly aligned teeth.", image: serviceOrthodontics,
    consultant: "Dr. Shrinivasan",
    details: "We offer both traditional metal braces and modern clear aligners to straighten your teeth and correct bite issues. Our orthodontic treatment plans are fully customized using 3D digital scanning.",
    benefits: ["Clear aligner options", "3D digital planning", "Comfortable treatment", "Improved oral health"],
  },
  {
    icon: Shield, name: "Periodontics", desc: "Expert gum care and treatment for gum diseases.", image: servicePeriodontics,
    consultant: "Dr. Dhanadivya",
    details: "Our periodontist specializes in preventing, diagnosing, and treating gum diseases. From deep cleaning and scaling to gum surgery and regeneration, we ensure your gums stay healthy and strong.",
    benefits: ["Gum disease treatment", "Deep cleaning", "Gum surgery", "Bone regeneration"],
  },
  {
    icon: Baby, name: "Pediatric Dentistry", desc: "Gentle dental care designed for children.", image: servicePediatric,
    consultant: "Dr. Kritika",
    details: "Our pediatric dental services create a fun, welcoming environment for children. We specialize in preventive care including fluoride treatments, dental sealants, and early orthodontic assessments.",
    benefits: ["Child-friendly environment", "Preventive care focus", "Fluoride treatments", "Early orthodontic screening"],
  },
  {
    icon: Crown, name: "Prosthodontics", desc: "Crowns, bridges, dentures & full mouth rehabilitation.", image: serviceProsthodontics,
    consultant: "Dr. Syed Hyder, Dr. Harish",
    details: "Our prosthodontists specialize in replacing missing teeth and restoring damaged ones with crowns, bridges, and dentures. We use high-quality materials for durable, natural-looking restorations.",
    benefits: ["Custom crowns & bridges", "Complete dentures", "Implant-supported prosthetics", "Full mouth rehab"],
  },
  {
    icon: Sun, name: "Teeth Whitening", desc: "Brighten your smile with professional whitening.", image: serviceWhitening,
    consultant: "Dr. Geetha Priya",
    details: "Our professional teeth whitening treatments can lighten your teeth by several shades in just one visit. We use advanced LED-activated whitening gels that are safe for enamel.",
    benefits: ["Instant results", "Safe for enamel", "Long-lasting brightness", "Custom intensity levels"],
  },
  {
    icon: Smile, name: "Cosmetic Dentistry", desc: "Veneers, bonding, and complete smile makeovers.", image: serviceCosmetic,
    consultant: "Dr. Geetha Priya",
    details: "Transform your smile with our comprehensive cosmetic dentistry services. From porcelain veneers to dental bonding, we design smile makeovers that look natural and stunning.",
    benefits: ["Porcelain veneers", "Dental bonding", "Smile design preview", "Natural-looking results"],
  },
  {
    icon: HeartPulse, name: "General & Preventive Care", desc: "Routine checkups, cleanings, and preventive treatments.", image: serviceGeneral,
    consultant: "Dr. Rajini (Senior Consultant)",
    details: "Regular dental checkups and professional cleanings form the foundation of good oral health. Our senior consultant provides comprehensive examinations, early detection, and preventive treatments.",
    benefits: ["Comprehensive exams", "Professional cleaning", "Early detection", "Preventive treatments"],
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From routine checkups to advanced cosmetic procedures, we provide
            comprehensive dental care for the whole family.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc, image }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelected(i)}
              className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all group cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <motion.img
                  src={image}
                  alt={name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-primary/90 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-1">{name}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
                <span className="inline-block mt-3 text-primary text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={services[selected].image}
                  alt={services[selected].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  {(() => {
                    const Icon = services[selected].icon;
                    return (
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    );
                  })()}
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {services[selected].name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Consultant:</span>
                  <span className="text-foreground font-medium">{services[selected].consultant}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {services[selected].details}
                </p>

                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {services[selected].benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="tel:7010956837"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Book This Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
