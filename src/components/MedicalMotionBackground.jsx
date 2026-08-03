import { useEffect, useRef } from "react";

// Central controls for the decorative hero treatment. Adjust these values to
// tune density and motion without changing the component structure.
export const MEDICAL_MOTION_CONFIG = Object.freeze({
  desktopParticleCount: 42,
  tabletParticleCount: 28,
  mobileParticleCount: 16,
  particleOpacity: [0.07, 0.18],
  particleDuration: [18, 42],
  cellOpacity: 0.12,
  connectionOpacity: 0.26,
  glowOpacity: 0.14,
});

const particlePositions = [
  [5, 18], [11, 74], [17, 42], [23, 12], [28, 68], [34, 29], [39, 84],
  [45, 16], [51, 56], [57, 32], [62, 77], [68, 12], [73, 48], [79, 25],
  [84, 69], [91, 39], [96, 83], [8, 53], [15, 31], [21, 91], [30, 52],
  [37, 7], [43, 67], [49, 38], [55, 91], [61, 22], [66, 61], [72, 34],
  [77, 88], [83, 8], [89, 55], [94, 18], [3, 89], [13, 8], [26, 36],
  [32, 94], [47, 4], [58, 7], [70, 92], [81, 39], [87, 91], [98, 58],
];

const particles = particlePositions.map(([x, y], index) => ({
  id: index,
  x,
  y,
  size: 3 + ((index * 5) % 9),
  duration: 18 + ((index * 7) % 25),
  delay: -((index * 3.7) % 22),
  driftX: -18 + ((index * 11) % 37),
  driftY: -14 + ((index * 13) % 31),
  opacity: 0.07 + ((index * 3) % 12) / 100,
}));

function MedicalMotionBackground({ config = MEDICAL_MOTION_CONFIG, className = "" }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const element = backgroundRef.current;
    if (!element) return undefined;

    let inViewport = true;
    let observer;

    const updateMotionState = () => {
      element.dataset.motionState = !inViewport || document.hidden ? "paused" : "running";
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          inViewport = entry.isIntersecting;
          updateMotionState();
        },
        { threshold: 0.05 },
      );
      observer.observe(element);
    }

    document.addEventListener("visibilitychange", updateMotionState);
    updateMotionState();

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updateMotionState);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className={`medical-motion-background ${className}`.trim()}
      data-motion-state="running"
      aria-hidden="true"
    >
      <div className="medical-motion-glow medical-motion-glow-one" />
      <div className="medical-motion-glow medical-motion-glow-two" />
      <div className="medical-motion-cell medical-motion-cell-one" />
      <div className="medical-motion-cell medical-motion-cell-two" />
      <div className="medical-motion-cell medical-motion-cell-three" />
      <div className="medical-motion-pulse medical-motion-pulse-one" />
      <div className="medical-motion-pulse medical-motion-pulse-two" />

      <svg className="medical-motion-network" viewBox="0 0 1440 900" preserveAspectRatio="none" focusable="false">
        <g className="medical-motion-network-group" fill="none" strokeLinecap="round">
          <path className="medical-motion-connection medical-motion-connection-one" d="M-40 630 C230 460 310 760 570 560 S920 300 1490 470" />
          <path className="medical-motion-connection medical-motion-connection-two" d="M-70 215 C200 92 386 330 640 180 S1018 60 1510 230" />
          <path className="medical-motion-connection medical-motion-connection-three" d="M340 930 C555 665 770 910 970 650 S1250 380 1500 520" />
          <path className="medical-motion-globe-arc medical-motion-globe-arc-one" d="M915 825 A330 330 0 0 1 1230 180" />
          <path className="medical-motion-globe-arc medical-motion-globe-arc-two" d="M815 760 A410 410 0 0 1 1390 280" />
          <circle className="medical-motion-node" cx="285" cy="545" r="5" />
          <circle className="medical-motion-node medical-motion-node-soft" cx="578" cy="557" r="4" />
          <circle className="medical-motion-node" cx="915" cy="338" r="5" />
          <circle className="medical-motion-node medical-motion-node-soft" cx="1190" cy="180" r="4" />
          <circle className="medical-motion-node" cx="1080" cy="595" r="5" />
        </g>
      </svg>

      <div className="medical-motion-particles">
        {particles.slice(0, config.desktopParticleCount).map((particle) => (
          <span
            className={[
              "medical-motion-particle",
              particle.id >= config.mobileParticleCount ? "medical-motion-particle-desktop" : "",
              particle.id >= config.tabletParticleCount ? "medical-motion-particle-wide" : "",
            ].filter(Boolean).join(" ")}
            key={particle.id}
            style={{
              "--particle-x": `${particle.x}%`,
              "--particle-y": `${particle.y}%`,
              "--particle-size": `${particle.size}px`,
              "--particle-duration": `${particle.duration}s`,
              "--particle-delay": `${particle.delay}s`,
              "--particle-drift-x": `${particle.driftX}px`,
              "--particle-drift-y": `${particle.driftY}px`,
              "--particle-opacity": particle.opacity,
              "--particle-dim-opacity": (particle.opacity * 0.64).toFixed(3),
              "--particle-end-opacity": (particle.opacity * 0.74).toFixed(3),
            }}
          />
        ))}
      </div>
      <div className="medical-motion-readability-veil" />
    </div>
  );
}

export default MedicalMotionBackground;
