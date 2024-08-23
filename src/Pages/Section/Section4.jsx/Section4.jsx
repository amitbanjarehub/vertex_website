import React, { useState } from "react";
import VertexCard from "../../../Components/Card/Card";
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
import { Stack } from "@mui/material";
import VertexCard2 from "../../../Components/card2/Card";

const Section4 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardArray = [
    // 1st
    {
      media: { type: "video", src: Video, src2: Img1 },
      title: "Forms",
      description:
        "Found it got 400% more registrations with interactive forms",
      cardStyle: {
        position: "relative",
        zIndex: 10,
        maxHeight: "340px",
      },
      cardStyle2: {
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 400,
      },
    },

    // 2nd
    {
      media: { type: "video", src: Video2, src2: Img2 },
      title: "Quizzes",
      description: "BluSmart got 35% more engagement with interactive quiz",
      cardStyle: {
        maxHeight: "340px",
        transform: "rotate(-7deg)",
        transformOrigin: "left",
        position: "relative",
        right: "40px",
        top: "20px",
        zIndex: 20,
      },
      cardStyle2: {
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        right: "40px",
        bottom: "40px",
        zIndex: 100,
      },
      cardStyle3: {
        maxHeight: "340px",
        transform: "rotate(-7deg)",
        transformOrigin: "left",
        position: "relative",
        right: "40px",
        top: "20px",
        zIndex: 20,
      },
    },
    // 3rd
    {
      media: { type: "video", src: Video3, src2: Img3 },
      title: "Surveys",
      description: "Razorpay got 257% more feedback with interactive form",
      cardStyle: {
        // border: "1px solid blue",
        transform: "rotate(7deg)",
        maxHeight: "340px",
        transformOrigin: "left",
        position: "relative",
        right: "90px",
        bottom: "15px",
      },
      cardStyle2: {
        // border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        right: "90px",
        bottom: "40px",
        zIndex: 100,
      },
      cardStyle3: {
        // border: "1px solid blue",
        transform: "rotate(0deg)",
        transformOrigin: "right",
        position: "relative",
        bottom: "0px",
        right: "20px",
      },
    },
    // 4th
    {
      media: { type: "video", src: Video4, src2: Img4 },
      title: "Games",
      description:
        "Preplaced saw 5X email to sale conversions with spin the wheel",
      cardStyle: {
        // border: "1px solid red",
        transform: "rotate(-4deg)",
        maxHeight: "340px",
        transformOrigin: "left",
        position: "relative",
        right: "140px",
        bottom: "5px",
      },
      cardStyle2: {
        // border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        right: "140px",
        bottom: "40px",
        zIndex: 100,
      },
      cardStyle3: {
        // border: "1px solid red",
        transform: "rotate(0deg)",
        transformOrigin: "right",
        position: "relative",
        right: "70px",
        bottom: "0px",
      },
    },
    // 5th
    {
      media: { type: "video", src: Video5, src2: Img5 },
      title: "Polls",
      description: "bigbasket saw 6X email engagement with interactive poll",
      cardStyle: {
        // border: "1px solid green",
        maxHeight: "340px",
        transform: "rotate(7deg)",
        transformOrigin: "left",
        position: "relative",
        right: "180px",
        bottom: "15px",
      },
      cardStyle2: {
        // border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        right: "180px",
        bottom: "40px",
        zIndex: 100,
      },
      cardStyle3: {
        // border: "1px solid red",
        transform: "rotate(0deg)",
        transformOrigin: "right",
        position: "relative",
        right: "120px",
        bottom: "0px",
      },
    },
    // 6th
    {
      media: { type: "video", src: Video6, src2: Img6 },
      title: "Carousel",
      description:
        "Crore Club saw 2X email engagement with interactive carousel",
      cardStyle: {
        // border: "1px solid blue",
        maxHeight: "340px",
        transform: "rotate(-4deg)",
        transformOrigin: "left",
        position: "relative",
        right: "250px",
        bottom: "2px",
      },
      cardStyle2: {
        // border: "1px solid blue",
        maxHeight: "460px",
        maxWidth: 285,
        transform: "rotate(0deg)",
        transformOrigin: "left",
        position: "relative",
        right: "250px",
        bottom: "40px",
      },
      cardStyle3: {
        // border: "1px solid red",
        transform: "rotate(0deg)",
        transformOrigin: "right",
        position: "relative",
        right: "160px",
        bottom: "0px",
      },
    },
  ];

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
        height: "564px",
        border: "2px solid red",
      }}
    >
      {cardArray.map((cardData, index) => (
        <VertexCard2
          key={index}
          media={cardData.media || ""}
          title={cardData.title || ""}
          description={cardData.description || ""}
          cardStyle={cardData.cardStyle || ""}
          cardStyle2={cardData.cardStyle2 || ""}
          cardStyle3={cardData.cardStyle3 || ""}
          isHovered={hoveredIndex === index}
          isNextHovered={hoveredIndex === index - 1}
          onHover={() => setHoveredIndex(index)}
          onHoverOut={() => setHoveredIndex(null)}
        />
      ))}
    </Stack>
  );
};

export default Section4;
