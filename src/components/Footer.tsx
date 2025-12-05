import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const quickMenu = [
  { label: "About Us", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Retail", href: "/retail" },
  { label: "Videos", href: "#" },
  { label: "Events", href: "#" },
  { label: "News Corner", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Awards", href: "#" },
  { label: "Careers", href: "#", external: true },
  { label: "Falcon News", href: "#", external: true },
];

const quickLinks = [
  { label: "Customer Portal", href: "#", external: true },
  { label: "Crisil Rating", href: "#" },
  { label: "Referral", href: "#" },
  { label: "EMI Calculator", href: "#" },
  { label: "Interior Design", href: "#", external: true },
  { label: "NRIs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Public Notices", href: "#" },
];

const investors = [
  { label: "Investors", href: "#" },
  { label: "Financial Performance", href: "#" },
  { label: "Share Holding Pattern", href: "#" },
  { label: "AGM Notice", href: "#", external: true },
  { label: "Annual Report", href: "#", external: true },
  { label: "ESG", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-footer text-primary-foreground/80 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Reach Us */}
          <div>
            <h3 className="font-display text-xl text-gold mb-6">Reach Us</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-primary-foreground mb-1">
                  Corporate Address:
                </p>
                <p>Prestige Falcon Towers,</p>
                <p>19, Brunton Road,</p>
                <p>Bengaluru - 560025,</p>
                <p>Karnataka, India</p>
              </div>
              <div>
                <p className="text-primary-foreground/60">For sales enquiries:</p>
                <p className="font-semibold text-primary-foreground">
                  1800 313 0080
                </p>
              </div>
              <div>
                <p className="text-primary-foreground/60">For other enquiries:</p>
                <p className="font-semibold text-primary-foreground">
                  +91 80 2559 1080
                </p>
              </div>
              <div>
                <p className="text-primary-foreground/60">Email:</p>
                <a
                  href="mailto:properties@prestigeconstructions.com"
                  className="font-semibold text-primary-foreground hover:text-gold transition-colors"
                >
                  properties@prestigeconstructions.com
                </a>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 flex items-center justify-center hover:text-gold transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="font-display text-xl text-gold mb-6">Quick Menu</h3>
            <ul className="space-y-2 text-sm">
              {quickMenu.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      to={item.href}
                      className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.label}
                      {item.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.label}
                      {item.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl text-gold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    {item.external && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h3 className="font-display text-xl text-gold mb-6">Investors</h3>
            <ul className="space-y-2 text-sm">
              {investors.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    {item.external && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-sm text-primary-foreground/60">
          <p>
            © 2025 Official Website of Prestige Estates Projects Ltd. | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
