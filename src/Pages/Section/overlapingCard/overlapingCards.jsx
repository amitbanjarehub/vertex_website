import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverlappingCards = () => {
  const [cardsOrder, setCardsOrder] = useState([0, 1, 2]); // Order of cards
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
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

  return (
    <div style={{ position: 'relative', height: '100vh', padding: '100px 20px' }}>
      {cardsOrder.map((cardIndex, position) => (
        <Card
          key={cardIndex}
          ref={(el) => (cardsRef.current[cardIndex] = el)}
          onClick={() => handleCardClick(position)}
          style={{
            position: 'absolute',
            width: '300px',
            zIndex: 3 - position,
            left: '50%',
            transform: `translate(-50%, ${position * 20}px)`, // Offset to create stack effect
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
        >
          <CardContent>
            <Typography variant="h5">Card {cardIndex + 1}</Typography>
            <Typography variant="body2">This is the content of Card {cardIndex + 1}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OverlappingCards;
