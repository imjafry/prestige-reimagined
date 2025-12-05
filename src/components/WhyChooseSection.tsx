import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, BadgeCheck, Clock, Users, Star, Building } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "39+ years of delivering on promises",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Only CRISIL DA1+ rated developer",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Proven track record of on-time handovers",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated support throughout your journey",
  },
  {
    icon: Star,
    title: "Award Winning",
    description: "Recognized excellence across sectors",
  },
  {
    icon: Building,
    title: "Diverse Portfolio",
    description: "Residential, commercial, retail & hospitality",
  },
];

export const WhyChooseSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">WHY PRESTIGE</p>
          <h2 className="section-title mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the Prestige difference through our commitment to
            excellence, innovation, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-6 border border-border rounded-lg hover:border-gold/50 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <reason.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
