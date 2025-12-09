import { motion } from "framer-motion";
import { Building2, Grid3X3, MapPin, Send, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: string;
  title: string;
  location: string;
  price?: string;
  badge?: string;
  badgeColor?: "gold" | "green" | "blue";
  image: string;
  projectType?: string;
  bedrooms?: string;
  developmentSize?: string;
  totalUnits?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onEnquireClick?: (project: Project) => void;
  onBookVisitClick?: (project: Project) => void;
}

const badgeColors = {
  gold: "bg-gold text-charcoal",
  green: "bg-green-600 text-white",
  blue: "bg-blue-600 text-white",
};

export const ProjectCard = ({ project, index, onEnquireClick, onBookVisitClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-background border border-border rounded-sm overflow-hidden group hover:shadow-elegant transition-shadow duration-300 relative"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.badge && (
          <span
            className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold tracking-wide ${
              badgeColors[project.badgeColor || "gold"]
            }`}
          >
            {project.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg text-gold mb-1 group-hover:text-gold-light transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
        {project.price && (
          <p className="text-gold font-semibold text-sm mb-4">{project.price}</p>
        )}

        {/* Details Grid */}
        {(project.projectType || project.developmentSize || project.totalUnits) && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            {project.projectType && (
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Project Type
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {project.projectType}
                  </p>
                </div>
              </div>
            )}
            {project.bedrooms && (
              <div className="flex items-start gap-2">
                <Grid3X3 className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Bedrooms
                  </p>
                  <p className="text-sm font-medium text-gold">{project.bedrooms}</p>
                </div>
              </div>
            )}
            {project.developmentSize && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Development Size
                  </p>
                  <p className="text-sm font-medium text-gold">
                    {project.developmentSize}
                  </p>
                </div>
              </div>
            )}
            {project.totalUnits && (
              <div className="flex items-start gap-2">
                <Grid3X3 className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Total Units
                  </p>
                  <p className="text-sm font-medium text-gold">{project.totalUnits}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hover Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEnquireClick?.(project)}
            className="border-gold/30 bg-gold/5 text-gold hover:bg-gold hover:text-charcoal text-xs py-5"
          >
            <Send className="w-3.5 h-3.5 mr-1.5" />
            Enquire Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onBookVisitClick?.(project)}
            className="border-gold/30 bg-gold/5 text-gold hover:bg-gold hover:text-charcoal text-xs py-5"
          >
            <MapPinned className="w-3.5 h-3.5 mr-1.5" />
            Book a Site Visit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
