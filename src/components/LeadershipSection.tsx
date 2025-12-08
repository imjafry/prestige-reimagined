import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import leader1 from "@/assets/team/t1.png";
import leader2 from "@/assets/team/t2.png";

const leaders = [
  {
    name: "Mouli Chaudhary",
    title: "Chairman & Executive Director",
    image: leader1,
  },
  {
    name: "Abhishek Chaudhary",
    title: "Non Executive Director",
    image: leader2,
  },
];

export const LeadershipSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-cream" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div className="flex flex-col items-center w-full mb-5">
            <p className="section-label mb-2">THE LEADERSHIP</p>
            <h2 className="section-subtitle">TEAM</h2>
          </div>
         
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-project group bg-background"
            >
              <div className="p-4">
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay with arrow */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg lg:text-xl text-gold mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm text-muted-foreground">{leader.title}</p>
                <p className="text-sm text-muted-foreground">Member of Management Board</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
