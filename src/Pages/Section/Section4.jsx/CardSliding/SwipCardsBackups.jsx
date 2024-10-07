import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Box } from "@mui/material";
import Img1 from "./forms.png";
import Img2 from "./Quizes.png";
import Img3 from "./surveys.png";
import Img4 from "./Games.png";
import Img5 from "./Polls.png";
import Img6 from "./caruselImage.png";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <Box
      sx={{
        display: "grid",
        height: "500px",
        width: "100%",
        placeItems: "center",
        backgroundColor: "neutral.100",
      
      }}
    >
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}
    </Box>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      style={{
        height: "24rem", // 96 * 4 = 384px
        width: "18rem", // 72 * 4 = 288px
        transformOrigin: "bottom", // origin-bottom
        borderRadius: "0.5rem", // rounded-lg
        backgroundColor: "#fff", // bg-white
        objectFit: "cover", // object-cover
        cursor: isFront ? "grab" : "default", // hover:cursor-grab
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: -150, // Adjust this for swipe constraints
        right: 150,
      }}
      dragElastic={0.5} // This will allow smoother dragging
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// const cardData = [
//   {
//     id: 1,
//     url: Img1,
//   },
//   {
//     id: 2,
//     url: Img2,
//   },
//   {
//     id: 3,
//     url: Img3,
//   },
//   {
//     id: 4,
//     url: Img4,
//   },
//   {
//     id: 5,
//     url: Img5,
//   },
//   {
//     id: 6,
//     url: Img1,
//   },
//   {
//     id: 7,
//     url: Img2,
//   },
//   {
//     id: 8,
//     url: Img3,
//   },
// ];
