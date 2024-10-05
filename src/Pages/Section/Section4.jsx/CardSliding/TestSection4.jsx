import React, { useState } from "react";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import Video from "./Video.mp4";
import Video2 from "./Video2.mp4";
import Video3 from "./Video3.mp4";
import Img1 from "./forms.png";
import Img2 from "./Quizes.png";
import Img3 from "./surveys.png";
import VertexCard2 from "../../../../Components/card2/Card";

const cardArray = [
  {
    media: { type: "video", src: Video, src2: Img1 },
    title: "Forms",
    description: "Found it got 400% more registrations with interactive forms",
  },
  {
    media: { type: "video", src: Video2, src2: Img2 },
    title: "Quizzes",
    description: "BluSmart got 35% more engagement with interactive quiz",
  },
  {
    media: { type: "video", src: Video3, src2: Img3 },
    title: "Surveys",
    description: "Razorpay got 257% more feedback with more interactive form",
  },
];

const TestSection4 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box>
      <Marquee pauseOnHover={true} gradient={false}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {cardArray.map((cardData, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-block",
                margin: "0 20px",
              }}
            >
              <VertexCard2
                media={cardData.media}
                title={cardData.title}
                description={cardData.description}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onHoverOut={() => setHoveredIndex(null)}
              />
            </Box>
          ))}
        </Box>
      </Marquee>
    </Box>
  );
};

export default TestSection4;
