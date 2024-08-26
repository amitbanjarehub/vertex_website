import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
  Button,
} from "@mui/material";
import secton7Image from "./section7.png";

const CustomCard = () => {
  return (
    <Stack
      sx={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "auto",
      }}
    >
      <Card
        sx={{
          height: { lg: "434px", xl: "434px", sm: "478px", xs: "478px" },
          width: { lg: "1020px", xl: "1274px", sm: "100%", xs: "100%" },
          backgroundColor: "#18143a",
          borderRadius: "16px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              xl: "row",
              sm: "column",
              xs: "column",
            },

            height: "100%",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              color: "white",
              // border: "1px solid white",
              height: { lg: "100%", xl: "100%", sm: "50%", xs: "50%" },
              width: { lg: "50%", xl: "50%", sm: "100%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                height: { lg: "80%", xl: "80%", xs: "100%", sm: "100%" },
                width: { lg: "80%", xl: "80%", md: "80%" },
                // border: "1px solid yellow",
                paddingTop: {
                  lg: "60px",
                  xl: "60px",
                  sm: "40px",
                  xs: "40px",
                },
                display: "flex",
                flexDirection: { sm: "column", xs: "column" },
                justifyContent: {
                  lg: "normal",
                  xl: "normal",
                  sm: "space-between",
                  xs: "space-between",
                },
                marginBottom: {
                  lg: "0px",
                  xl: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "0px",
                },
              }}
            >
              <Stack
                sx={{
                  //   fontSize: "25px",
                  fontSize: {
                    lg: "25px",
                    xl: "25px",
                    sm: "14px",
                    xs: "14px",
                  },
                  lineHeight: {
                    lg: "18px",
                    xl: "18px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontWeight: "400",
                  color: "white",
                  marginBottom: { lg: "20px", xl: "20px" },
                  textAlign: {
                    lg: "left",
                    xl: "left",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                What can we say?
              </Stack>
              <Stack
                sx={{
                  //   fontSize: "48px",
                  //   lineHeight: "52px",
                  fontSize: {
                    lg: "48px",
                    xl: "48px",
                    sm: "24px",
                    xs: "24px",
                  },
                  lineHeight: {
                    lg: "52px",
                    xl: "52px",
                    sm: "32px",
                    xs: "32px",
                  },
                  fontWeight: "600",
                  color: "white",
                  marginBottom: { lg: "40px", xl: "40px" },
                  textAlign: {
                    lg: "left",
                    xl: "left",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                We just love making hard things easy.
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    xl: "row",
                    xs: "column",
                    sm: "column",
                  },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    marginRight: { lg: "60px", sm: "0px" },
                    marginBottom: {
                      lg: "0px",
                      xl: "0px",
                      xs: "16px",
                      sm: "16px",
                      md: "16px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                      textTransform: "none",
                      paddingRight: "4px",
                    }}
                  >
                    {" "}
                    Get started -
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "rgb(0, 0, 0)",
                      textTransform: "none",
                    }}
                  >
                    it's free
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#ffffff",
                    borderColor: "#ffffff",
                    "&:hover": {
                      color: "#ffffff",
                      borderColor: "#ffffff",
                    },
                  }}
                >
                  Talk to humman
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              color: "white",
              // border: "1px solid white",
              height: { lg: "100%", xl: "100%", sm: "50%", xs: "50%" },
              width: {
                lg: "50%",
                xl: "50%",
                sm: "100%",
                xs: "100%",
                md: "100%",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                height: { lg: "90%", xl: "90%", xs: "100%", sm: "100%" },
                width: {
                  lg: "80%",
                  xl: "80%",
                  sm: "90%",
                  xs: "90%",
                  md: "80%",
                },
                // border: "1px solid yellow",
                // paddingTop: {
                //   lg: "60px",
                //   xl: "60px",
                //   sm: "40px",
                //   xs: "40px",
                // },
                display: "flex",
                flexDirection: { sm: "column", xs: "column", md: "column" },
                justifyContent: {
                  lg: "center",
                  xl: "center",
                  sm: "center",
                  xs: "center",
                  md: "center",
                },
                // marginBottom: {
                //   lg: "0px",
                //   xl: "0px",
                //   sm: "10px",
                //   xs: "10px",
                // },
                // marginTop: {
                //   lg: "0px",
                //   xl: "0px",
                //   sm: "10px",
                //   xs: "10px",
                // },
                // marginLeft: {
                //   lg: "0px",
                //   xl: "0px",
                //   sm: "30px",
                //   xs: "30px",
                // },
              }}
            >
              <img
                src={secton7Image}
                alt="logo"
                style={{
                  height: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default CustomCard;
//width-->> lg: 1060px, xl:1273px, sm: h-478, w-358
