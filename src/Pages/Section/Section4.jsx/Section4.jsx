// import React, { useState } from "react";
// import VertexCard from "../../../Components/Card/Card";
// import Video from "./Video.mp4";
// import Video2 from "./Video2.mp4";
// import Video3 from "./Video3.mp4";
// import Video4 from "./Video4.mp4";
// import Video5 from "./Video5.mp4";
// import Video6 from "./Video6.mp4";
// import Img1 from "./forms.png";
// import Img2 from "./Quizes.png";
// import Img3 from "./surveys.png";
// import Img4 from "./Games.png";
// import Img5 from "./Polls.png";
// import Img6 from "./caruselImage.png";
// import { Stack } from "@mui/material";
// import VertexCard2 from "../../../Components/card2/Card";

// const Section4 = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const cardArray = [
//     // 1st
//     {
//       media: { type: "video", src: Video, src2: Img1 },
//       title: "Forms",
//       description:
//         "Found it got 400% more registrations with interactive forms",
//     },

//     // 2nd
//     {
//       media: { type: "video", src: Video2, src2: Img2 },
//       title: "Quizzes",
//       description: "BluSmart got 35% more engagement with interactive quiz",
//     },
//     // 3rd
//     {
//       media: { type: "video", src: Video3, src2: Img3 },
//       title: "Surveys",
//       description: "Razorpay got 257% more feedback with more interactive form",
//     },
//   ];

//   return (
//     <Stack
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         // border: "1px solid red",
//         height: "564px",

//       }}
//     >
//       <Stack
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           // border: "1px solid red",
//           height: "564px",
//           width: "996px",

//         }}
//       >
//         {cardArray.map((cardData, index) => (
//           <VertexCard2
//             key={index}
//             index1={index}
//             media={cardData.media || ""}
//             title={cardData.title || ""}
//             description={cardData.description || ""}
//             cardStyle={cardData.cardStyle || ""}
//             isHovered={hoveredIndex === index}
//             isNextHovered={hoveredIndex === index - 1}
//             onHover={() => setHoveredIndex(index)}
//             onHoverOut={() => setHoveredIndex(null)}
//           />
//         ))}
//       </Stack>
//     </Stack>
//   );
// };

// export default Section4;
import React, { useState, useEffect } from "react";
import VertexCard2 from "../../../Components/card2/Card";
import Video from "./Video.mp4";
import Video2 from "./Video2.mp4";
import Video3 from "./Video3.mp4";
import Img1 from "./forms.png";
import Img2 from "./Quizes.png";
import Img3 from "./surveys.png";
import { Stack, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import TestSection4 from "./CardSliding/TestSection4";

const Section4 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const cardArray = [
    {
      media: { type: "video", src: Video, src2: Img1 },
      title: "Forms",
      description:
        "Found it got 400% more registrations with interactive forms",
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

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentCard((prevCard) => (prevCard + 1) % cardArray.length);
      }, 3000); // change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile, cardArray.length]);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "564px",
      }}
    >
      {isMobile ? (
        // <Box
        //   sx={{
        //     width: "100%",
        //     overflow: "hidden",
        //   }}
        // >
        //   <Box
        //     sx={{
        //       display: "flex",
        //       transition: "transform 1s ease-in-out", // transition duration for swipe
        //       transform: `translateX(-${currentCard * 100}%)`,
        //       width: `${cardArray.length * 100}%`,
        //     }}
        //   >
        //     {cardArray.map((cardData, index) => (
        //       <Box
        //         key={index}
        //         sx={{
        //           width: "100%",
        //           flexShrink: 0,
        //           display: "flex",
        //           justifyContent: "center",
        //         }}
        //       >
        //         <VertexCard2
        //           media={cardData.media}
        //           title={cardData.title}
        //           description={cardData.description}
        //           isHovered={hoveredIndex === index}
        //           onHover={() => setHoveredIndex(index)}
        //           onHoverOut={() => setHoveredIndex(null)}
        //         />
        //       </Box>
        //     ))}
        //   </Box>
        // </Box>
        <TestSection4 />
      ) : (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "564px",
            width: "996px",

            // border: "1px solid red",
          }}
        >
          {cardArray.map((cardData, index) => (
            <VertexCard2
              key={index}
              media={cardData.media}
              title={cardData.title}
              description={cardData.description}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onHoverOut={() => setHoveredIndex(null)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Section4;
