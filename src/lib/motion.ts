import { Variants, Easing } from "framer-motion";

export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as Easing,
    },
  },
};

export const floatingSlowAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as Easing,
    },
  },
};

export const floatAndRotateAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut" as Easing,
    },
  },
};

export const springPhysics = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 1,
};

export const magneticPhysics = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};
