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
                  md: "62px",
                  lg: "62px",
                  xl: "62px",
                },
                lineHeight: {
                  xs: "32px",
                  sm: "32px",
                  md: "72px",
                  lg: "72px",
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
                  md: "62px",
                  lg: "62px",
                  xl: "62px",
                },
                lineHeight: {
                  xs: "32px",
                  sm: "32px",
                  md: "72px",
                  lg: "72px",
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
                  xs: "24px",
                  sm: "24px",
                  md: "24px",
                  lg: "30px",
                  xl: "30px",
                },
                lineHeight: {
                  xs: "32px",
                  sm: "32px",
                  md: "30px",
                  lg: "30px",
                  xl: "30px",
                },
                fontWeight: { xs: 600, sm: 600, md: 300, lg: 300, xl: 300 },
                color: "white",
                border: "1px solid red",
                width: {
                  xs: "70%",
                  sm: "70%",
                  md: "70%",
                  lg: "40%",
                  xl: "40%",
                },
              }}
              textAlign={"center"}
            >
              {" "}
              Send interactive emails that work on all major email clients:
              Gmail,{" "}
            </Stack>
            <Stack
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "24px",
                  lg: "30px",
                  xl: "30px",
                },
                lineHeight: {
                  xs: "32px",
                  sm: "32px",
                  md: "30px",
                  lg: "30px",
                  xl: "30px",
                },
                border: "1px solid red",
                width: {
                  xs: "70%",
                  sm: "70%",
                  md: "70%",
                  lg: "40%",
                  xl: "40%",
                },
                fontWeight: { xs: 600, sm: 600, md: 300, lg: 300, xl: 300 },
                color: "white",
              }}
              textAlign={"center"}
            >
              Yahoo Mail, Apple Mail and Mail.ru Explore all Use Cases
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainSection2;
