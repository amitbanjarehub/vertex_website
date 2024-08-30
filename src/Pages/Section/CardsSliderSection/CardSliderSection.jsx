import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Stack } from "@mui/system";

const CardSliderSection = () => {
  const constraintsRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = constraintsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Movement area ko control karna
    const movementRangeX = rect.width / 6; // Increase/Decrease this value to adjust horizontal movement area
    const movementRangeY = rect.height / 6; // Increase/Decrease this value to adjust vertical movement area

    // Card ke movement ko parent div ke andar restrict karna
    const limitedX = Math.max(
      Math.min(x, movementRangeX - cardStyle.width / 2), // Adjust this value for horizontal limit
      -movementRangeX + cardStyle.width / 2 // Adjust this value for horizontal limit
    );
    const limitedY = Math.max(
      Math.min(y, movementRangeY - cardStyle.height / 2), // Adjust this value for vertical limit
      -movementRangeY + cardStyle.height / 2 // Adjust this value for vertical limit
    );

    setPosition({ x: limitedX, y: limitedY });
  };

  const cardStyle = {
    width: 300, // Width of the card
    height: 360, // Height of the card
    background: "white",
    borderRadius: "20px",
    border: "1px solid red",
    position: "relative",
    marginLeft: "140px",
    marginBottom: "8px",
  };

  return (
    <Stack
      style={{
        height: "150vh",
        padding: "0",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "500px",
        background: "linear-gradient(180deg, #101043, #212529)",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "4px", // Gap between cards
          alignItems: "center", // Center align items vertically within rows
          justifyContent: "center", // Center align items horizontally within the container
          background: "rgba(255, 255, 255, 0.2)",
          position: "relative",
          border: "4px solid red",
        }}
        ref={constraintsRef}
        onMouseMove={handleMouseMove}
      >
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            animate={{
              x: position.x * 0.1,
              y: position.y * 0.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        ))}
      </motion.div>
    </Stack>
  );
};

export default CardSliderSection;
