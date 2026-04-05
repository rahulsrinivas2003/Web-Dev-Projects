import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import doctorCoat from "@/assets/doctor-coat.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary to-background" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Ashok Nagar, Chennai
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Your Smile,{" "}
              <span className="text-gradient">Our Passion</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Experience advanced dental care with a gentle, personalized touch.
              Dr. Geetha Priya brings over 8 years of expertise to give you the
              smile you deserve.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7010956837"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <Phone className="w-4 h-4" />
                Book Appointment
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-border text-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Visit Clinic
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center h-[500px]"
            >
              <img
                src={doctorCoat}
                alt="Doctor coat with stethoscope"
                className="w-auto h-[450px] object-contain drop-shadow-2xl"
              />
            </motion.div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-2 left-0 bg-background rounded-2xl shadow-xl p-5 border border-border z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-heading text-xl font-bold">8+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Advanced Dental Care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
