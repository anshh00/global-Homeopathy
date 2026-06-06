import React from "react";
import { motion } from "framer-motion";

function WorldVisual() {
  return (
    <motion.div
      className="hero-map premium-world"
      aria-label="Animated world connection visual"
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="world-orb">
        <span className="ring ring-one"></span>
        <span className="ring ring-two"></span>
        <span className="ring ring-three"></span>
        <span className="connection c-one"></span>
        <span className="connection c-two"></span>
        <span className="connection c-three"></span>
        <span className="city dubai">Dubai</span>
        <span className="city germany">Germany</span>
        <span className="city london">London</span>
        <span className="city goa">Goa</span>
      </div>
      <motion.div
        className="summit-note"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.65 }}
      >
        <span>Summit visibility</span>
        <strong>Burnett Homeopathy</strong>
        <p>Shown through summit organization, research initiatives, and leadership contributions.</p>
      </motion.div>
    </motion.div>
  );
}

export default WorldVisual;
