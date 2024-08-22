import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const VertexCard = ({
  media = { type: "", src: "" },
  title = "",
  description = "",
  cardStyle = {},
  cardStyle2 = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (event) => {
    event.target.play();
  };

  const handleMouseOut = (event) => {
    event.target.pause();
    event.target.currentTime = 0; // Reset video to the start
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 245,
        borderRadius: "16px",
        overflow: "hidden",
        ...(isHovered ? cardStyle2 : cardStyle),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {media.type === "video" && media.src ? (
          <video
            src={media.src}
            width="90%"
            muted
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              display: "block",
              marginTop: "20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
        ) : (
          <img
            src={media.src || "https://via.placeholder.com/150"}
            alt={title || "Default Title"}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        )}
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" textAlign={"center"}>
          {title || "Default Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {description || "This is the default description."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VertexCard;
