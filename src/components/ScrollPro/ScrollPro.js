import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import './styles.css'
export const ScrollPro = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 3], [0.3, 0.3]);

  return (
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
  );
};
