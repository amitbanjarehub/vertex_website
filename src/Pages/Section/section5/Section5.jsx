import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const OverlappingCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardsOrder, setCardsOrder] = useState([
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
      description: "Razorpay got 257% more feedback with interactive form",
    },
    {
      media: { type: "video", src: Video4, src2: Img4 },
      title: "Games",
      description:
        "Preplaced saw 5X email to sale conversions with spin the wheel",
    },
    {
      media: { type: "video", src: Video5, src2: Img5 },
      title: "Polls",
      description: "bigbasket saw 6X email engagement with interactive poll",
    },
    {
      media: { type: "video", src: Video6, src2: Img6 },
      title: "Carousel",
      description:
        "Crore Club saw 2X email engagement with interactive carousel",
    },
  ]);

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50 * index,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const handleCardClick = (index) => {
    const newOrder = [...cardsOrder];
    const [movedCard] = newOrder.splice(index, 1);
    newOrder.push(movedCard);
    setCardsOrder(newOrder);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      style={{ position: "relative", height: "100vh", padding: "100px 20px" }}
    >
      {cardsOrder.map((card, index) => (
        <Card
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          onClick={() => handleCardClick(index)}
          style={{
            position: "absolute",
            width: "364px",
            height: "494px",
            zIndex: 3 - index,
            borderRadius: "16px",
            left: "50%",
            transform: `translate(-50%, ${index * 20}px)`, // Offset to create stack effect
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
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
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {hoveredIndex === index ? (
              <video
                src={card.media.src}
                width="90%"
                muted
                autoPlay
                loop
                style={{
                  display: "block",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              />
            ) : (
              <img
                src={card.media.src2 || "https://via.placeholder.com/150"}
                alt={card.title || "Default Title"}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
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
    </div>
  );
};

export default OverlappingCards;
// import React, { useEffect, useRef, useState } from "react";
// import { Box, Card, CardContent, Typography } from "@mui/material";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
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

// gsap.registerPlugin(ScrollTrigger);

// const OverlappingCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [cardsOrder, setCardsOrder] = useState([
//     {
//       media: { type: "video", src: Video, src2: Img1 },
//       title: "Forms",
//       description:
//         "Found it got 400% more registrations with interactive forms",
//     },
//     {
//       media: { type: "video", src: Video2, src2: Img2 },
//       title: "Quizzes",
//       description: "BluSmart got 35% more engagement with interactive quiz",
//     },
//     {
//       media: { type: "video", src: Video3, src2: Img3 },
//       title: "Surveys",
//       description: "Razorpay got 257% more feedback with interactive form",
//     },
//     {
//       media: { type: "video", src: Video4, src2: Img4 },
//       title: "Games",
//       description:
//         "Preplaced saw 5X email to sale conversions with spin the wheel",
//     },
//     {
//       media: { type: "video", src: Video5, src2: Img5 },
//       title: "Polls",
//       description: "bigbasket saw 6X email engagement with interactive poll",
//     },
//     {
//       media: { type: "video", src: Video6, src2: Img6 },
//       title: "Carousel",
//       description:
//         "Crore Club saw 2X email engagement with interactive carousel",
//     },
//   ]);

//   const cardsRef = useRef([]);

//   useEffect(() => {
//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50 * index,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const handleCardClick = (index) => {
//     const newOrder = [...cardsOrder];
//     const [movedCard] = newOrder.splice(index, 1);
//     newOrder.push(movedCard);
//     setCardsOrder(newOrder);
//   };

//   const handleMouseOver = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseOut = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "100vh",
//         padding: "100px 20px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {cardsOrder.map((card, index) => (
//         <Card
//           key={index}
//           ref={(el) => (cardsRef.current[index] = el)}
//           onClick={() => handleCardClick(index)}
//           style={{
//             position: "absolute",
//             width: "264px",
//             height: "364px",
//             zIndex: cardsOrder.length - index, // Higher index cards appear on top
//             borderRadius: "16px",
//             left: "50%",
//             top: `${index * 8}px`, // Adjusted to create a more subtle overlapping effect
//             transform: `translateX(-50%)`, // Center the cards horizontally
//             cursor: "pointer",
//             transition: "transform 0.3s ease",
//             boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               borderRadius: "16px",
//               overflow: "hidden",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//             onMouseOver={() => handleMouseOver(index)}
//             onMouseOut={handleMouseOut}
//           >
//             {hoveredIndex === index ? (
//               <video
//                 src={card.media.src}
//                 width="90%"
//                 muted
//                 autoPlay
//                 loop
//                 style={{
//                   display: "block",
//                   borderRadius: "16px",
//                 }}
//               />
//             ) : (
//               <img
//                 src={card.media.src2 || "https://via.placeholder.com/150"}
//                 alt={card.title || "Default Title"}
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   display: "block",
//                 }}
//               />
//             )}
//           </Box>

//           <CardContent>
//             <Typography variant="h6" component="div" textAlign={"center"}>
//               {card.title || "Default Title"}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               textAlign={"center"}
//             >
//               {card.description || "This is the default description."}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default OverlappingCards;
