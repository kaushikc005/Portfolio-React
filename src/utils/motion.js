export const bounce = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      // stiffness: 300,
      // damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // stiffness: 80,
      delay: 0.5,
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 150 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textAnimate = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration: 1,
    },
  },
});
export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 640) {
    console.log("outside of sidebar reached");
    return { right: !menuOpened && "-100%" };
  }
};
