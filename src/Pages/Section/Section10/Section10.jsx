import React from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Video from "./mainSection2Video.mp4";

const VideoCard = () => {
  const { scrollY } = useViewportScroll();

  // Tilt the box forward initially, and straighten it out as you scroll
  const tilt = useTransform(scrollY, [0, 800], [80, 0]);

  return (
    <Box sx={{ marginTop: "80px" }}>
      <motion.div style={{ perspective: 1000 }}>
        <motion.div
          style={{
            rotateX: tilt,
          }}
          transition={{
            type: "spring",
            stiffness: 120, // Lower stiffness for smoother transition
            damping: 60, // Damping to control bounce
          }}
        >
          <Card
            sx={{
              width: { lg: "84%", xl: "100%", md: "86%", sm: "90%", xs: "90%" },
              height: {
                lg: "84%",
                xl: "100%",
                md: "86%",
                sm: "90%",
                xs: "90%",
              },
              // maxWidth: "1140px",
              maxWidth: "1640px",
              maxHeight: "864px",
              margin: "auto",
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              border: {
                lg: "24px solid #313136",
                xl: "24px solid #313136",
                // xl: "2px solid red",
                md: "20px solid #313136",
                sm: "8px solid #313136",
                xs: "8px solid #313136",
              },
            }}
          >
            <CardMedia
              component="video"
              src={Video}
              autoPlay
              loop
              muted
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Card>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default VideoCard;
