import React from "react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Set up the background color of the whole page
const PageBackground = styled(Box)({
  backgroundColor: "#0d0d31", // Adjusted to a dark blue/purple shade similar to your image
  minHeight: "100vh",
  padding: "20px",
  display: "flex",
  justifyContent: "center", // Center the grid container
});

const StyledCard = styled(Card)(({ cardHeight, cardWidth, customStyles }) => ({
  margin: "5px", // Reduce margin to reduce gap between cards
  position: "relative", // Required for overlay
  height: cardHeight, // Set dynamic height for each card
  width: cardWidth, // Set dynamic width for each card
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
}));

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
  gap: "12px", // Reduce gap between cards
  justifyContent: "center", // Center the cards in the row
});

const MasonryLayout = () => {
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
    }, // Increased height and width
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
  ];

  return (
    <PageBackground>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <GridContainer>
          {items.map((item, index) => (
            <StyledCard
              key={index}
              cardHeight={item.height || ""}
              cardWidth={item.width || ""}
              customStyles={item.customStyles || ""}
            >
              <CardMedia component="img" image={item.image} alt={item.title} />
              <CardContent sx={{ zIndex: 2 }}>
                <Typography variant="h6" color="white">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {item.description}
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </GridContainer>
      </ResponsiveMasonry>
    </PageBackground>
  );
};

export default MasonryLayout;
