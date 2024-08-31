import React from "react";
import Img1 from "./section8first.png";
import Img2 from "./section8second.png";
import Img3 from "./section8third.png";
import {
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const Section8 = () => {
  const slideInLeft = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <Stack
      sx={{
        height: "auto",
        // border: "1px solid red",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
        },
        alignItems: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
        },
      }}
    >
      <Stack
        sx={{
          // border: "1px solid blue",
          width: { lg: "100%", xl: "100%" },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            },
            // border: "1px solid red",
            //   alignItems: { xs: "center", sm: "center", md: "center", lg: "space-between", xl: "space-between" },
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            viewport={{ once: false, amount: 0.5 }} // `once: false` ensures the animation runs every time the component comes into view
            style={{ width: "100%" }}
          >
            <Stack
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "block",
                },
                // border: "1px solid red",
              }}
            >
              <Card
                sx={{
                  maxWidth: 445,
                  height: {
                    sm: "412px",
                    xs: "412px",
                    lg: "100%",
                    xl: "748px",
                  },
                  borderRadius: 3,
                  boxShadow: 3,
                  padding: 2,
                  marginRight: {
                    xl: "40px",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "18px",
                        lg: "26px",
                        xl: "26px",
                      },
                      lineHeight: {
                        xs: "24px",
                        sm: "24px",
                        lg: "31px",
                        xl: "31px",
                      },
                      fontWeight: 700,
                      color: "rgb(0,0,0)",
                      marginBottom: {
                        xs: "8px",
                        sm: "8px",
                      },
                    }}
                  >
                    Dedicated, tailored support
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        lg: "16px",
                        xl: "16px",
                      },
                      lineHeight: {
                        xs: "20px",
                        sm: "20px",
                        lg: "25px",
                        xl: "25x",
                      },
                      fontWeight: 400,
                      color: "gray",
                      marginBottom: {
                        xs: "16px",
                        sm: "16px",
                      },
                    }}
                  >
                    Rely on personalized support from platform migration to
                    optimizing your results and troubleshooting.
                  </Typography>
                  <Link
                    sx={{
                      mt: 2,
                      color: "#5a45fe",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      fontSize: { xs: "18px", sm: "18px" },
                    }}
                    variant="text"
                  >
                    Talk to a human →
                  </Link>
                </CardContent>
                <Stack
                  sx={{
                    // border: "1px solid green",
                    height: { xs: "345px", sm: "345px", xl: "445px" },
                    width: { xs: "100%", sm: "100%" },
                    borderRadius: "12px",
                    marginTop: { xs: "20px", sm: "20px" },
                  }}
                >
                  <img
                    src={Img1}
                    alt="logo"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Stack>
              </Card>
            </Stack>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
            viewport={{ once: false, amount: 0.2 }} // Same change here
            style={{ width: "100%" }}
          >
            <Stack>
              <Card
                sx={{
                  borderRadius: 3,
                  height: {
                    lg: "404px",
                    xl: "304px",
                  },
                  width: {
                    lg: "902px",
                    xl: "702px",
                  },
                  boxShadow: 3,
                  padding: 2,
                  marginBottom: {
                    xs: "20px",
                    sm: "20px",
                  },
                  // display: "flex",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "none",
                  },
                  flexDirection: "row",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: { lg: "26px", xl: "26px" },
                      lineHeight: { xl: "31px", lg: "31px" },
                      fontWeight: 700,
                      color: "rgb(0,0,0)",
                      marginBottom: {
                        xs: "8px",
                        sm: "8px",
                      },
                    }}
                  >
                    Dedicated, tailored support
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { lg: "16px", xl: "16px" },
                      lineHeight: { xl: "25px", lg: "25px" },
                      fontWeight: 400,
                      color: "gray",
                      marginBottom: {
                        xs: "16px",
                        sm: "16px",
                      },
                    }}
                  >
                    Rely on personalized support from platform migration to
                    optimizing your results and troubleshooting.
                  </Typography>
                  <Link
                    sx={{
                      mt: 2,
                      color: "#5a45fe",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      fontSize: { xl: "18px", lg: "18px" },
                      fontWeight: 500,
                    }}
                    variant="text"
                  >
                    Talk to a human →
                  </Link>
                </CardContent>
                <Stack
                  sx={{
                    // border: "1px solid green",
                    height: { xl: "260px", lg: "310px", md: "354px" },
                    width: { lg: "100%", xl: "100%", md: "64%" },
                    borderRadius: "12px",
                    marginTop: { xs: "20px", sm: "20px" },
                  }}
                >
                  <img
                    src={Img1}
                    alt="logo"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Stack>
              </Card>

              <Card
                sx={{
                  borderRadius: 3,
                  height: {
                    lg: "404px",
                    xl: "364px",
                  },
                  width: {
                    lg: "902px",
                    xl: "802px",
                  },
                  boxShadow: 3,
                  padding: 2,
                  marginBottom: {
                    xs: "20px",
                    sm: "20px",
                  },
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: { lg: "26px", xl: "26px" },
                      lineHeight: { xl: "31px", lg: "31px" },
                      fontWeight: 700,
                      color: "rgb(0,0,0)",
                      marginBottom: {
                        xs: "8px",
                        sm: "8px",
                      },
                    }}
                  >
                    Dedicated, tailored support
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { lg: "16px", xl: "16px" },
                      lineHeight: { xl: "25px", lg: "25px" },
                      fontWeight: 400,
                      color: "gray",
                      marginBottom: {
                        xs: "16px",
                        sm: "16px",
                      },
                    }}
                  >
                    Rely on personalized support from platform migration to
                    optimizing your results and troubleshooting.
                  </Typography>
                  <Link
                    sx={{
                      mt: 2,
                      color: "#5a45fe",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      fontSize: { xl: "18px", lg: "18px" },
                      fontWeight: 500,
                    }}
                    variant="text"
                  >
                    Talk to a human →
                  </Link>
                </CardContent>
                <Stack
                  sx={{
                    // border: "1px solid green",
                    height: { xl: "260px", lg: "310px" },
                    width: { lg: "100%", xl: "100%" },
                    borderRadius: "12px",
                    marginTop: { xs: "20px", sm: "20px" },
                  }}
                >
                  <img
                    src={Img2}
                    alt="logo"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Stack>
              </Card>

              <Card
                sx={{
                  borderRadius: 3,
                  height: {
                    lg: "404px",
                    xl: "364px",
                  },
                  width: {
                    lg: "902px",
                    xl: "802px",
                  },
                  boxShadow: 3,
                  padding: 2,
                  marginBottom: {
                    xs: "20px",
                    sm: "20px",
                  },
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: { lg: "26px", xl: "26px" },
                      lineHeight: { xl: "31px", lg: "31px" },
                      fontWeight: 700,
                      color: "rgb(0,0,0)",
                      marginBottom: {
                        xs: "8px",
                        sm: "8px",
                      },
                    }}
                  >
                    Dedicated, tailored support
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { lg: "16px", xl: "16px" },
                      lineHeight: { xl: "25px", lg: "25px" },
                      fontWeight: 400,
                      color: "gray",
                      marginBottom: {
                        xs: "16px",
                        sm: "16px",
                      },
                    }}
                  >
                    Rely on personalized support from platform migration to
                    optimizing your results and troubleshooting.
                  </Typography>
                  <Link
                    sx={{
                      mt: 2,
                      color: "#5a45fe",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      fontSize: { xl: "18px", lg: "18px" },
                      fontWeight: 500,
                    }}
                    variant="text"
                  >
                    Talk to a human →
                  </Link>
                </CardContent>
                <Stack
                  sx={{
                    // border: "1px solid green",
                    height: { xl: "260px", lg: "310px" },
                    width: { lg: "100%", xl: "100%" },
                    borderRadius: "12px",
                    marginTop: { xs: "20px", sm: "20px" },
                  }}
                >
                  <img
                    src={Img3}
                    alt="logo"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Stack>
              </Card>
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section8;
