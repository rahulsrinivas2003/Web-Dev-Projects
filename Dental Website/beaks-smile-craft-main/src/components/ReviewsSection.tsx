import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Gokula Krishnan",
    badge: "Local Guide · 17 reviews",
    time: "3 months ago",
    text: "Had my teeth cleaning done here and the experience was amazing. The doctor was very professional, gentle and explained each step clearly. Highly recommend this clinic ✨",
  },
  {
    name: "Organization Business",
    badge: "2 reviews",
    time: "2 months ago",
    text: "Visited first day for cleaning tooth, very good work. And second appointment cleaning teeth very wonderful by Dr.Geetha. Very good rate. Clinic is very good and staff also very good by Parthiban.",
  },
  {
    name: "amj niranjan",
    badge: "3 reviews",
    time: "3 months ago",
    text: "I'm Niranjan. I got my root canal treatment done at Beaks. The doctor is very dedicated and a perfectionist, with great follow-up. The pricing is also affordable. Thank you, Geeta ma'am!",
  },
  {
    name: "VINOTHKUMAR R",
    badge: "1 review",
    time: "a month ago",
    text: "Excellent service at affordable price. Family dentist for each dental problem. Recommended for everyone.",
  },
  {
    name: "Yash Ankush",
    badge: "2 reviews",
    time: "8 months ago",
    text: "Really happy with my visit to the clinic! The doctor was calm, kind, and explained everything in a simple way. The treatment didn't feel rushed at all. The clinic vibes were nice and clean too. Big thumbs up!",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Patient Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Real reviews from real patients — see why families across Chennai trust us with their smiles.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
          <button
            onClick={prev}
            className="shrink-0 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-card border border-border rounded-2xl p-8 flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.badge}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-2">{review.time}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="shrink-0 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
