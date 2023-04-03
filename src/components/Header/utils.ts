import { Variants } from "framer-motion";

export const desktopContent: Variants = {
  offscreen: {
    x: -50,
    y: 25,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "keyframes",
      duration: 5.5,
      ease: "easeIn",
    },
  },
};

export const mobileContent: Variants = {
  offscreen: {
    x: 10,
    y: -25,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "keyframes",
      duration: 5.5,
      ease: "easeIn",
    },
  },
};
