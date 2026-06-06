import React from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

function splitStatValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/);

  if (!match) {
    return { number: 0, suffix: value };
  }

  return { number: Number(match[1]), suffix: match[2] };
}

function CounterValue({ value }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { number, suffix } = splitStatValue(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  React.useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(count, number, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [count, isInView, number]);

  return (
    <motion.strong ref={ref}>
      {number > 0 ? rounded : value}
    </motion.strong>
  );
}

function StatBand({ stats }) {
  return (
    <section className="stats-band" aria-label="Statistics">
      {stats.map((stat) => (
        <motion.article
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.45 }}
        >
          <CounterValue value={stat.value} />
          <span>{stat.label}</span>
        </motion.article>
      ))}
    </section>
  );
}

export default StatBand;
