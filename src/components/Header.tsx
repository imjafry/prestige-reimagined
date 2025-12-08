import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "ABOUT", href: "/" },
  { label: "RESIDENTIAL", href: "/residential" },
  { label: "COMMERCIAL", href: "/commercial" },
  { label: "HOSPITALITY & RETAIL", href: "/retail" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div 
            className="w-24 lg:w-44 h-auto flex items-center justify-center relative overflow-hidden"
            >
              <img src={logo} alt="Meridian Real Estate & Construction" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-300 tracking-wide ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* <Button
              variant="outline"
              className="hidden lg:flex border-charcoal text-charcoal hover:bg-charcoal hover:text-primary-foreground transition-all duration-300"
            >
              UPCOMING PROJECTS
            </Button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button> */}
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
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-gold transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-base font-medium transition-colors py-2 ${
                      isActive(item.href)
                        ? "text-gold"
                        : "text-foreground hover:text-gold"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              {/* <Button className="mt-4 bg-charcoal text-primary-foreground hover:bg-charcoal-light">
                UPCOMING PROJECTS
              </Button> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
