import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Stack } from "@mui/system";
import { ResponsiveMasonry } from "react-responsive-masonry";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Set up the background color of the whole page
const PageBackground = styled(Box)({
  backgroundColor: "#0d0d31", // Adjusted to a dark blue/purple shade similar to your image
  minHeight: "Auto",
  display: "flex",
  justifyContent: "center", // Center the grid container
  alignItems: "center",
});

const StyledCard = styled(motion.div)(
  ({ cardHeight, cardWidth, customStyles }) => ({
    margin: "5px", // Reduce margin to reduce gap between cards
    position: "relative", // Required for overlay
    height: cardHeight, // Set dynamic height for each card
    width: cardWidth, // Set dynamic width for each card
    background: "white",
    borderRadius: "20px",
    // border: "1px solid red",
    ...customStyles, // Apply custom styles from props
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0))", // Overlay similar to the cards in the image
      zIndex: 1,
    },
    "& img": {
      filter: "brightness(0.7)", // Adjust image brightness
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensure the image covers the card
    },
  })
);

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
  gap: "12px", // Reduce gap between cards
  justifyContent: "center", // Center the cards in the row
});

const CombineMansorySlider = () => {
  const constraintsRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = constraintsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Movement area ko control karna
    const movementRangeX = rect.width / 6;
    const movementRangeY = rect.height / 6;

    // Card ke movement ko parent div ke andar restrict karna
    const limitedX = Math.max(
      Math.min(x, movementRangeX - 300 / 2), // Adjust this value for horizontal limit
      -movementRangeX + 300 / 2 // Adjust this value for horizontal limit
    );
    const limitedY = Math.max(
      Math.min(y, movementRangeY - 360 / 2), // Adjust this value for vertical limit
      -movementRangeY + 360 / 2 // Adjust this value for vertical limit
    );

    setPosition({ x: limitedX, y: limitedY });
  };

  // Array with 12 items with varying heights and widths
  const items = [
    {
      title: "Card 1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      height: "640px",
      width: "304px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    {
      title: "Card 2",
      description: "Description 2",
      image: "https://via.placeholder.com/150",
      height: "700px",
      width: "304px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    {
      title: "Card 3",
      description: "Description 3",
      image: "https://via.placeholder.com/150",
      height: "780px",
      width: "304px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    {
      title: "Card 4",
      description: "Description 4",
      image: "https://via.placeholder.com/150",
      height: "640px",
      width: "304px",
    },
    {
      title: "Card 5",
      description: "Description 5",
      image: "https://via.placeholder.com/150",
      height: "720px",
      width: "304px",
      position: "relative",
      bottom: "40px",
      customStyles: {
        position: "relative",
        bottom: "120px",
      },
    },
    {
      title: "Card 6",
      description: "Description 6",
      image: "https://via.placeholder.com/150",
      height: "720px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "60px",
      },
    },
    {
      title: "Card 7",
      description: "Description 7",
      image: "https://via.placeholder.com/150",
      height: "760px",
      width: "304px",
      customStyles: {
        position: "relative",
        top: "20px",
      },
    },
    {
      title: "Card 8",
      description: "Description 8",
      image: "https://via.placeholder.com/150",
      height: "680px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "110px",
      },
    },
    {
      title: "Card 9",
      description: "Description 9",
      image: "https://via.placeholder.com/150",
      height: "780px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "130px",
      },
    },
    {
      title: "Card 10",
      description: "Description 10",
      image: "https://via.placeholder.com/150",
      height: "780px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "80px",
      },
    },
    {
      title: "Card 11",
      description: "Description 11",
      image: "https://via.placeholder.com/150",
      height: "540px",
      width: "304px",
      customStyles: {
        position: "relative",
        top: "40px",
      },
    },
    {
      title: "Card 12",
      description: "Description 12",
      image: "https://via.placeholder.com/150",
      height: "820px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "160px",
      },
    },

    {
      title: "Card 13",
      description: "Description 9",
      image: "https://via.placeholder.com/150",
      height: "780px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "150px",
      },
    },
    {
      title: "Card 14",
      description: "Description 10",
      image: "https://via.placeholder.com/150",
      height: "680px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "80px",
      },
    },
    {
      title: "Card 15",
      description: "Description 11",
      image: "https://via.placeholder.com/150",
      height: "740px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "210px",
      },
    },
    {
      title: "Card 16",
      description: "Description 12",
      image: "https://via.placeholder.com/150",
      height: "720px",
      width: "304px",
      customStyles: {
        position: "relative",
        bottom: "140px",
      },
    },
  ];

  return (
    <PageBackground>
      <Stack
        style={{
          height: "auto",
          padding: "0",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "500px",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "4px",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.2)",
            position: "relative",
          }}
          ref={constraintsRef}
          onMouseMove={handleMouseMove}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
          >
            <GridContainer sx={{ marginTop: "80px", marginLeft: "380px" }}>
              {items.map((item, index) => (
                <StyledCard
                  key={index}
                  cardHeight={item.height || ""}
                  cardWidth={item.width || ""}
                  customStyles={item.customStyles || ""}
                  animate={{
                    x: position.x * 0.1,
                    y: position.y * 0.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                    //   border: "4px solid blue",
                      height: "30%", // Custom height
                      width: "100%", // Custom width (100% of the card width)
                      objectFit: "cover",
                      borderRadius: "12px", // Ensures the image covers the entire cardMedia area,

                    }}
                  />
                  <CardContent sx={{ zIndex: 2, height: "30%" }}>
                    <Typography variant="h6" color="black">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {item.description}
                    </Typography>
                  </CardContent>

                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                    //   border: "4px solid blue",
                      height: "34%", // Custom height
                      width: "100%", // Custom width (100% of the card width)
                      objectFit: "cover", // Ensures the image covers the entire cardMedia area
                    }}
                  />
                </StyledCard>
              ))}
            </GridContainer>
          </ResponsiveMasonry>
        </motion.div>
      </Stack>
    </PageBackground>
  );
};

export default CombineMansorySlider;
