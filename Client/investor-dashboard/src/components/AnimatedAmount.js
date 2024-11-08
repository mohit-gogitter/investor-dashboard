// src/components/AnimatedNumber.js
import React, { useEffect, useState } from "react";

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startValue = displayValue;
    const duration = 1000;
    const frameDuration = 1000 / 60; // Roughly 60 frames per second
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const amount = Math.round(startValue + (value - startValue) * progress);
      setDisplayValue(amount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <p
      className="text-lg text-white font-semibold transition-colors duration-500"
      style={{
        transition: "color 0.5s ease-in-out",
      }}
    >
      £ {displayValue.toLocaleString()}
    </p>
  );
};

export default AnimatedNumber;
