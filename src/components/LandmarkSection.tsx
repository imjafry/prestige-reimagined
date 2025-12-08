import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectTownship from "@/assets/project-township.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import residential1 from "@/assets/residential-1.jpg";
import residential2 from "@/assets/residential-2.jpg";
import residential3 from "@/assets/residential-3.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import commercial2 from "@/assets/commercial-2.jpg";
import commercial3 from "@/assets/commercial-3.jpg";
import retail1 from "@/assets/retail-1.jpg";
import retail2 from "@/assets/retail-2.jpg";
import retail3 from "@/assets/retail-3.jpg";
import fr11 from "@/assets/landmark/fr-11.jpg";
import fr22 from "@/assets/landmark/fr-22.png";
import fr1 from "@/assets/landmark/fr-1.jpg";
import fr2 from "@/assets/landmark/fr-2.jpg";
import fr3 from "@/assets/landmark/fr-3.jpg";
import fr33 from "@/assets/landmark/fr-33.jpg";
import r1 from "@/assets/landmark/r1.webp";
import r2 from "@/assets/landmark/r2.webp";
import r3 from "@/assets/landmark/r3.webp";
import r4 from "@/assets/landmark/r4.webp";
import r5 from "@/assets/landmark/r5.webp";
import r6 from "@/assets/landmark/r6.avif";
import c1 from "@/assets/landmark/c1.jpg";
import c2 from "@/assets/landmark/c2.webp";
import c3 from "@/assets/landmark/c3.webp";
import c4 from "@/assets/landmark/c4.jpeg";
import c5 from "@/assets/landmark/c5.webp";
import h1 from "@/assets/landmark/h1.webp";
import h2 from "@/assets/landmark/h2.jpg";
import h3 from "@/assets/landmark/h3.png";
import h4 from "@/assets/landmark/h4.png";
import h5 from "@/assets/landmark/h5.webp";
import h6 from "@/assets/landmark/h6.jpg";

// First row projects
const firstRowLandmarks = [
  {
    title: "The collection at UB City",
    type: "Mixed development",
    image: fr11,
  },
  {
    title: "ITC Grand",
    type: "Luxury hotel",
    image: fr22,
  },
  {
    title: "Meridian Grandeur",
    type: "Integrated township",
    image: fr1,
  },
  {
    title: "Meridian golfpearl",
    type: "18 hole championship golfcourse",
    image: fr33,
  },
  {
    title: "Meridian towers",
    type: "Ultra luxury residences",
    image: fr2,
  },
  {
    title: "Windsor",
    type: "Luxury apartments",
    image: fr3,
  },
];

// Second row - Residential
const residentialLandmarks = [
  {
    title: "Meridian Seaview Habitat",
    type: "Large townships",
    image: r1,
  },
  {
    title: "Falcon City",
    type: "Integrated townships",
    image: r2,
  },
  {
    title: "Techno City",
    type: "Large townships",
    image: r3,
  },
  {
    title: "Jindal Techno City",
    type: "Large townships",
    image: r4,
  },
  {
    title: "Acropolis Meridian Athenes",
    type: "Residential community",
    image: r5,
  },
  {
    title: "Lakeview Luxe Villas",
    type: "Luxury residences",
    image: r6,
  },
];

// Second row - Commercial
const commercialLandmarks = [
  {
    title: "Tech park",
    type: "Commercial",
    image: c1,
  },
  {
    title: "Innovation town",
    type: "Commercial",
    image: c2,
  },
  {
    title: "Trident",
    type: "Commercial",
    image: c3,
  },
  {
    title: "Hydrogen industrial development",
    type: "Commercial",
    image: c4,
  },
  {
    title: "Techno cloud",
    type: "Commercial",
    image: c5,
  },
];

// Second row - Hospitality & Retail
const hospitalityRetailLandmarks = [
  {
    title: "JW Mariott",
    type: "Hospitality",
    image: h1,
  },
  {
    title: "The Leela",
    type: "Hospitality",
    image: h2,
  },
  {
    title: "ITC Taj",
    type: "Hospitality",
    image: h3,
  },
  {
    title: "ITC Collection",
    type: "Hospitality",
    image: h4,
  },
  {
    title: "Meridian Gulf",
    type: "Retail",
    image: h5,
  },
  {
    title: "Meridian Transpire",
    type: "Retail",
    image: h6,
  },
];

export const LandmarkSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);
  const [hospitalityIndex, setHospitalityIndex] = useState(0);

  const nextResidential = () => {
    setResidentialIndex((prev) => (prev + 1) % Math.ceil(residentialLandmarks.length / 3));
  };

  const prevResidential = () => {
    setResidentialIndex((prev) => (prev - 1 + Math.ceil(residentialLandmarks.length / 3)) % Math.ceil(residentialLandmarks.length / 3));
  };

  const nextCommercial = () => {
    setCommercialIndex((prev) => (prev + 1) % Math.ceil(commercialLandmarks.length / 3));
  };

  const prevCommercial = () => {
    setCommercialIndex((prev) => (prev - 1 + Math.ceil(commercialLandmarks.length / 3)) % Math.ceil(commercialLandmarks.length / 3));
  };

  const nextHospitality = () => {
    setHospitalityIndex((prev) => (prev + 1) % Math.ceil(hospitalityRetailLandmarks.length / 3));
  };

  const prevHospitality = () => {
    setHospitalityIndex((prev) => (prev - 1 + Math.ceil(hospitalityRetailLandmarks.length / 3)) % Math.ceil(hospitalityRetailLandmarks.length / 3));
  };

  return (
    <section id="landmark-section" className="py-16 lg:py-24 bg-[#FBFBFB]" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label mb-2">THE MERIDIAN MARQUEE</p>
          <h2 className="section-subtitle">Landmark Developments</h2>
        </motion.div>

        {/* First Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstRowLandmarks.map((landmark, index) => (
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
          </div>
        </motion.div>

        {/* Second Row - Residential */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
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
                Shaping the skylines of commercial business districts in major cities of South East Asia and GCC.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevResidential}
                disabled={residentialIndex === 0}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextResidential}
                disabled={residentialIndex >= Math.ceil(residentialLandmarks.length / 3) - 1}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
            {residentialLandmarks.slice(residentialIndex * 3, residentialIndex * 3 + 3).map((landmark, index) => (
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
        </motion.div>

        {/* Second Row - Commercial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl lg:text-3xl text-foreground">
                Commercial
              </h2>
              <div className="h-12 w-px bg-gold/40" />
              <p className="text-muted-foreground max-w-xl">
                Shaping the skylines of commercial business districts in major cities of South East Asia and GCC.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevCommercial}
                disabled={commercialIndex === 0}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextCommercial}
                disabled={commercialIndex >= Math.ceil(commercialLandmarks.length / 3) - 1}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
            {commercialLandmarks.slice(commercialIndex * 3, commercialIndex * 3 + 3).map((landmark, index) => (
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
        </motion.div>

        {/* Second Row - Hospitality & Retail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl lg:text-3xl text-foreground">
                Hospitality & Retail
              </h2>
              <div className="h-12 w-px bg-gold/40" />
              <p className="text-muted-foreground max-w-xl">
                Shaping the skylines of commercial business districts in major cities of South East Asia and GCC.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevHospitality}
                disabled={hospitalityIndex === 0}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextHospitality}
                disabled={hospitalityIndex >= Math.ceil(hospitalityRetailLandmarks.length / 3) - 1}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
            {hospitalityRetailLandmarks.slice(hospitalityIndex * 3, hospitalityIndex * 3 + 3).map((landmark, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};

