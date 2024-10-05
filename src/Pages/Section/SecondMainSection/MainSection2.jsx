import { Button, Stack } from "@mui/material";
import React from "react";
import Img1 from "./section2Image.png";
import Img2 from "./main2.png";
import VideoCard from "../Section10/Section10";
import Section2 from "../Section2/Section2";
import Section11 from "../Section11/Section11";
import RevenueDetails from "./RevenueTextSlider/RevenueDetails";
import IntroTextSlider from "./IntroTextSlider/IntroTextSlider";

const MainSection2 = () => {
  return (
    <>
      <Stack
        sx={{ height: "auto", marginTop: "280px", }}
      >
        <Stack
          sx={{
            backgroundColor: "#06051b",
            height: "auto",
            color: "white",
          }}
        >
          <IntroTextSlider />

          <VideoCard />

          <RevenueDetails />

          <Section11 />
         
        </Stack>

      </Stack>
    </>
  );
};

export default MainSection2;
