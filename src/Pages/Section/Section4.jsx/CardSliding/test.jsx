import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Video from "./Video.mp4";
import Video2 from "./Video2.mp4";
import Video3 from "./Video3.mp4";
import Video4 from "./Video4.mp4";
import Video5 from "./Video5.mp4";
import Video6 from "./Video6.mp4";
import Img1 from "./forms.png";
import Img2 from "./Quizes.png";
import Img3 from "./surveys.png";
import Img4 from "./Games.png";
import Img5 from "./Polls.png";
import Img6 from "./caruselImage.png";

const OverlappingCards = () => {
  const [cardsOrder, setCardsOrder] = useState([
    {
      media: { type: "video", src: Video, src2: Img1 },
      title: "Forms",
      description:
        "Found it got 400% more registrations with interactive forms",
    },
    {
      media: { type: "video", src2: Img2, src: Video2 },
      title: "Quizzes",
      description: "BluSmart got 35% more engagement with interactive quiz",
    },
    {
      media: { type: "video", src2: Img3, src: Video3 },
      title: "Surveys",
      description: "Razorpay got 257% more feedback with interactive form",
    },
    {
      media: { type: "video", src2: Img4, src: Video4 },
      title: "Games",
      description:
        "Preplaced saw 5X email to sale conversions with spin the wheel",
    },
    {
      media: { type: "video", src2: Img5, src: Video5 },
      title: "Polls",
      description: "bigbasket saw 6X email engagement with interactive poll",
    },
    {
      media: { type: "video", src2: Img6, src: Video6 },
      title: "Carousel",
      description:
        "Crore Club saw 2X email engagement with interactive carousel",
    },
  ]);

  const cardsRef = useRef([]);
  const [isSwiping, setIsSwiping] = useState(false); // To manage swipe animation

  const handleSwipeLeft = (index) => {
    setIsSwiping(true); // Trigger swipe animation
    setTimeout(() => {
      const newOrder = [...cardsOrder];
      const [movedCard] = newOrder.splice(index, 1);
      newOrder.push(movedCard);
      setCardsOrder(newOrder);
      setIsSwiping(false); // Reset animation state after swipe
    }, 500); // Duration of swipe animation
  };

  return (
    <Box
      sx={{
        display: "grid",
        height: "500px",
        width: "100%",
        placeItems: "center",
        backgroundColor: "neutral.100",
        position: "relative",
      }}
    >
      {cardsOrder.map((card, index) => (
        <Card
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          style={{
            position: "absolute",
            width: "300px",
            height: "494px",
            zIndex: cardsOrder.length - index, // Stack cards with higher z-index on top
            borderRadius: "16px",
            left: "50%",
            transform: `translateX(-50%)`,
            transition:
              isSwiping && index === 0
                ? "transform 0.5s ease-out, opacity 0.5s ease-out"
                : "none",
            transform:
              isSwiping && index === 0
                ? "translateX(-100%)"
                : "translateX(-50%)", // Moves top card left
            opacity: isSwiping && index === 0 ? 0 : 1, // Disappears after swipe
            cursor: "pointer",
          }}
          onClick={() => handleSwipeLeft(index)}
        >
          <Box
            sx={{
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={card.media.src2 || "https://via.placeholder.com/150"}
              alt={card.title || "Default Title"}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>

          <CardContent>
            <Typography variant="h6" component="div" textAlign={"center"}>
              {card.title || "Default Title"}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              {card.description || "This is the default description."}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default OverlappingCards;
