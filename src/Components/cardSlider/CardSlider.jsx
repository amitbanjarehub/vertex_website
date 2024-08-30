import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const SimpleCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        border: "1px solid red",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
