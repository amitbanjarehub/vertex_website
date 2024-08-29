import { Button, Stack } from "@mui/material";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Img1 from "../main1.png";
import Img2 from "../main2.png";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }} // Stack starts from below the viewport
      animate={{ y: 0 }} // Animates to its initial position
      transition={{
        duration: 2, // Duration of 2 seconds for each slide
        ease: "easeOut",
        repeat: Infinity, // Infinite repeat
        repeatDelay: 4, // 1 second delay between repeats
      }}
    >
      <Stack
        sx={{
          //   border: "1px solid blue",
          height: "auto",
          //   marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#5a45fe",
              width: {
                xs: "282px",
                sm: "282px",
                md: "282px",
                lg: "282px",
                xl: "282px",
              },
              marginBottom: "40px",
            }}
          >
            Try mailmodo for free{" "}
            <FaLongArrowAltRight
              style={{ marginBottom: "4px", marginLeft: "8px" }}
            />
          </Button>
        </Stack>
        <Stack
          sx={{
            fontSize: {
              xs: "30px",
              sm: "30px",
              md: "62px",
              lg: "62px",
              xl: "62px",
            },
            lineHeight: {
              xs: "36px",
              sm: "36px",
              md: "72px",
              lg: "72px",
              xl: "72px",
            },
            fontWeight: { xs: 600, sm: 600, md: 600, lg: 600, xl: 600 },
            color: "rgb(0, 0, 0)",
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
            // border: "1px solid blue",
            width: { xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "60%" },

            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          “Mailmodo makes interactive emails as simple as regular ones.”
        </Stack>
        <Stack
          sx={{
            // border: "1px solid green",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "70%", lg: "60%", xl: "60%" },
            marginBottom: "40px",
            height: "96px",
          }}
        >
          <Stack
            sx={{
              //   border: "1px solid red",
              height: {
                xs: "30px",
                sm: "30px",
                md: "30px",
                lg: "30px",
                xl: "30px",
              },
              width: {
                xs: "96px",
                sm: "120px",
                md: "180px",
                lg: "188px",
                xl: "188px",
              },
            }}
          >
            {" "}
            <img
              src={Img1}
              alt="logo"
              style={{
                height: {
                  xs: "20px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                },
                width: {
                  xs: "188px",
                  sm: "188px",
                  md: "188px",
                  lg: "188px",
                  xl: "188px",
                },
              }}
            />
          </Stack>
          <Stack
            sx={{
              //   border: "1px solid red",
              height: {
                xs: "96px",
                sm: "96px",
                md: "96px",
                lg: "96px",
                xl: "96px",
              },
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              src={Img2}
              alt="logo"
              style={{
                height: "72px",
                width: "72",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              height: {
                xs: "96px",
                sm: "96px",
                md: "96px",
                lg: "48px",
                xl: "48px",
              },
              width: {
                xs: "160px",
                sm: "180px",
                md: "180px",
                lg: "210px",
                xl: "210px",
              },
              //   border: "1px solid red",
              justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            <Stack
              sx={{
                fontSize: { lg: "18px", xl: "18px" },
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                // border: "1px solid blue",
                marginBottom: "8px",
              }}
            >
              Jessica Miller-McNatt
            </Stack>
            <Stack
              sx={{
                fontSize: { lg: "16px", xl: "16px" },
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                // border: "1px solid green",
              }}
            >
              ShortStack.com
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default FooterSection;
