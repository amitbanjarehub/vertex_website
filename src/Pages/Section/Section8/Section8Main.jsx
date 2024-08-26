import React from "react";
import Section8M from "./Section8M";
import Section8 from "./Section8";
import { useMediaQuery, useTheme } from "@mui/material";

const Section8Main = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery("(min-width:1024px)");

  return (
    <>
      {!isLargeScreen && <Section8M />}
      {isLargeScreen && <Section8 />}
    </>
  );
};

export default Section8Main;
