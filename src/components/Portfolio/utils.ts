import { Variants } from "framer-motion";

export const braggemTech = [
  "React Js",
  "Python",
  "Django",
  "Django-Celery",
  "Django REST Framework",
  "React-Bootstrap",
  "React-Router",
  "Heroku",
  "PostGres Database",
  "NBA Schedule API",
];

export const newspaperTech = [
  "React Js",
  "Python",
  "Django",
  "Django REST Framework",
  "React-Bootstrap",
  "React-Router",
  "Heroku",
];

export const pixelTech = ["HTML5", "CSS3"];

export const cargillTech = ["React Native", "TypeScript", "Expo"];

export const ULTech = ["React", "TypeScript", "ViteJS"];

export const HPSTech = ["React", "TypeScript", "ViteJS", "EmailJS"];

export const content: Variants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "keyframes",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const mobileContent: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "keyframes",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
