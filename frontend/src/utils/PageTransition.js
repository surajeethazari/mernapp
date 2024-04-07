import React from 'react';
import { motion } from 'framer-motion';

const opacityAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page"
      transition={{
        ease: 'easeInOut',
        duration: 0.4,
      }}
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
