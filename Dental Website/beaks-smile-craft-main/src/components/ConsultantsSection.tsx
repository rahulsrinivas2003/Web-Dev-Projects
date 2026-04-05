import { motion } from "framer-motion";
import drSuthanraj from "@/assets/dr-suthanraj.jpeg";
import drShrinivasan from "@/assets/dr-shrinivasan.jpeg";
import drDhanadivya from "@/assets/dr-dhanadivya.jpeg";
import drSyedHyder from "@/assets/dr-syed-hyder.jpeg";
import drKrithika from "@/assets/dr-krithika.jpeg";

const consultants = [
  {
    name: "Dr. A.K. Suthanraj",
    role: "Oral & Maxillofacial Surgeon",
    image: drSuthanraj,
    qualifications: "BDS, MDS, FICOI",
    details: [
      "BDS — 2017, Karpaga Vinayaga Institute of Dental Sciences",
      "MDS — 2021, Sri Ramachandra Institute of Higher Education & Research, Chennai",
      "FICOI — 2023, Fellowship International Congress of Oral Implantologist (USA)",
    ],
  },
  {
    name: "Dr. Shrinivasan",
    role: "Orthodontist",
    image: drShrinivasan,
    qualifications: "MDS Orthodontics",
    details: [
      "UG — 2004, Sri Ramachandra Dental College",
      "PG (MDS Orthodontics) — 2008, Sri Ramachandra Dental College",
    ],
  },
  {
    name: "Dr. Dhanadivya",
    role: "Periodontist",
    image: drDhanadivya,
    qualifications: "BDS, MBA, MDS, PGDEA",
    details: [
      "BDS — 2004, Sri Ramachandra Dental College",
      "MBA — 2010, Annamalai University",
      "MDS — 2018, Meenakshi Dental College",
      "PGDEA — 2021, Annamalai University",
      "Asst. Professor, Sri Ramachandra Dental College",
    ],
  },
  {
    name: "Dr. Syed Hyder",
    role: "Prosthodontist & Implantologist",
    image: drSyedHyder,
    qualifications: "BDS, MDS",
    details: [
      "BDS — 2016, Sree Balaji Dental College, Chennai",
      "MDS — 2020, Sri Ramachandra Institute of Higher Education & Research, Chennai",
    ],
  },
  {
    name: "Dr. P.S. Krithika",
    role: "Pediatric & Preventive Dentist",
    image: drKrithika,
    qualifications: "BDS, MDS",
    details: [
      "BDS — 2014, Sri Venkateshwara Dental College & Hospital",
      "MDS (Pediatric & Preventive Dentistry) — 2016, Thai Moogambigai Dental College",
    ],
  },
];

const ConsultantsSection = () => (
  <section id="consultants" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Expert Team
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Our Consultants
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Meet our specialist consultants who bring years of advanced training and expertise.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {consultants.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-foreground text-xl">{doc.name}</h3>
              <p className="text-primary font-semibold text-sm mt-1">{doc.role}</p>
              <p className="text-muted-foreground text-sm mt-1">{doc.qualifications}</p>
              <ul className="mt-4 space-y-1.5">
                {doc.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ConsultantsSection;
