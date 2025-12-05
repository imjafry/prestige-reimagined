import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectTownship from "@/assets/project-township.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const landmarks = [
  {
    title: "The Collection At UB City",
    type: "Mixed Development",
    image: projectCommercial,
  },
  {
    title: "Conrad Bengaluru",
    type: "Luxury Hotel",
    image: projectHotel,
  },
  {
    title: "Prestige Shantiniketan",
    type: "Integrated Township",
    image: projectTownship,
  },
];

export const LandmarkSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % landmarks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + landmarks.length) % landmarks.length);
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
          <div>
            <p className="section-label mb-2">THE PRESTIGE MARQUEE</p>
            <h2 className="section-subtitle">Landmark Developments</h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
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
          {landmarks.map((landmark, index) => (
            <motion.div
              key={landmark.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-project group bg-background"
            >
              <div className="p-4">
                <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-4">
                  <img
                    src={landmark.image}
                    alt={landmark.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg lg:text-xl text-gold mb-1">
                  {landmark.title}
                </h3>
                <p className="text-sm text-muted-foreground">{landmark.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
