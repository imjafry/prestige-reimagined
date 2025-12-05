import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Button } from "@/components/ui/button";

import residential1 from "@/assets/residential-1.jpg";
import residential2 from "@/assets/residential-2.jpg";
import residential3 from "@/assets/residential-3.jpg";

const cities = [
  { name: "Bangalore", count: 17 },
  { name: "Mumbai", count: 9 },
  { name: "Hyderabad", count: 8 },
  { name: "Cochin", count: 6 },
  { name: "Chennai", count: 5 },
  { name: "Goa", count: 3 },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Prestige Garden Trails",
    location: "Mira Road East, Mira Bhayandar, Mumbai",
    price: "Price on Request",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential1,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "5.2 acres",
  },
  {
    id: "2",
    title: "Prestige Crystal Lawns",
    location: "Devanahalli, Bangalore",
    price: "2.25 Cr Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential2,
    projectType: "Plot",
    developmentSize: "24.3 Acres",
    totalUnits: "235 Units",
  },
  {
    id: "3",
    title: "Prestige Greenbrook",
    location: "Devanahalli, Bangalore",
    price: "1.44 Cr Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential3,
    projectType: "Plot",
    developmentSize: "33 Acres",
    totalUnits: "324 Units",
  },
  {
    id: "4",
    title: "Prestige Lakeside Habitat",
    location: "Whitefield, Bangalore",
    price: "3.5 Cr Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: residential1,
    projectType: "Apartment",
    bedrooms: "2, 3 & 4 BHK",
    developmentSize: "102 acres",
  },
  {
    id: "5",
    title: "Prestige Falcon City",
    location: "Kanakapura Road, Bangalore",
    price: "1.8 Cr Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: residential2,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "45 acres",
  },
  {
    id: "6",
    title: "Prestige Ocean Pearl",
    location: "Panaji, Goa",
    price: "4.2 Cr Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential3,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "8 acres",
  },
];

const Residential = () => {
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
            Residential Projects
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

export default Residential;
