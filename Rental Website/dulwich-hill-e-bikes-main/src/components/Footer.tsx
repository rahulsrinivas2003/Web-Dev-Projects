import { Bike } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Bike className="h-5 w-5 text-primary-foreground" />
          <span className="font-heading font-bold text-primary-foreground text-sm">
            MyFriends Rental
          </span>
        </div>
        <p className="text-primary-foreground/60 text-xs">
          © {new Date().getFullYear()} MyFriends Rental. All rights reserved. Dulwich Hill, Sydney.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
