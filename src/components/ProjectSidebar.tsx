import { motion } from "framer-motion";

interface City {
  name: string;
  count: number;
}

interface ProjectSidebarProps {
  cities: City[];
  selectedCity: string;
  onSelectCity: (city: string) => void;
  allLabel?: string;
}

export const ProjectSidebar = ({
  cities,
  selectedCity,
  onSelectCity,
  allLabel = "All Properties",
}: ProjectSidebarProps) => {
  return (
    <aside className="w-full lg:w-56 shrink-0">
      <div className="sticky top-28">
        {/* All Properties */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => onSelectCity("all")}
          className={`relative w-full text-left py-4 pr-4 border-b border-border transition-colors ${
            selectedCity === "all"
              ? "text-gold"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {selectedCity === "all" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold" />
          )}
          <span className="pl-4 font-medium">{allLabel}</span>
        </motion.button>

        {/* City List */}
        {cities.map((city, index) => (
          <motion.button
            key={city.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
            onClick={() => onSelectCity(city.name)}
            className={`relative w-full text-left py-4 pr-4 border-b border-border transition-colors ${
              selectedCity === city.name
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {selectedCity === city.name && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold" />
            )}
            <div className="pl-4">
              <p className="font-medium">{city.name}</p>
              <p className="text-xs text-muted-foreground">
                {city.count} Projects Available
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </aside>
  );
};
