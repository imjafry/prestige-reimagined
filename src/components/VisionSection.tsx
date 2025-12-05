import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted and admired real estate company that creates lasting value for all stakeholders through innovation and excellence.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver world-class developments that exceed customer expectations while maintaining the highest standards of quality, integrity, and sustainability.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Customer-first approach, unwavering commitment to quality, ethical business practices, and continuous innovation drive everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Setting benchmarks in real estate development through pioneering designs, sustainable practices, and an unrelenting pursuit of perfection.",
  },
];

export const VisionSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      className="py-16 lg:py-24 bg-charcoal text-primary-foreground"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Guided by a commitment to excellence, we strive to create spaces
            that inspire and endure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl text-gold mb-3">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
