import React from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import Img1 from "../section2Image.png";
import Img2 from "../main2.png";

const RevenueDetails = () => {
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
        <Stack
          sx={{
            height: "auto",
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: {
                xs: "84%",
                sm: "84%",
                md: "60%",
                lg: "76%",
                xl: "60%",
              },
              textAlign: "center",
              marginTop: "80px",
              marginBottom: "40px",
              color: "white",
            }}
          >
            <p>
              <span>
                “The games and cart widgets directly impacted conversions.
              </span>{" "}
              <span style={{ color: "#b2a5ff" }}>
                Our revenue has grown 70% since Mailmodo”
              </span>
            </p>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
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
                height: "30px",
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
              <img
                src={Img1}
                alt="logo"
                style={{
                  height: "20px",
                  width: "188px",
                }}
              />
            </Stack>

            <Stack
              sx={{
                height: "96px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={Img2}
                alt="logo"
                style={{
                  height: "72px",
                  width: "72px",
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
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  fontSize: { lg: "18px", xl: "18px" },
                  fontWeight: 600,
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
                  color: "white",
                }}
              >
                Bella Vita
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </>
  );
};

export default RevenueDetails;
