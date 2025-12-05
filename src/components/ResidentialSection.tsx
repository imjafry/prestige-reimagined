import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectTownship from "@/assets/project-township.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const residentials = [
  {
    title: "Prestige Lakeside Habitat",
    type: "Large Townships",
    image: projectTownship,
  },
  {
    title: "Prestige Falcon City",
    type: "Integrated Townships",
    image: projectHotel,
  },
  {
    title: "Prestige Jindal City",
    type: "Large Townships",
    image: projectCommercial,
  },
];

export const ResidentialSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % residentials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + residentials.length) % residentials.length
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div className="flex items-center gap-4">
            <h2 className="font-display text-2xl lg:text-3xl text-foreground">
              Residential
            </h2>
            <div className="h-12 w-px bg-gold/40" />
            <p className="text-muted-foreground max-w-xl">
              Shaping the skylines of commercial business districts and techno
              zones in India's major cities.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {residentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-project group"
            >
              <div className="p-4">
                <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg lg:text-xl text-gold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
