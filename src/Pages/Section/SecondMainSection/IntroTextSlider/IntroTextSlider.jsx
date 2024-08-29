import React from "react";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Img1 from "../section2Image.png";
import Img2 from "../main2.png";

const IntroTextSlider = () => {
  return (
    <>
      <motion.div
        initial={{ y: "20vh" }} // Stack starts from below the viewport
        animate={{ y: 0 }} // Animates to its initial position
        transition={{
          duration: 2, // Duration of 2 seconds for each slide
          ease: "easeOut",
          repeat: Infinity, // Infinite repeat
          repeatDelay: 4, // 1 second delay between repeats
        }}
      >
        <Stack sx={{}}>
          <Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: {
                  xs: "28px",
                  sm: "28px",
                  md: "40px",
                  lg: "40px",
                  xl: "40px",
                },
                paddingTop: {
                  xs: "28px",
                  sm: "28px",
                  md: "40px",
                  lg: "40px",
                  xl: "40px",
                },
              }}
            >
              <Stack
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "28px",
                    md: "52px",
                    lg: "52px",
                    xl: "62px",
                  },
                  lineHeight: {
                    xs: "32px",
                    sm: "32px",
                    md: "62px",
                    lg: "62px",
                    xl: "62px",
                  },
                  fontWeight: { xs: 600, sm: 600, md: 600, lg: 600, xl: 600 },
                  color: "white",
                }}
              >
                {" "}
                Stand out in every inbox{" "}
              </Stack>
              <Stack
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "28px",
                    md: "52px",
                    lg: "52px",
                    xl: "62px",
                  },
                  lineHeight: {
                    xs: "32px",
                    sm: "32px",
                    md: "62px",
                    lg: "62px",
                    xl: "62px",
                  },
                  fontWeight: { xs: 600, sm: 600, md: 600, lg: 600, xl: 600 },
                  color: "white",
                }}
              >
                and boost conversion rates
              </Stack>
            </Stack>
          </Stack>

          <Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "12px",
                    md: "24px",
                    lg: "30px",
                    xl: "30px",
                  },
                  lineHeight: {
                    xs: "22px",
                    sm: "22px",
                    md: "30px",
                    lg: "30px",
                    xl: "30px",
                  },
                  fontWeight: { xs: 400, sm: 400, md: 300, lg: 300, xl: 300 },
                  color: "white",
                  // border: "1px solid white",
                  width: {
                    xs: "84%",
                    sm: "52%",
                    md: "80%",
                    lg: "76%",
                    xl: "50%",
                  },
                  marginBottom: {
                    xs: "28px",
                    sm: "28px",
                    md: "40px",
                    lg: "40px",
                    xl: "40px",
                  },
                }}
                textAlign={"center"}
              >
                {" "}
                Send interactive emails that work on all major email clients:
                Gmail, Yahoo Mail, Apple Mail and Mail.ru Explore all Use Cases
              </Stack>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "rgb(0, 0, 0)",
                  fontSize: {
                    lg: "16px",
                    xl: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                  fontWeight: 600,
                  ":hover": {
                    backgroundColor: "#fff",
                  },
                  marginBottom: {
                    xs: "28px",
                    sm: "28px",
                    md: "40px",
                    lg: "40px",
                    xl: "40px",
                  },
                }}
              >
                Explore all Use Cases
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </>
  );
};

export default IntroTextSlider;
