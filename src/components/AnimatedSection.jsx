import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedSection({ as = "section", className = "", children, delay = 0, ...props }) {
  const MotionTag = motion[as] || motion.section;

  return (
    <MotionTag
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default AnimatedSection;
