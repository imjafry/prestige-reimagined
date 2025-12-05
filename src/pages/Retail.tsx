import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";

import retail1 from "@/assets/retail-1.jpg";
import retail2 from "@/assets/retail-2.jpg";
import retail3 from "@/assets/retail-3.jpg";

interface RetailProject {
  id: string;
  title: string;
  description: string;
  image: string;
}

const projects: RetailProject[] = [
  {
    id: "1",
    title: "The Collection at UB City",
    description: "India's first Luxury Shopping Mall",
    image: retail1,
  },
  {
    id: "2",
    title: "Forum South Bengaluru",
    description: "Bangalore",
    image: retail2,
  },
  {
    id: "3",
    title: "Forum Rex Walk",
    description: "Bangalore",
    image: retail3,
  },
  {
    id: "4",
    title: "Forum Neighbourhood Mall",
    description: "Whitefield, Bangalore",
    image: retail1,
  },
  {
    id: "5",
    title: "Forum Mall Koramangala",
    description: "Koramangala, Bangalore",
    image: retail2,
  },
  {
    id: "6",
    title: "Forum Sujana Mall",
    description: "Hyderabad",
    image: retail3,
  },
];

const Retail = () => {
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
            className="font-display text-3xl lg:text-4xl text-gold mb-10"
          >
            Retail Projects
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background border border-border rounded-sm overflow-hidden group hover:shadow-elegant transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] p-4 pb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display text-lg text-gold mb-1 group-hover:text-gold-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Retail;
