import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Visit Our Clinic
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["Old No. B 52/2, New No. 60/2", "11th Avenue, Ashok Nagar", "Chennai – 600083"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["7010956837"],
                href: "tel:7010956837",
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["beaksdental@gmail.com"],
                href: "mailto:beaksdental@gmail.com",
              },
              {
                icon: Clock,
                title: "Hours",
                lines: ["Mon–Sat: 9:30 AM – 1:00 PM, 4:00 PM – 8:30 PM", "Sunday: By Appointment"],
              },
            ].map(({ icon: Icon, title, lines, href }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  {lines.map((line) =>
                    href ? (
                      <a key={line} href={href} className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-muted-foreground text-sm">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]"
          >
            <iframe
              title="Beaks Dental Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.2116!3d13.0382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzE3LjUiTiA4MMKwMTInNDEuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
