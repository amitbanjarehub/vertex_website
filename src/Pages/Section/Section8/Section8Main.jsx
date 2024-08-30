import React from "react";

import { useMediaQuery, useTheme } from "@mui/material";
import CardSection from "../FourthMainSection/MobileCardsSection/CardSection";
import Section8 from "./Section8";

const Section8Main = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery("(min-width:1024px)");

  return (
    <>
      {/* {!isLargeScreen && <Section8M />} */}
      {!isLargeScreen && <CardSection />}
      {isLargeScreen && <Section8 />}
    </>
  );
};

export default Section8Main;
