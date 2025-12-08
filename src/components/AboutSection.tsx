import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Years of Excellence" },
  { value: 6500, suffix: "+", label: "Projects Completed" },
  { value: 900, suffix: "+", label: "Million Sq. Ft. Delivered" },
  { value: 240, suffix: "+", label: "Million Sq. Ft. Underway" },
  { value: 12, suffix: "+", label: "Billion Total Project Value (FY25-26)", prefix: "" },
];

const CountUp = ({
  end,
  suffix,
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix: string;
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl text-gold mb-4">
            About us
          </h2>
          <p className="section-label mb-6">ABOUT MERIDIAN REAL ESTATE & CONSTRUCTION</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Over the last five decades, Meridian Real Estate & Construction, the flagship realty arm of privately held international business group, has firmly established itself as one of the leading and most respected developers across India, Singapore and the GCC (Qatar, Kuwait, Oman, KSA, UAE, Bahrain).
              </p>
              <p>
                Founded in the early 1970s by C.V. Narayanan, the Meridian has been driven by a professional leadership team with deep experience in real estate, infrastructure and investments. Over time, the Group has strategically diversified into complementary businesses, each led by seasoned specialists. Its portfolio today in real estate spans interior design & fit-outs, facilities management, engineering services, and property advisory, alongside hospitality and retail ventures. This integrated ecosystem allows Meridian to offer end-to-end solutions, from land acquisition and master planning to construction, interiors and long-term asset management.
              </p>
              <p>
                Meridian delivers a balanced mix of residential, commercial, retail, leisure and hospitality developments, including premium housing communities, integrated townships, Grade-A office spaces, destination malls and mixed-use developments.
              </p>
              <p>
                The Meridian has successfully completed 6,500+ projects spanning a development area of 900+ million sqft and has 167 ongoing projects across segments, with a development area of 240+ million sqft currently under development. Across its portfolio, Meridian oversees a total project value exceeding $12 billion and holds a land bank of over 3500 acres as of July-18. The company has been graded CRISIL DA1+ and enjoys a credit rating of ICRA A+.
              </p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-8 lg:gap-12 content-start"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="font-display text-4xl lg:text-5xl text-foreground mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

