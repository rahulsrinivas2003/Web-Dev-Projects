import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-background mb-1">
              Beaks Advanced Dental Care
            </h3>
            <p className="text-sm text-background/60">
              Your premier destination for advanced dental treatments.
            </p>
          </div>
          <a
            href="tel:7010956837"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            7010956837
          </a>
        </div>
        <div className="border-t border-background/10 mt-8 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Beaks Advanced Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
