import React from "react";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";

const VertexCard = ({
  media = { type: "", src: "", src2: "" },
  title = "",
  description = "",
  cardStyle = {},
  cardStyle2 = {},
  cardStyle3 = {},
  isHovered,
  isNextHovered,
  onHover,
  onHoverOut,
}) => {
  const handleMouseOver = (event) => {
    event.target.play();
  };

  const handleMouseOut = (event) => {
    event.target.pause();
    event.target.currentTime = 0;
  };

  return (
    <Card
      sx={{
        maxWidth: 225,
        borderRadius: "16px",
        overflow: "hidden",
        // ...(isHovered || isNextHovered ? cardStyle2 : cardStyle),
        ...(isHovered ? cardStyle2 : isNextHovered ? cardStyle3 : cardStyle),
        border: "1px solid green",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
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
        {isHovered ? (
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
            src={media.src2 || "https://via.placeholder.com/150"}
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
