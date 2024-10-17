import react, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function Bouncer() {
  const [value1, setIsBouncing] = useState(false);
  const [counter, setCounter] = useState(0);

  const variants = {
    upper: {
      y: ["-80px", "-40px", "-20px", "0px"],
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    lower: {
      y: 0,
    },
  };

  function bounce() {
    // Trigger the bounce, then reset isBouncing after animation
    setIsBouncing(true);
    setCounter(counter + 1);
    setTimeout(() => {
      setIsBouncing(false); // Reset back to the resting state
    }, 600); // Match this timeout with the duration of the bounce
  }
  return (
    <div className="maincont">
      <h1 className="header">NEYmar Bouncing Counter</h1>
      <motion.div
        initial={{ y: 0 }}
        animate={value1 ? "upper" : "lower"}
        variants={variants}
        className="content"
      >
        <p className="counter">{counter}</p>
      </motion.div>
      <button className="clicker" onClick={bounce}>
        Bounce
      </button>
    </div>
  );
}

export default Bouncer;
