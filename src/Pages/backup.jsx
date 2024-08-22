import React from "react";
import VertexCard from "../../../Components/Card/Card";
import Video from "./Video.mp4";
import Video2 from "./Video2.mp4";
import Video3 from "./Video3.mp4";
import Video4 from "./Video4.mp4";
import Video5 from "./Video5.mp4";
import Video6 from "./Video6.mp4";

import { Stack } from "@mui/material";

const Section2 = () => {
  const cardArray = [
    {
      media: { type: "video", src: Video },
      title: "Forms",
      description:
        "Found it got 400% more registrations with interactive forms",
      cardStyle: { border: "1px solid red", maxHeight: "360px" },
      cardStyle2: {
        border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 100,
      },
    },
    {
      media: { type: "video", src: Video2 },
      title: "Quizzes",
      description: "BluSmart got 35% more engagement with interactive quiz",
      cardStyle: {
        border: "1px solid green",
        transform: "rotate(-7deg)",
        transformOrigin: "left",
        position: "relative",
        right: "40px",
        top: "20px",
        // zIndex: 1,
      },
      cardStyle2: {
        border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 100,
      },
    },
    {
      media: { type: "video", src: Video3 },
      title: "Surveys",
      description: "Razorpay got 257% more feedback with interactive form",
      cardStyle: {
        border: "1px solid blue",
        transform: "rotate(7deg)",
        transformOrigin: "left",
        position: "relative",
        right: "90px",
        bottom: "15px",
        //  top: "20px",
      },
      cardStyle2: {
        border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 100,
      },
    },
    {
      media: { type: "video", src: Video4 },
      title: "Games",
      description:
        "Preplaced saw 5X email to sale conversions with spin the wheel",
      cardStyle: {
        border: "1px solid red",
        transform: "rotate(-4deg)",
        transformOrigin: "left",
        position: "relative",
        right: "140px",
        bottom: "5px",
        // top: "20px",
      },
      cardStyle2: {
        border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 100,
      },
    },
    {
      media: { type: "video", src: Video5 },
      title: "Polls",
      description: "bigbasket saw 6X email engagement with interactive poll",
      cardStyle: {
        border: "1px solid green",
        transform: "rotate(7deg)",
        transformOrigin: "left",
        position: "relative",
        right: "180px",
        bottom: "15px",
        //  top: "20px",
      },
      cardStyle2: {
        border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 100,
      },
    },
    {
      media: { type: "video", src: Video6 },
      title: "Carousel",
      description:
        "Crore Club saw 2X email engagement with interactive carousel",
      cardStyle: {
        border: "1px solid blue",
        transform: "rotate(-4deg)",
        transformOrigin: "left",
        position: "relative",
        right: "250px",
        bottom: "2px",
      },
      cardStyle2: {
        border: "1px solid blue",
        maxWidth: 285,
        maxHeight: "460px",
        position: "relative",
        bottom: "40px",
        zIndex: 100,
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
      }}
    >
      {cardArray.map((cardData, index) => (
        <VertexCard
          key={index}
          media={cardData.media || ""}
          title={cardData.title || ""}
          description={cardData.description || ""}
          cardStyle={cardData.cardStyle || ""}
          cardStyle2={cardData.cardStyle2 || ""}
        />
      ))}
    </Stack>
  );
};

export default Section2;
