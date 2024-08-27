import { Button, Stack } from "@mui/material";
import React from "react";
import Img1 from "./section2Image.png";
import Img2 from "./main2.png";
import VideoCard from "../Section10/Section10";

const MainSection2 = () => {
  return (
    <Stack>
      <Stack
        sx={{
          backgroundColor: "#06051b",
          height: "auto",
          color: "white",
        }}
      >
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

        <VideoCard />

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
                xs: "18px",
                sm: "18px",
                md: "32px",
                lg: "58px",
                xl: "62px",
              },
              lineHeight: {
                xs: "28px",
                sm: "28px",
                md: "40px",
                lg: "65px",
                xl: "72px",
              },
              fontWeight: { xs: 400, sm: 400, md: 400, lg: 400, xl: 600 },
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
              // border: "1px solid white",
              width: { xs: "84%", sm: "84%", md: "60%", lg: "76%", xl: "60%" },

              textAlign: "center",
              marginTop: "80px",
              marginBottom: "40px",
              color: "white",
            }}
          >
            <p>
              <span>
                {" "}
                “The games and cart widgets directly impacted conversions.
              </span>{" "}
              <span style={{ color: "#b2a5ff" }}>
                Our revenue has grown 70% since Mailmodo”
              </span>
            </p>
          </Stack>
          <Stack
            sx={{
              // border: "1px solid white",
              display: "flex",
              flexDirection: {
                lg: "row",
                xl: "row",
                md: "row",
                xs: "row",
                sm: "row",
              },
              justifyContent: {
                lg: "center",
                xl: "center",
                md: "center",
                xs: "center",
                sm: "center",
              },
              alignItems: {
                lg: "center",
                xl: "center",
                md: "center",
                xs: "center",
                sm: "center",
              },
              width: {
                xs: "84%",
                sm: "84%",
                md: "60%",
                lg: "60%",
                xl: "60%",
              },
              marginBottom: "80px",
              height: "96px",
              paddingLeft: {
                xs: "0px",
                sm: "0px",
                md: "40px",
                lg: "0px",
                xl: "0px",
              },
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
                  md: "158px",
                  lg: "158px",
                  xl: "158px",
                },
                color: "white",
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
                  marginLeft: "20px",
                  marginRight: "20px",
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
                  color: "white",
                }}
              >
                Vineet Khare
              </Stack>
              <Stack
                sx={{
                  fontSize: { lg: "16px", xl: "16px" },
                  fontWeight: 400,
                  color: "rgb(0, 0, 0)",
                  color: "white",
                  // border: "1px solid green",
                }}
              >
                Bella Vita
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainSection2;
