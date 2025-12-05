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

const cities = [
  { name: "Bangalore", count: 13 },
  { name: "Mumbai", count: 2 },
  { name: "Chennai", count: 1 },
  { name: "Hyderabad", count: 1 },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Prestige JRC Signature Towers",
    location: "Kariyammana Agrahara, Bellandur, Bangalore",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial1,
    developmentSize: "7 Acres",
  },
  {
    id: "2",
    title: "Prestige Capital Square",
    location: "Raja Industrial Estate, Yeswanthpur, Bangalore",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial2,
    developmentSize: "1.1 Acres",
  },
  {
    id: "3",
    title: "Prestige Tech Park IV",
    location: "Kadubeesanahalli, Bangalore",
    badge: "COMPLETED",
    badgeColor: "green",
    image: commercial3,
    developmentSize: "8 Acres",
  },
  {
    id: "4",
    title: "Prestige Trade Tower",
    location: "Whitefield, Bangalore",
    badge: "COMPLETED",
    badgeColor: "green",
    image: commercial1,
    developmentSize: "4.5 Acres",
  },
  {
    id: "5",
    title: "Prestige Techno Star",
    location: "Electronic City, Bangalore",
    badge: "COMPLETED",
    badgeColor: "green",
    image: commercial2,
    developmentSize: "12 Acres",
  },
  {
    id: "6",
    title: "Prestige Cyber Towers",
    location: "HITEC City, Hyderabad",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial3,
    developmentSize: "6 Acres",
  },
];

const Commercial = () => {
  const [selectedCity, setSelectedCity] = useState("all");

  const filteredProjects =
    selectedCity === "all"
      ? projects
      : projects.filter((p) =>
          p.location.toLowerCase().includes(selectedCity.toLowerCase())
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
          <motion.div
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
          </motion.div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <ProjectSidebar
              cities={cities}
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
              allLabel="All"
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
