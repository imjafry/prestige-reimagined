import { motion } from "framer-motion";
import heroImage from "@/assets/hero-building.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Prestige Group Headquarters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-normal">
            About Us
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
