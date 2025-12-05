import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "RESIDENTIAL", href: "#residential" },
  { label: "COMMERCIAL", href: "#commercial" },
  { label: "RENTALS", href: "#rentals" },
  { label: "HOSPITALITY", href: "#hospitality" },
  { label: "RETAIL", href: "#retail" },
  { label: "NRI", href: "#nri" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-24 lg:w-32 h-16 lg:h-20 flex items-center justify-center bg-charcoal rounded-b-lg relative overflow-hidden">
              <div className="text-center px-2">
                <div className="text-gold text-xs font-display italic">✦</div>
                <div className="text-primary-foreground font-display text-lg lg:text-xl font-semibold leading-none">
                  Prestige
                </div>
                <div className="text-primary-foreground font-display text-[10px] lg:text-xs tracking-wider">
                  GROUP
                </div>
                <div className="text-primary-foreground/70 text-[6px] lg:text-[8px] italic">
                  Add Prestige to your life
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden lg:flex border-charcoal text-charcoal hover:bg-charcoal hover:text-primary-foreground transition-all duration-300"
            >
              UPCOMING PROJECTS
            </Button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
            <button className="hidden lg:block p-2 hover:bg-muted rounded-full transition-colors">
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4 bg-charcoal text-primary-foreground hover:bg-charcoal-light">
                UPCOMING PROJECTS
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
