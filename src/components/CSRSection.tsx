import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Leaf, Heart, Home } from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Supporting quality education through scholarships, school infrastructure, and skill development programs.",
  },
  {
    icon: Leaf,
    title: "Environment",
    description:
      "Committed to sustainable development with green buildings, water conservation, and renewable energy initiatives.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Providing accessible healthcare through medical camps, hospital partnerships, and health awareness programs.",
  },
  {
    icon: Home,
    title: "Community",
    description:
      "Building stronger communities through housing initiatives, livelihood programs, and social welfare activities.",
  },
];

export const CSRSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-cream" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">CORPORATE SOCIAL RESPONSIBILITY</p>
            <h2 className="section-title mb-6">Making a Difference</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Prestige Group, we believe in giving back to the community that
              has supported our growth. Our CSR initiatives focus on creating
              sustainable impact in education, healthcare, environment, and
              community development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through the Prestige Foundation, we have touched the lives of
              thousands, providing opportunities for education, healthcare
              access, and sustainable livelihoods. Our commitment extends beyond
              construction – we build communities.
            </p>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-background rounded-lg border border-border hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <initiative.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {initiative.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
