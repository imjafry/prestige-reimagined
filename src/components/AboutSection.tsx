import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 39, suffix: "+", label: "Years of Excellence" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 190, suffix: "+", label: "Mn. Sq. Ft. Delivered" },
  { value: 170, suffix: "+", label: "Ongoing Projects" },
];

const CountUp = ({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
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
          <p className="section-label mb-6">ABOUT PRESTIGE GROUP</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* CRISIL Badge */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#e31837]">
                  CRISIL
                </span>
                <span className="text-xs text-muted-foreground">
                  An S&P Global Company
                </span>
              </div>
              <div className="h-12 w-px bg-gold/40" />
              <p className="font-display text-xl lg:text-2xl text-foreground leading-relaxed">
                Only CRISIL DA1+ rated Real Estate Developer in India
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Over the last decade, the Prestige Group has firmly established
                itself as one of the leading and most successful developers of
                real estate in India by imprinting its indelible mark across all
                asset classes. Founded in 1986, a leap that has been inspired by
                CMD Irfan Razack and marshaled by his brothers Rezwan Razack and
                Noaman Razack.
              </p>
              <p>
                The company has diversified over time into a number of
                related/non-related services, each of them spearheaded by
                individuals with adroit capacity. Services are as varied as the
                interior designing done by Morph Design Company (MDC) and the
                redefinition of elegance and suave in men's formal dressing by
                Prestige Fashions (P) Ltd. They are also the only developers in
                South India to boast of such a widely diverse portfolio covering
                the residential, commercial, retail, leisure and hospitality
                segments.
              </p>
              <p>
                The Prestige Group today has become a name that is synonymous
                with innovation. The company has pioneered many landmark
                developments and introduced many firsts to South India.
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
                  <CountUp end={stat.value} suffix={stat.suffix} />
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
