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
    },
    {
      media: { type: "video", src: Video2 },
      title: "Quizzes",
      description: "BluSmart got 35% more engagement with interactive quiz",
    },
    {
      media: { type: "video", src: Video3 },
      title: "Surveys",
      description: "Razorpay got 257% more feedback with interactive form",
    },
    {
        media: { type: "video", src: Video4 },
        title: "Games",
        description: "Preplaced saw 5X email to sale conversions with spin the wheel",
      },
      {
        media: { type: "video", src: Video5 },
        title: "Polls",
        description: "bigbasket saw 6X email engagement with interactive poll",
      },
      {
        media: { type: "video", src: Video6 },
        title: "Carousel",
        description: "Crore Club saw 2X email engagement with interactive carousel",
      },

  ];

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {cardArray.map((cardData, index) => (
        <VertexCard
          key={index}
          media={cardData.media}
          title={cardData.title}
          description={cardData.description}
        />
      ))}
    </Stack>
  );
};

export default Section2;
