export const animations = {
  // Top -> Down
  topDown: {
    initial: {
      y: -50,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },

  // Appearance with delay
  appearance: {
    initial: {
      opacity: 0,
    },
    animate: i => ({
      opacity: 1,
      transition: {
        easy: "easyInOut",
        duration: 0.35,
        delay: i,
      },
    }),
  },

  // Right -> Left
  rightToLeft: {
    initial: {
      x: 100,
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },

  // Left -> Right
  leftToRight: {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },
};
