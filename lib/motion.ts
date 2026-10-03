export const MOTION = {
  easePathway: "cubic-bezier(0.22, 1, 0.36, 1)",
  duration: {
    feedback: 200,
    reveal: 500,
    hero: 900,
    page: 250,
  },
  stagger: 80,
};

export const TRANSITION_STYLES = {
  transitionProperty: "transform, opacity",
  transitionTimingFunction: MOTION.easePathway,
};
