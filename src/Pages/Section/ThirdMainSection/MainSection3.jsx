import { Button, Stack } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Img1 from "./main1.png";
import Img2 from "./main2.png";
import Section3 from "../Section3/Section3";
import IntroSection from "./IntroSection/IntroSection";
// import AnimatedText from "./TextAnimation";
import FooterSection from "./FooterSection/FooterSection";
import CardsScrolling from "./StackingCardsScrollingEffect/CardsScrolling";

const MainSection3 = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#f4f6fa",
        height: "auto",
        // border: "1px solid red",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "column",
        },
        justifyContent: "center",
        alignItems: "center",
        marginTop: "120px",
        width: { xs: "100%", sm: "100%" },
      }}
    >
      <IntroSection text="The only complete interactive email marketing platform" />

      <CardsScrolling />

      {/* <Section3 /> */}

      <FooterSection />
    </Stack>
  );
};

export default MainSection3;
