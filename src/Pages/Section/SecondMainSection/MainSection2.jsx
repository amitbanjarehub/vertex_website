import { Stack } from "@mui/material";
import React from "react";

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
                  xl: "72px",
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
                  xl: "72px",
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
                  xs: "12px",
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
                // border: "1px solid red",
                width: {
                  xs: "100%",
                  sm: "52%",
                  md: "80%",
                  lg: "76%",
                  xl: "50%",
                },
              }}
              textAlign={"center"}
            >
              {" "}
              Send interactive emails that work on all major email clients:
              Gmail, Yahoo Mail, Apple Mail and Mail.ru Explore all Use Cases
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainSection2;
