import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const quickMenu = [
  { label: "About Us", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Hospitality & Retail", href: "/retail" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Data Protection", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground/80 relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 right-0"
        autoPlay
        loop
        muted
        playsInline
        style={{objectPosition: 'top-right'}}
      >
        <source
          src="https://d1t2fddy6amcvs.cloudfront.net/images/footer-video-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-footer/90" /> */}

      {/* Falcon image overlay on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-gold/10 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Reach Us */}
          <div>
            <h3 className="font-display text-xl text-gold mb-6">Reach Us</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-primary-foreground mb-1">
                  Corporate Address:
                </p>
                <p>Meridian Real Estate & Construction,</p>
                <p>Corporate Office,</p>
                <p>India</p>
              </div>
              {/* <div>
                <p className="text-primary-foreground/60">For sales enquiries:</p>
                <p className="font-semibold text-primary-foreground">
                  Contact Us
                </p>
              </div>
              <div>
                <p className="text-primary-foreground/60">For other enquiries:</p>
                <p className="font-semibold text-primary-foreground">
                  Contact Us
                </p>
              </div> */}
              <div>
                <p className="text-primary-foreground/60">Email:</p>
                <a
                  href="mailto:info@meridianrealestate.com"
                  className="font-semibold text-primary-foreground hover:text-gold transition-colors"
                >
                  info@meridianrealestate.com
                </a>
              </div>
              {/* Social Links */}
              {/* <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 flex items-center justify-center hover:text-gold transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div> */}
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
                      {(item as any).external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.label}
                      {(item as any).external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal, Compliance & Data Protection */}
          <div>
            <h3 className="font-display text-xl text-gold mb-6">Legal, Compliance & Data Protection</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    {(item as any).external && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/60">
          <p>
            © 2025 Official Website of Meridian Real Estate & Construction Ltd. | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
