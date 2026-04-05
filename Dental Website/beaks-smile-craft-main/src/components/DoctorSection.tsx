import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

const highlights = [
  { icon: Award, label: "BDS Certified", desc: "Advanced Clinical Research" },
  { icon: Heart, label: "8+ Years", desc: "Of Gentle Care" },
  { icon: Sparkles, label: "Specialist", desc: "Cosmetic & Orthodontics" },
];

const DoctorSection = () => {
  return (
    <section id="doctor" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3" />
              <img
                src="https://beaksdental.com/public/geetha-full-final.png"
                alt="Dr. Geetha Priya"
                className="relative rounded-3xl w-full object-cover shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Your Dentist
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Meet Dr. Geetha Priya
            </h2>
            <p className="text-muted-foreground text-sm font-medium mb-6">
              BDS, Advance Program in Clinical Research and Management
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dr. Geetha believes in personalized, gentle dental care using
              cutting-edge technology. Her warm approach ensures every patient
              feels relaxed, informed, and empowered about their oral health.
              With experience at renowned clinics in Chennai and Pune, she
              specializes in Cosmetic Dentistry, Braces & Aligners, Smile
              Makeovers, and Preventive Dentistry.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-background rounded-xl p-4 text-center border border-border"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
