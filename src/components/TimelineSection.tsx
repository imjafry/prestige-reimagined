import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projectTownship from "@/assets/project-township.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const timelineData = [
  {
    year: 2025,
    projects: [
      {
        title: "Prestige 101, Mumbai",
        description:
          "Currently under construction in the Bandra-Kurla Complex (BKC), Prestige 101 is poised to become a landmark commercial development. With its dynamic façade, smart building technologies, and prime location in Mumbai's financial heartland, it offers premium office spaces for high-growth enterprises seeking a prestigious business address.",
        image: projectCommercial,
      },
      {
        title: "Prestige Jasdan Classic, Mumbai",
        description:
          "A luxury residential tower in South Mumbai offering elegant 3- and 4-BHK homes. With views of the Mahalaxmi Racecourse and excellent connectivity, it delivers high-rise living in an iconic neighbourhood.",
        image: projectHotel,
      },
    ],
  },
  {
    year: 2024,
    projects: [
      {
        title: "The Prestige City, Hyderabad",
        description:
          "An integrated township spanning over 180 acres, featuring residential apartments, villas, retail spaces, and world-class amenities.",
        image: projectTownship,
      },
    ],
  },
  {
    year: 2023,
    projects: [
      {
        title: "Prestige Ocean Pearl",
        description:
          "A waterfront luxury residential project featuring stunning sea views and premium amenities.",
        image: projectHotel,
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        title: "Prestige Tech Platina",
        description:
          "A state-of-the-art IT park with Grade A office spaces and modern infrastructure.",
        image: projectCommercial,
      },
    ],
  },
  {
    year: 2020,
    projects: [
      {
        title: "Prestige Golfshire",
        description:
          "An exclusive golf community with luxury villas and an 18-hole championship golf course.",
        image: projectTownship,
      },
    ],
  },
  {
    year: 2019,
    projects: [
      {
        title: "Prestige Lakeside Habitat",
        description:
          "Large integrated township with apartments, retail, and recreational facilities.",
        image: projectTownship,
      },
    ],
  },
  {
    year: 2018,
    projects: [
      {
        title: "Prestige Forum Mall",
        description:
          "Premium retail destination with international brands and entertainment options.",
        image: projectCommercial,
      },
    ],
  },
  {
    year: 2017,
    projects: [
      {
        title: "Conrad Bengaluru",
        description:
          "A luxury 5-star hotel in partnership with Hilton, setting new standards in hospitality.",
        image: projectHotel,
      },
    ],
  },
];

const years = timelineData.map((item) => item.year);

export const TimelineSection = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const selectedData = timelineData.find((item) => item.year === selectedYear);

  return (
    <section className="py-16 lg:py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12"
        >
          History Timeline
        </motion.h2>

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12 overflow-x-auto pb-4"
        >
          <div className="flex items-center justify-center gap-4 lg:gap-8 min-w-max px-4">
            {years.map((year, index) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className="flex flex-col items-center group"
              >
                <span
                  className={`text-lg lg:text-xl font-display transition-colors duration-300 ${
                    selectedYear === year
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {year}
                </span>
                <div className="relative mt-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      selectedYear === year
                        ? "bg-charcoal border-charcoal"
                        : "bg-background border-border group-hover:border-charcoal"
                    }`}
                  />
                  {index < years.length - 1 && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-8 lg:w-16 h-px bg-border" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {selectedData?.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-project group"
            >
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
