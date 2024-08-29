import { Button, Stack } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Img1 from "./main1.png";
import Img2 from "./main2.png";
import Section3 from "../Section3/Section3";
import Section8Main from "../Section8/Section8Main";
import CustomCard from "../Section7/Section7";
import Section4 from "../Section4.jsx/Section4";
import IntroSection from "./IntroSection/IntroSection";

const MainSection4 = () => {
  return (
    <Stack
      sx={{
        // backgroundColor: "#f4f6fa",
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
        marginTop: "80px",
        paddingTop: "40px",
        width: { xs: "100%", sm: "100%", lg: "100%", xl: "100%", md: "100%" },
      }}
    >
      {/* <Stack
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
          //   border: "1px solid blue",
          width: { xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "60%" },

          textAlign: "center",
          marginBottom: {
            xs: "80px",
            sm: "80px",
            md: "80px",
            lg: "60px",
            xl: "60px",
          },
        }}
      >
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <span>Switching platforms?</span>
          <span style={{ color: "rgb(90, 69, 254)" }}>
            {" "}
            Let us guide you through.
          </span>
        </p>
      </Stack> */}
      <IntroSection
        text="Let us guide you through."
        // text2="Switching platforms?"
      />

      <Section8Main />

      <Stack
        sx={{
          // border: "1px solid blue",
          height: "auto",
          //   marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            marginTop: "80px",
            marginBottom: "40px",
          }}
        >
          “Mailmodo is a no-brainer for fast-growing businesses.”
        </Stack>
        <Stack
          sx={{
            // border: "1px solid green",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "70%", lg: "60%", xl: "60%" },
            marginBottom: "80px",
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

      <CustomCard />

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
          //   justifyContent: "center",
          //   alignItems: "center",
          //   border: "1px solid blue",
          width: { xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "60%" },

          textAlign: {
            xs: "left",
            sm: "left",
            md: "center",
            lg: "center",
            xl: "center",
          },
          marginBottom: {
            xs: "10px",
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "10px",
          },
          marginTop: "80px",
        }}
      >
        Accelerate your email journey
      </Stack>

      <Stack
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "column",
          },
          //   justifyContent: "center",
          //   alignItems: "center",
          //   border: "1px solid blue",
          width: { xs: "90%", sm: "90%", md: "70%", lg: "40%", xl: "40%" },

          textAlign: {
            xs: "justify",
            sm: "justify",
            md: "center",
            lg: "center",
            xl: "center",
          },
          marginBottom: {
            xs: "40px",
            sm: "40px",
            md: "40px",
            lg: "40px",
            xl: "40px",
          },
          marginTop: "10px",
        }}
      >
        <Stack
          sx={{
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "16px",
              lg: "24px",
              xl: "24px",
            },
            lineHeight: {
              xs: "21px",
              sm: "21px",
              md: "21px",
              lg: "36px",
              xl: "36px",
            },
            fontWeight: { xs: 400, sm: 400, md: 400, lg: 300, xl: 300 },
            fontFamily: "__Inter_1a7035",
            color: "rgb(0, 0, 0)",
          }}
        >
          {" "}
          Explore practical guides, free courses and case studies.
        </Stack>
        <Stack
          sx={{
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "16px",
              lg: "24px",
              xl: "24px",
            },
            lineHeight: {
              xs: "21px",
              sm: "21px",
              md: "21px",
              lg: "36px",
              xl: "36px",
            },
            fontWeight: { xs: 400, sm: 400, md: 400, lg: 300, xl: 300 },
            fontFamily: "__Inter_1a7035",
            color: "rgb(0, 0, 0)",
          }}
        >
          Find all you need to build your success journey.
        </Stack>
      </Stack>

      <Section4 />
    </Stack>
  );
};

export default MainSection4;
