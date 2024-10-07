import React from "react";
import { Box } from "@mui/material";

const DesignCards = () => {
  const cardArray = [
    {
      title: "Card 1",
    },
    {
      title: "Card 2",
    },

  ];

  return (
    <Box
      sx={{
        position: "relative", // Allows absolute positioning for child elements
        height: "320px", // Container height
        width: "400px", // Container width
        marginTop: "120px",
        marginBottom: "120px",
        marginLeft: "120px",
      }}
    >
      {cardArray.map((cardData, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute", // Allows the cards to overlap each other
            border: index === 0 ? "1px solid blue" : "1px solid red", // Blue border for Card 1, red for Card 2
            zIndex: index === 0 ? 1000 : 0, // Control the stacking order (Card 2 will be on top of Card 1)
            backgroundColor: "white", // Background color for visibility
            transform: index === 1 ? "rotate(4deg)" : "none", // Rotate Card 1 slightly
            height: index === 0 ? "400px" : "382px",
            width: index === 0 ? "300px" : "280px",
            transformOrigin: "bottom left", // Set the transform origin to the top right corner
            top: index === 0 ? "0px" : "0px", // Slightly adjust the top for Card 1
            right: index === 0 ? "0px" : "0px", // Move Card 1 to peek out from behind Card 2
          }}
        >
          {cardData.title}
        </Box>
      ))}
    </Box>
  );
};

export default DesignCards;
