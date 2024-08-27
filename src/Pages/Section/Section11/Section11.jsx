import React from "react";
import { Box } from "@mui/material";
import Img1 from "./logos/img1.png";
import Img2 from "./logos/img3.png";
import Img3 from "./logos/img5.png";
import Img4 from "./logos/img5.png";
import Img5 from "./logos/img6.png";
import Img6 from "./logos/img7.png";
import Img7 from "./logos/img8.png";
import Img8 from "./logos/img9.png";
import Marquee from "react-fast-marquee";

const logos = [
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
  { img: Img5 },
  { img: Img6 },
  { img: Img7 },
  { img: Img8 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
  { img: Img5 },
  { img: Img6 },
  { img: Img7 },
  { img: Img8 },
];

const Section11 = () => {
  return (
    <Box>
      <Marquee>
        <div>
          {" "}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.img}
              alt={`logo-${index}`}
              style={{
                height: "40px",
                width: "100px",
                marginLeft: "40px",
                marginBottom: "40px",
                color: "white",
              }}
            />
          ))}
        </div>
      </Marquee>
    </Box>
  );
};

export default Section11;
