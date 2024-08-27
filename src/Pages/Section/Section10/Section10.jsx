import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import Video from "./mainSection2Video.mp4";

const VideoCard = () => {
  return (
    
    <Box sx={{ border: "1px sloid white", marginTop: "80px" }}>
      <Card
        sx={{
          width: { lg: "84%", xl: "100%", md: "86%", sm: "90%", xs: "90%" },
          height: { lg: "84%", xl: "100%", md: "86%", sm: "90%", xs: "90%" },
          maxWidth: "1140px",
          maxHeight: "664px",
          margin: "auto",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          border: {
            lg: "24px solid #313136",
            xl: "24px solid #313136",
            md: "20px solid #313136",
            sm: "8px solid #313136",
            xs: "8px solid #313136",
          },
        }}
      >
        <CardMedia
          component="video"
          // src="https://www.w3schools.com/html/mov_bbb.mp4" // yahan apni video ka link dalen
          src={Video}
          autoPlay
          loop
          muted
          sx={{
            width: "100%",
            height: "auto",
            border: "1px sloid white",
          }}
        />
      </Card>
    </Box>
  );
};

export default VideoCard;
