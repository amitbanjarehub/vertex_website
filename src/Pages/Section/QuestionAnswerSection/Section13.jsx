import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Section14 from "./Section14";

const Section13 = () => {
  return (
    <Stack sx={{ marginTop: "80px" }}>
      <Stack sx={{}}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
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
              xl: "0px",
            },
            // border: "1px solid red",
            width: {
              xl: "100%",
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
        >
          <Stack
            sx={{
              fontSize: {
                xs: "36px",
                sm: "36px",
                md: "52px",
                lg: "52px",
                xl: "104px",
              },
              lineHeight: {
                xs: "32px",
                sm: "32px",
                md: "62px",
                lg: "62px",
                xl: "98px",
              },
              fontWeight: { xs: 600, sm: 600, md: 600, lg: 600, xl: 600 },
              color: "rgb(0, 0, 0)",
              //   border: "1px solid blue",
              width: {
                xl: "30%",
                lg: "25%",
                md: "25%",
                sm: "100%",
                xs: "100%",
              },
              height: {
                xl: "200px",
                lg: "200px",
                md: "200px",
                sm: "80px",
                xs: "80px",
              },
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "row",
              },
              justifyContent: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "center",
                xs: "center",
              },
              alignItems: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "center",
                xs: "center",
              },
              //   border: "1px solid blue",
            }}
          >
            {" "}
            Get started for free{" "}
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
              fontWeight: { xs: 400, sm: 400, md: 400, lg: 600, xl: 600 },
              color: "black",
              //   border: "1px solid green",
              height: { lg: "200px", xl: "200px", md: "200px", },
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "space-between",

              justifyContent: {
                xl: "space-between",
                lg: "space-between",
                md: "space-between",
                sm: "center",
                xs: "center",
              },
              alignItems: {
                xl: "normal",
                lg: "normal",
                md: "normal",
                sm: "center",
                xs: "center",
              },

              width: {
                xl: "24%",
                lg: "44%",
                md: "44%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "18px",
                  md: "22px",
                  lg: "22px",
                  xl: "22px",
                },
                lineHeight: {
                  xs: "22px",
                  sm: "22px",
                  md: "31px",
                  lg: "31px",
                  xl: "31px",
                },
                width: {
                  xl: "80%",
                  lg: "80%",
                  md: "90%",
                  sm: "90%",
                  xs: "90%",
                },
                fontWeight: { xs: 400, sm: 400, md: 400, lg: 400, xl: 400 },
                color: "black",
                marginBottom: { xs: "8px", sm: "8px" },
              }}
            >
              Discover the Mailmodo way to engage your audience and drive
              growth.
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "18px",
                  md: "22px",
                  lg: "22px",
                  xl: "22px",
                },
                lineHeight: {
                  xs: "32px",
                  sm: "32px",
                  md: "31px",
                  lg: "31px",
                  xl: "31px",
                },
                fontWeight: { xs: 400, sm: 400, md: 400, lg: 400, xl: 400 },
                color: "black",
                marginBottom: { xs: "8px", sm: "8px" },
              }}
            >
              Get 21 days of Mailmodo for free.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5a45fe",
                color: "white",
                width: "160px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Start Today
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Section14 />
    </Stack>
  );
};

export default Section13;
