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
     
    },

    // 2nd
    {
      media: { type: "video", src: Video2, src2: Img2 },
      title: "Quizzes",
      description: "BluSmart got 35% more engagement with interactive quiz",
    
    
    },
    // 3rd
    {
      media: { type: "video", src: Video3, src2: Img3 },
      title: "Surveys",
      description: "Razorpay got 257% more feedback with interactive form",
     
     
    },
    // 4th
    {
      media: { type: "video", src: Video4, src2: Img4 },
      title: "Games",
      description:
        "Preplaced saw 5X email to sale conversions with spin the wheel",
     
     
    },
    // 5th
    {
      media: { type: "video", src: Video5, src2: Img5 },
      title: "Polls",
      description: "bigbasket saw 6X email engagement with interactive poll",
     
     
    },
    // 6th
    {
      media: { type: "video", src: Video6, src2: Img6 },
      title: "Carousel",
      description:
        "Crore Club saw 2X email engagement with interactive carousel",
    
     
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


