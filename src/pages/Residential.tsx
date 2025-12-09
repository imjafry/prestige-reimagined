import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";
import { EnquiryFormSidebar } from "@/components/EnquiryFormSidebar";
import { BookVisitSidebar } from "@/components/BookVisitSidebar";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Button } from "@/components/ui/button";

import residential1 from "@/assets/residential-1.jpg";
import residential2 from "@/assets/residential-2.jpg";
import residential3 from "@/assets/residential-3.jpg";
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

const countries = [
  { name: "India", count: 12 },
  { name: "Oman", count: 10 },
  { name: "Kuwait", count: 8 },
  { name: "Qatar", count: 4 },
  { name: "Saudi", count: 3 },
  { name: "Singapore", count: 3 },
];

const projects: Project[] = [
  // India - 12 projects
  {
    id: "1",
    title: "Meridian SkyCourt Residences",
    location: "India",
    price: "$348k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential1,
    projectType: "Apartment",
    bedrooms: "2, 3 & 4 BHK",
    developmentSize: "12.5 acres",
  },
  {
    id: "2",
    title: "Cedarstone Residency",
    location: "India",
    price: "$225k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential2,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "8.3 acres",
  },
  {
    id: "3",
    title: "Meridian Crestview Towers",
    location: "India",
    price: "$450k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: residential3,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "15.2 acres",
  },
  {
    id: "4",
    title: "Azure Grove Homes",
    location: "India",
    price: "$280k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r1,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "22.4 acres",
  },
  {
    id: "5",
    title: "Meridian Palm Grove",
    location: "India",
    price: "$320k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: r2,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "10.8 acres",
  },
  {
    id: "6",
    title: "Skyline Aurelia",
    location: "India",
    price: "$520k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r3,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "18.6 acres",
  },
  {
    id: "7",
    title: "Meridian Cityscape Residences",
    location: "India",
    price: "$380k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r4,
    projectType: "Apartment",
    bedrooms: "2, 3 & 4 BHK",
    developmentSize: "14.2 acres",
  },
  {
    id: "8",
    title: "Coralwood Estate",
    location: "India",
    price: "$295k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r5,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "25.3 acres",
  },
  {
    id: "9",
    title: "Meridian Lotus Park",
    location: "India",
    price: "$410k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: r6,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "11.5 acres",
  },
  {
    id: "10",
    title: "Riverbend Residences",
    location: "India",
    price: "$360k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: fr1,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "16.8 acres",
  },
  {
    id: "11",
    title: "Meridian Opal Ridge",
    location: "India",
    price: "$275k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: fr2,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "9.4 acres",
  },
  {
    id: "12",
    title: "Amber Oaks Residency",
    location: "India",
    price: "$440k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: fr3,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "20.7 acres",
  },
  // Oman - 10 projects
  {
    id: "13",
    title: "Meridian Harmony Homes",
    location: "Oman",
    price: "$385k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h1,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "13.2 acres",
  },
  {
    id: "14",
    title: "Ivory Bay Residences",
    location: "Oman",
    price: "$420k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: h2,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "17.5 acres",
  },
  {
    id: "15",
    title: "Meridian Greenstone Enclave",
    location: "Oman",
    price: "$310k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h3,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "24.1 acres",
  },
  {
    id: "16",
    title: "Suncrest Avenue",
    location: "Oman",
    price: "$350k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: h4,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "10.6 acres",
  },
  {
    id: "17",
    title: "Meridian Eden Springs",
    location: "Oman",
    price: "$480k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h5,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "19.3 acres",
  },
  {
    id: "18",
    title: "Willowstone Gardens",
    location: "Oman",
    price: "$290k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: h6,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "8.9 acres",
  },
  {
    id: "19",
    title: "Meridian Nova Homes",
    location: "Oman",
    price: "$395k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential1,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "21.8 acres",
  },
  {
    id: "20",
    title: "Maplebrook Homes",
    location: "Oman",
    price: "$330k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: residential2,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "12.4 acres",
  },
  {
    id: "21",
    title: "Meridian Sapphire Residency",
    location: "Oman",
    price: "$460k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential3,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "16.7 acres",
  },
  {
    id: "22",
    title: "Urban Vista Residences",
    location: "Oman",
    price: "$270k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r1,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "7.5 acres",
  },
  // Kuwait - 8 projects
  {
    id: "23",
    title: "Meridian Lakefront Residences",
    location: "Kuwait",
    price: "$510k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r2,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "20.2 acres",
  },
  {
    id: "24",
    title: "Crescent Meadows",
    location: "Kuwait",
    price: "$340k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r3,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "11.8 acres",
  },
  {
    id: "25",
    title: "Meridian Valley Crest Villas",
    location: "Kuwait",
    price: "$400k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r4,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "26.5 acres",
  },
  {
    id: "26",
    title: "Horizon Springs",
    location: "Kuwait",
    price: "$285k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: r5,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "9.1 acres",
  },
  {
    id: "27",
    title: "Meridian Urban Crest",
    location: "Kuwait",
    price: "$430k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: r6,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "18.4 acres",
  },
  {
    id: "28",
    title: "Aurora Parkside",
    location: "Kuwait",
    price: "$370k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: fr1,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "13.7 acres",
  },
  {
    id: "29",
    title: "Meridian Vertex Living",
    location: "Kuwait",
    price: "$490k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: fr2,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "23.9 acres",
  },
  {
    id: "30",
    title: "Grand Elm Enclave",
    location: "Kuwait",
    price: "$315k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: fr3,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "10.3 acres",
  },
  // Qatar - 4 projects
  {
    id: "31",
    title: "Meridian Magnolia Court",
    location: "Qatar",
    price: "$550k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h1,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "22.1 acres",
  },
  {
    id: "32",
    title: "Palmcrest Gardens",
    location: "Qatar",
    price: "$420k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: h2,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "14.6 acres",
  },
  {
    id: "33",
    title: "Meridian Maple Heights",
    location: "Qatar",
    price: "$580k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h3,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "28.3 acres",
  },
  {
    id: "34",
    title: "Silverleaf Residences",
    location: "Qatar",
    price: "$465k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: h4,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "19.8 acres",
  },
  // Saudi - 3 projects
  {
    id: "35",
    title: "Meridian Crown Vista",
    location: "Saudi",
    price: "$520k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: h5,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "21.5 acres",
  },
  {
    id: "36",
    title: "Opaline Heights",
    location: "Saudi",
    price: "$390k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: h6,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "15.9 acres",
  },
  {
    id: "37",
    title: "Meridian Grand Arcadia",
    location: "Saudi",
    price: "$600k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential1,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "30.2 acres",
  },
  // Singapore - 3 projects
  {
    id: "38",
    title: "Lakeview Serenade",
    location: "Singapore",
    price: "$850k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: residential2,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "8.7 acres",
  },
  {
    id: "39",
    title: "Meridian Azure Heights",
    location: "Singapore",
    price: "$920k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: residential3,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "12.3 acres",
  },
  {
    id: "40",
    title: "Crownleaf Villas",
    location: "Singapore",
    price: "$780k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: r1,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "18.6 acres",
  },
];

const Residential = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [enquirySidebar, setEnquirySidebar] = useState<{ isOpen: boolean; project: Project | null }>({
    isOpen: false,
    project: null,
  });
  const [bookVisitSidebar, setBookVisitSidebar] = useState<{ isOpen: boolean; project: Project | null }>({
    isOpen: false,
    project: null,
  });

  const filteredProjects =
    selectedCountry === "all"
      ? projects
      : projects.filter((p) =>
          p.location.toLowerCase() === selectedCountry.toLowerCase()
        );

  const handleEnquireClick = (project: Project) => {
    setEnquirySidebar({ isOpen: true, project });
  };

  const handleBookVisitClick = (project: Project) => {
    setBookVisitSidebar({ isOpen: true, project });
  };

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
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onEnquireClick={handleEnquireClick}
                    onBookVisitClick={handleBookVisitClick}
                  />
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

      {/* Enquiry Form Sidebar */}
      <EnquiryFormSidebar
        isOpen={enquirySidebar.isOpen}
        onClose={() => setEnquirySidebar({ isOpen: false, project: null })}
        projectTitle={enquirySidebar.project?.title}
        projectPrice={enquirySidebar.project?.price}
      />

      {/* Book Visit Sidebar */}
      <BookVisitSidebar
        isOpen={bookVisitSidebar.isOpen}
        onClose={() => setBookVisitSidebar({ isOpen: false, project: null })}
        projectTitle={bookVisitSidebar.project?.title}
      />
    </div>
  );
};

export default Residential;
