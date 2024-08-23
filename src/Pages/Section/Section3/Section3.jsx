import React from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image1 from "./cardStackImage.png";

const Section3 = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  const getIconSize = () => {
    if (isXs) return 12; // Size for xs
    if (isSm) return 16; // Size for sm
    if (isMd) return 24; // Size for md
    if (isLg) return 20; // Size for lg
    if (isXl) return 20; // Size for xl
    return 12; // Default size
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            lg: "70%",
            xl: "70%",
            xs: "100%",
            sm: "100%",
          },
        }}
      >
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            paddingLeft: 0,
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "repeat(4, 87vh)",
            gap: "4vw",
            paddingBottom: "calc(4 * 1.5em)",
            marginBottom: "4vw",
          }}
        >
          <Grid
            component="li"
            sx={{
              //Base Style
              boxSizing: "border-box",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.3)",
              height: "87vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.5s",
              position: "sticky",
              top: 0,

              //For card1 Style
              backgroundColor: "white",
              //   border: "1px solid blue",
              //   paddingTop: "1.5em",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid gray",
                  display: {
                    lg: "flex",
                    xl: "flex",
                    sm: "flex",
                  },
                  flexDirection: {
                    lg: "row",
                    xl: "row",
                    sm: "column",
                  },
                  justifyContent: {
                    lg: "center",
                    xl: "center",
                    sm: "center",
                  },
                  alignItems: {
                    lg: "center",
                    xl: "center",
                    sm: "center",
                  },
                }}
              >
                <Stack
                  sx={{
                    border: "1px solid blue",
                    height: {
                      lg: "100%",
                      xl: "100%",
                      xs: "40%",
                      sm: "40%",
                      //   xs: "auto",
                      //   sm: "auto",
                    },
                    width: {
                      lg: "40%",
                      xl: "40%",
                      xs: "100%",
                      sm: "100%",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      height: "100%",
                      marginTop: {
                        lg: "60px",
                        xl: "60px",
                        // md: "0px",
                        xs: "0px",
                        sm: "0px",
                      },
                    }}
                  >
                    <Stack
                      sx={{
                        border: "1px solid red",
                        height: "auto",
                        // lineHeight: "48px",
                        lineHeight: {
                          lg: "23px",
                          xl: "40px",
                          md: "54px",
                          xs: "23px",
                          sm: "23px",
                        },
                        // fontSize: "39px",
                        fontSize: {
                          lg: "29px",
                          xl: "39px",
                          md: "38px",
                          xs: "18px",
                          sm: "18px",
                        },
                        fontWeight: "700",
                        color: "rgb(0, 0, 0)",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        marginBottom: {
                          lg: "20px",
                          xl: "20px",
                          md: "20px",
                          xs: "8px",
                          sm: "8px",
                        },
                      }}
                    >
                      Speed up your email copy using AI
                    </Stack>
                    <Stack
                      sx={{
                        height: "auto",
                        lineHeight: {
                          lg: "20px",
                          xl: "25px",
                          md: "32px",
                          xs: "20px",
                          sm: "20px",
                        },
                        // fontSize: "18px",
                        fontSize: {
                          lg: "14px",
                          xl: "18px",
                          md: "28px",
                          xs: "13px",
                          sm: "13px",
                        },
                        fontWeight: {
                          lg: "400",
                          xl: "400",
                          xs: "400",
                          sm: "400",
                        },
                        color: "rgb(73, 72, 72)",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        border: "1px solid blue",
                        marginBottom: {
                          lg: "20px",
                          xl: "20px",
                          md: "20px",
                          xs: "8px",
                          sm: "8px",
                        },
                      }}
                    >
                      Never get stuck creating emails again.
                    </Stack>
                    <Stack
                      sx={{
                        height: "auto",
                        // lineHeight: "25px",
                        lineHeight: {
                          lg: "26px",
                          xl: "25px",
                          md: "36px",
                          xs: "20px",
                          sm: "20px",
                        },
                        // fontSize: "18px",
                        fontSize: {
                          lg: "16px",
                          xl: "18px",
                          md: "28px",
                          xs: "13px",
                          sm: "13px",
                        },
                        fontWeight: {
                          lg: "700",
                          xl: "700",
                          xs: "700",
                          sm: "700",
                        },
                        color: "rgb(73, 72, 72)",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        border: "1px solid green",
                        marginBottom: {
                          lg: "20px",
                          xl: "20px",
                          md: "20px",
                          xs: "8px",
                          sm: "8px",
                        },
                      }}
                    >
                      Use Mailmodo AI to
                    </Stack>
                    <Stack
                      sx={{
                        height: "auto",
                        color: "rgb(73, 72, 72)",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        border: "1px solid red",
                      }}
                    >
                      <Stack>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: {
                              lg: "20px",
                              xl: "20px",
                              md: "20px",
                              xs: "8px",
                              sm: "8px",
                            },
                          }}
                        >
                          <FaRegCircleCheck
                            style={{
                              marginTop: "4px",
                              marginRight: "10px",
                            }}
                            size={getIconSize()}
                          />{" "}
                          <Typography
                            sx={{
                              lineHeight: {
                                lg: "20px",
                                xl: "25px",
                                md: "34px",
                                xs: "20px",
                                sm: "20px",
                              },
                              // fontSize: "18px",
                              fontSize: {
                                lg: "12px",
                                xl: "18px",
                                md: "24px",
                                xs: "13px",
                                sm: "13px",
                              },
                              fontWeight: {
                                lg: "400",
                                xl: "400",
                                xs: "400",
                                sm: "400",
                              },
                            }}
                          >
                            Optimize subject lines
                          </Typography>
                        </Stack>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: {
                              lg: "20px",
                              xl: "20px",
                              md: "20px",
                              xs: "8px",
                              sm: "8px",
                            },
                          }}
                        >
                          <FaRegCircleCheck
                            style={{ marginTop: "4px", marginRight: "10px" }}
                            size={getIconSize()}
                          />{" "}
                          <Typography
                            sx={{
                              lineHeight: {
                                lg: "20px",
                                xl: "25px",
                                md: "34px",
                                xs: "20px",
                                sm: "20px",
                              },
                              // fontSize: "18px",
                              fontSize: {
                                lg: "12px",
                                xl: "18px",
                                md: "24px",
                                xs: "13px",
                                sm: "13px",
                              },
                              fontWeight: {
                                lg: "400",
                                xl: "400",
                                xs: "400",
                                sm: "400",
                              },
                            }}
                          >
                            Write pre-headers
                          </Typography>
                        </Stack>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: {
                              lg: "20px",
                              xl: "20px",
                              md: "20px",
                              xs: "8px",
                              sm: "8px",
                            },
                          }}
                        >
                          <FaRegCircleCheck
                            style={{ marginTop: "4px", marginRight: "10px" }}
                            size={getIconSize()}
                          />{" "}
                          <Typography
                            sx={{
                              lineHeight: {
                                lg: "20px",
                                xl: "25px",
                                md: "34px",
                                xs: "20px",
                                sm: "20px",
                              },
                              // fontSize: "18px",
                              fontSize: {
                                lg: "12px",
                                xl: "18px",
                                md: "24px",
                                xs: "13px",
                                sm: "13px",
                              },
                              fontWeight: {
                                lg: "400",
                                xl: "400",
                                xs: "400",
                                sm: "400",
                              },
                            }}
                          >
                            Review email copy
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    border: "1px solid blue",
                    height: {
                      lg: "100%",
                      xl: "100%",
                      xs: "60%",
                      sm: "60%",
                    },
                    width: {
                      lg: "60%",
                      xl: "60%",
                      xs: "100%",
                      sm: "100%",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      height: "100%",
                      width: "100%",
                      border: "1px solid green",
                      marginTop: {
                        lg: "0px",
                        xl: "0px",
                        md: "0px",
                        xs: "0px",
                        sm: "0px",
                      },
                      //   marginLeft: {
                      //     lg: "10px",
                      //     xl: "10px",
                      //     md: "10px",
                      //     xs: "10px",
                      //     sm: "10px",
                      //   },
                      //   marginRight: {
                      //     lg: "10px",
                      //     xl: "10px",
                      //     md: "10px",
                      //     xs: "10px",
                      //     sm: "10px",
                      //   },
                    }}
                  >
                    <img
                      src={Image1}
                      alt="Image1"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* 2nd card */}
          <Grid
            component="li"
            sx={{
              //Base Style
              boxSizing: "border-box",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.3)",
              height: "87vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.5s",
              position: "sticky",
              top: 0,

              //For card1 Style
              backgroundColor: "#e5a36f",
              paddingTop: "3em",
            }}
          >
            <Box sx={{ backgroundColor: "#e5a36f", paddingTop: "3em" }}>
              <Typography variant="h2">Card 2</Typography>
            </Box>
          </Grid>

          {/* 3th card */}
          <Grid
            component="li"
            sx={{
              //Base Style
              boxSizing: "border-box",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.3)",
              height: "87vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.5s",
              position: "sticky",
              top: 0,

              //For card1 Style
              backgroundColor: "#9cadce",
              paddingTop: "4.5em",
            }}
          >
            <Box sx={{ backgroundColor: "#9cadce", paddingTop: "4.5em" }}>
              <Typography variant="h2">Card 3</Typography>
            </Box>
          </Grid>

          {/* 4th card */}
          <Grid
            component="li"
            sx={{
              //Base Style
              boxSizing: "border-box",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.3)",
              height: "87vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.5s",
              position: "sticky",
              top: 0,

              //For card1 Style
              backgroundColor: "#d4afb9",
              paddingTop: "6em",
            }}
          >
            <Box sx={{ backgroundColor: "#d4afb9", paddingTop: "6em" }}>
              <Typography variant="h2">Card 4</Typography>
            </Box>
          </Grid>

          {/* 5th card */}
          <Grid
            component="li"
            sx={{
              //Base Style
              boxSizing: "border-box",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.3)",
              height: "87vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.5s",
              position: "sticky",
              top: 0,

              //For card1 Style
              backgroundColor: "pink",
              paddingTop: "6em",
            }}
          >
            <Box sx={{ backgroundColor: "pink", paddingTop: "6em" }}>
              <Typography variant="h2">Card 5</Typography>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default Section3;
