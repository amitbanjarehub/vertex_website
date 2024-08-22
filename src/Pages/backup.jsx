import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const VertexCard = ({
  media = { type: "", src: "" },
  title = "",
  description = "",
}) => {

  const handleMouseOver = (event) => {
    event.target.play();
  };

  const handleMouseOut = (event) => {
    event.target.pause();
    event.target.currentTime = 0; // Reset video to the start
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "16px", overflow: "hidden" }}>
      <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
        {media.type === "video" && media.src ? (
          <video
            src={media.src}
            width="100%"
            muted
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ display: "block" }} // Ensure the video takes up the full space
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
        <Typography variant="h6" component="div">
          {title || "Default Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description || "This is the default description."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VertexCard;