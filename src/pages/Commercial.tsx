import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Button } from "@/components/ui/button";

import commercial1 from "@/assets/commercial-1.jpg";
import commercial2 from "@/assets/commercial-2.jpg";
import commercial3 from "@/assets/commercial-3.jpg";
import r1 from "@/assets/landmark/r1.webp";
import r2 from "@/assets/landmark/r2.webp";
import r3 from "@/assets/landmark/r3.webp";
import r4 from "@/assets/landmark/r4.webp";
import r5 from "@/assets/landmark/r5.webp";
import r6 from "@/assets/landmark/r6.avif";
import fr1 from "@/assets/landmark/fr-1.jpg";
import fr2 from "@/assets/landmark/fr-2.jpg";
import fr3 from "@/assets/landmark/fr-3.jpg";
import h1 from "@/assets/landmark/h1.webp";
import h2 from "@/assets/landmark/h2.jpg";
import h3 from "@/assets/landmark/h3.png";
import h4 from "@/assets/landmark/h4.png";
import h5 from "@/assets/landmark/h5.webp";
import h6 from "@/assets/landmark/h6.jpg";
import c1 from "@/assets/landmark/c1.jpg";
import c2 from "@/assets/landmark/c2.webp";
import c3 from "@/assets/landmark/c3.webp";

const countries = [
  { name: "India", count: 7 },
  { name: "Oman", count: 4 },
  { name: "Kuwait", count: 5 },
  { name: "Qatar", count: 2 },
  { name: "Saudi", count: 2 },
];

const projects: Project[] = [
  // India - 7 projects
  {
    id: "1",
    title: "Meridian Business Square",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial1,
    developmentSize: "7.2 Acres",
  },
  {
    id: "2",
    title: "Orion TechPoint",
    location: "India",
    badge: "COMPLETED",
    badgeColor: "green",
    image: commercial2,
    developmentSize: "5.8 Acres",
  },
  {
    id: "3",
    title: "Meridian Commerce Hub",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial3,
    developmentSize: "9.4 Acres",
  },
  {
    id: "4",
    title: "Nova Corporate Center",
    location: "India",
    badge: "COMPLETED",
    badgeColor: "green",
    image: r1,
    developmentSize: "6.5 Acres",
  },
  {
    id: "5",
    title: "Meridian Infinity Park",
    location: "India",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r2,
    developmentSize: "12.3 Acres",
  },
  {
    id: "6",
    title: "Axis Tower One",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: r3,
    developmentSize: "4.7 Acres",
  },
  {
    id: "7",
    title: "Meridian Trade Centre",
    location: "India",
    badge: "COMPLETED",
    badgeColor: "green",
    image: r4,
    developmentSize: "8.9 Acres",
  },
  // Oman - 4 projects
  {
    id: "8",
    title: "Skyline Business Plaza",
    location: "Oman",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r5,
    developmentSize: "10.6 Acres",
  },
  {
    id: "9",
    title: "Meridian TechVista",
    location: "Oman",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: r6,
    developmentSize: "7.8 Acres",
  },
  {
    id: "10",
    title: "Harbour Edge Offices",
    location: "Oman",
    badge: "COMPLETED",
    badgeColor: "green",
    image: fr1,
    developmentSize: "5.4 Acres",
  },
  {
    id: "11",
    title: "Meridian Capitol Towers",
    location: "Oman",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: fr2,
    developmentSize: "11.2 Acres",
  },
  // Kuwait - 5 projects
  {
    id: "12",
    title: "Crestline Business Park",
    location: "Kuwait",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: fr3,
    developmentSize: "9.7 Acres",
  },
  {
    id: "13",
    title: "Meridian Orion Chambers",
    location: "Kuwait",
    badge: "COMPLETED",
    badgeColor: "green",
    image: h1,
    developmentSize: "6.3 Acres",
  },
  {
    id: "14",
    title: "Urban Gate Corporate Park",
    location: "Kuwait",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h2,
    developmentSize: "13.5 Acres",
  },
  {
    id: "15",
    title: "Meridian Metro Plaza",
    location: "Kuwait",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: h3,
    developmentSize: "8.1 Acres",
  },
  {
    id: "16",
    title: "Vertex Business Bay",
    location: "Kuwait",
    badge: "COMPLETED",
    badgeColor: "green",
    image: h4,
    developmentSize: "7.6 Acres",
  },
  // Qatar - 2 projects
  {
    id: "17",
    title: "Meridian Prime Towers",
    location: "Qatar",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h5,
    developmentSize: "14.8 Acres",
  },
  {
    id: "18",
    title: "Centrum IT Park",
    location: "Qatar",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: h6,
    developmentSize: "10.2 Acres",
  },
  // Saudi - 2 projects
  {
    id: "19",
    title: "Meridian Boulevard Offices",
    location: "Saudi",
    badge: "COMPLETED",
    badgeColor: "green",
    image: c1,
    developmentSize: "11.9 Acres",
  },
  {
    id: "20",
    title: "Gateway Commercial Centre",
    location: "Saudi",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: c2,
    developmentSize: "9.3 Acres",
  },
];

const Commercial = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredProjects =
    selectedCountry === "all"
      ? projects
      : projects.filter((p) =>
          p.location.toLowerCase() === selectedCountry.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EnquireSidebar />

      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl lg:text-4xl text-gold mb-6"
          >
            Commercial Projects
          </motion.h1>

          {/* Custom Search Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              Custom Search
            </Button>
          </motion.div> */}

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <ProjectSidebar
              cities={countries}
              selectedCity={selectedCountry}
              onSelectCity={setSelectedCountry}
              allLabel="All Properties"
            />

            {/* Projects Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
              {filteredProjects.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No projects found in this location.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Commercial;
