import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqCategories = [
  {
    category: "Dental Implants",
    faqs: [
      { q: "What are dental implants?", a: "Dental implants are artificial tooth roots made of biocompatible titanium that are placed into the jawbone to support a crown, bridge, or denture." },
      { q: "What are the types of dental implants done?", a: "The common types include single tooth implants, implant-supported bridges, full-mouth implants, and advanced options like All-on-4 and immediate implants." },
      { q: "Who can get dental implants done?", a: "Most adults with good oral health are suitable, and even patients with controlled conditions like diabetes or reduced bone (with grafting) can undergo implant treatment." },
      { q: "What is the success rate of dental implants?", a: "Dental implants have a high success rate of about 95% to 98% when properly planned and maintained." },
      { q: "Why are dental implants recommended for replacement of missing teeth?", a: "They restore natural function and appearance, prevent bone loss, do not affect adjacent teeth, maintain facial structure, improve chewing ability, and enhance overall oral health and confidence." },
    ],
  },
  {
    category: "Orthodontics (Braces & Aligners)",
    faqs: [
      { q: "What is Orthodontics or Clip Treatment?", a: "Orthodontics is a branch of dentistry that focuses on correcting misaligned teeth and improper bite using braces or clear aligners. It improves both the appearance of your smile and overall oral function." },
      { q: "Who can get Orthodontic treatment done?", a: "Orthodontic treatment is suitable for children, teenagers, and adults. Anyone with crooked teeth, gaps, or bite issues can undergo treatment, provided they have healthy teeth and gums." },
      { q: "What are the types of Orthodontic clips (braces)?", a: "The common types include traditional metal braces, ceramic (tooth-colored) braces, self-ligating braces, lingual braces (placed on the inner side of teeth), and clear aligners (removable transparent trays)." },
      { q: "What is the difference between traditional and self-ligating braces?", a: "Traditional braces use elastic or metal ties to hold the wire, which may create more friction and require more frequent adjustments. Self-ligating braces use a built-in clip mechanism, resulting in less friction, better comfort, and fewer dental visits." },
      { q: "How is Orthodontic treatment beneficial?", a: "Orthodontic treatment aligns teeth and corrects bite issues, improving smile aesthetics and confidence. It also enhances chewing, speech, and oral hygiene, while reducing the risk of cavities, gum disease, and uneven tooth wear." },
    ],
  },
  {
    category: "Root Canal Treatment",
    faqs: [
      { q: "What is Root Canal Treatment (RCT)?", a: "Root Canal Treatment is a procedure used to save a decayed or infected tooth by removing the infected pulp (nerve), cleaning the root canals, and sealing them to prevent further infection." },
      { q: "When is a Root Canal needed?", a: "RCT is required when there is deep decay, severe tooth pain, infection or abscess, prolonged sensitivity to hot and cold, or trauma affecting the tooth nerve." },
      { q: "Is Root Canal Treatment painful?", a: "No, the procedure is done under local anesthesia and is generally painless. It actually helps relieve the pain caused by infection." },
      { q: "How many visits does RCT take?", a: "Depending on the condition of the tooth, it may take 1 to 3 visits to complete the treatment." },
      { q: "What happens after Root Canal Treatment?", a: "After RCT, a crown is usually placed on the tooth to restore strength and function. Mild discomfort may be present for a few days." },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    faqs: [
      { q: "What is Cosmetic Dentistry?", a: "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile through various aesthetic dental procedures." },
      { q: "What treatments are included in Cosmetic Dentistry?", a: "Common treatments include teeth whitening, veneers, smile designing, composite bonding, tooth-colored fillings, and gum contouring." },
      { q: "Is Cosmetic Dentistry safe?", a: "Yes, cosmetic procedures are safe when performed by qualified dental professionals using approved materials and techniques." },
      { q: "Are the results natural-looking?", a: "Yes, modern cosmetic dentistry is designed to provide natural, customized results that match your facial features and smile." },
    ],
  },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Find answers to common questions about our dental treatments and procedures.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            {faqCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </motion.div>

          {/* FAQ accordion */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqCategories[activeCategory].faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-background border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-foreground text-left font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
