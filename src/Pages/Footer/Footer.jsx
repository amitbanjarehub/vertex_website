import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  IconButton,
  Stack,
  Link,
  Button,
} from "@mui/material";
import { LinkedIn, Facebook, Instagram, YouTube } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import Logo from "./vertex_suite_logo.png";
import LinkdenImage from "./linkedin.png";
import InstagramImage from "./Instagram.png";
import FbImage from "./facebook.png";
import YTImage from "./Youtube_Icon.png";

const Footer = () => {
  return (
    <Stack
      sx={{
        // border: "1px solid red",
        display: { lg: "flex", xl: "flex", md: "flex", sm: "flex", xs: "flex" },
        flexDirection: {
          lg: "row",
          xl: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
        justifyContent: {
          lg: "center",
          xl: "center",
          md: "center",
          sm: "center",
          xs: "center",
        },
        alignItems: {
          lg: "center",
          xl: "center",
          md: "center",
          sm: "center",
          xs: "center",
        },
        // marginTop: "40px",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 6,
          px: { xs: 2, sm: 4, md: 8 },
          borderTop: "1px solid #e0e0e0",
          position: "relative",
          bottom: 0,
          width: {
            lg: "90%",
            xl: "80%",
            md: "86%",
            sm: "90%",
            xs: "90%",
          },

          // border: "1px solid blue",
        }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          {/* Address Section */}

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              // border: "1px solid red",
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "70%",
                marginBottom: "8px",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  height: "52px",
                  width: "52px",
                }}
              />
            </Stack>

            <Box mt={2}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "__Inter_1a7035",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Registered Address (India)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "normal",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: 400,
                  color: "#757575",
                }}
              >
                ATMIK BHARAT
                <br />
                H.O. Block-86, Plot-2,
                <br />
                Nehru Nagar East, Bhilai,
                <br />
                Chhattisgarh 490020
              </Typography>
            </Box>
            <Box mt={2}>
              <Link
                to="/"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "black",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color={"gray"}
                  sx={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "#757575",
                  }}
                >
                  info@atmikbharat.com
                </Typography>
              </Link>
            </Box>
            <Stack>
              <Typography
                mt={2}
                sx={{
                  fontFamily: "__Inter_1a7035",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Find us online
              </Typography>

              <Stack direction="row" spacing={2} mt={2}>
                <img
                  src={FbImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
                <img
                  src={LinkdenImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
                <img
                  src={InstagramImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
                <img
                  src={YTImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
              </Stack>
            </Stack>
          </Grid>

          {/* Links Section */}
          <Grid
            item
            xs={6}
            md={2}
            sx={{
              marginTop: {
                lg: "0px",
                xl: "0px",
                md: "60px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "__Inter_1a7035",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
              }}
              gutterBottom
            >
              Home
            </Typography>
            {[
              "Pricing",
              "Help",
              "Features",
              "Marketing Partner",
              "Affiliate Program",
              "GDPR Compliance",
              "Book a Demo",
              "Contact Us",
              "Security",
            ].map((text) => (
              <Link
                key={text}
                to="/"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "black",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  // color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },

                    fontFamily: "normal",
                    fontSize: "18px",
                    lineHeight: "32px",
                    fontWeight: 400,
                    color: "rgb(71, 84, 103)",
                  }}
                >
                  {text}
                </Typography>
              </Link>
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sx={{
              marginTop: {
                lg: "0px",
                xl: "0px",
                md: "60px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "__Inter_1a7035",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
              }}
            >
              Solutions
            </Typography>
            {[
              {
                text: "Social Commerce",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Communication & Marketing",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Order & Inventory",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Shipment & Warehousing",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Multi Vendor",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Analytics",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Finance",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
            ].map(({ text, path }, index) => (
              <Link
                key={index}
                href={path}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "black",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  // color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    fontFamily: "normal",
                    fontSize: "18px",
                    lineHeight: "32px",
                    fontWeight: 400,
                    color: "rgb(71, 84, 103)",
                  }}
                >
                  {text || "Default text"}
                </Typography>
              </Link>
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sx={{
              marginTop: {
                lg: "0px",
                xl: "0px",
                md: "60px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "__Inter_1a7035",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
              }}
            >
              USEFUL LINKS
            </Typography>
            {[
              {
                text: "Integrations",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              { text: "Blog", path: "https://vertexsuite.in/blog/" },
              {
                text: "Pricing",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Contact Us",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Terms & Conditions",
                path: "https://vertexsuite.in/terms-of-service/",
              },
              {
                text: "Privacy Policy",
                path: "https://vertexsuite.in/privacy-policy/",
              },
              { text: "FAQ's", path: "https://vertexsuite.in/faqs/" },
              {
                text: "Refund Policy",
                path: "https://vertexsuite.in/refund-policy/",
              },
            ].map(({ text, path }, index) => (
              <Link
                key={index}
                href={path}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "black",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  // color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    fontFamily: "normal",
                    fontSize: "18px",
                    lineHeight: "32px",
                    fontWeight: 400,
                    color: "rgb(71, 84, 103)",
                  }}
                >
                  {text || "Default text"}
                </Typography>
              </Link>
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sx={{
              marginTop: {
                lg: "0px",
                xl: "0px",
                md: "60px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "__Inter_1a7035",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
              }}
            >
              ABOUT
            </Typography>
            {[
              { text: "About Us", path: "https://vertexsuite.in/about-us-3/" },
              {
                text: "Join Our Team",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Partners",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Events",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "In The News",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              {
                text: "Investments",
                path: "https://vertexsuite.in/privacy-policy/#",
              },
              { text: "Sitemap", path: "https://vertexsuite.in/sitemap/" },
            ].map(({ text, path }, index) => (
              <a
                key={index}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    fontFamily: "normal",
                    fontSize: "18px",
                    lineHeight: "32px",
                    fontWeight: 400,
                    color: "rgb(71, 84, 103)",
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "black",
                    },
                  }}
                >
                  {text || "Default text"}
                </Typography>
              </a>
            ))}
          </Grid>

          {/* mobile view screen */}

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              // border: "1px solid red",
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
              
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "8px",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{ height: "52px", width: "52px" }}
              />
            </Stack>

            <Box mt={2}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "__Inter_1a7035",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Registered Address (India)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "normal",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: 400,
                  color: "#757575",
                }}
              >
                ATMIK BHARAT
                <br />
                H.O. Block-86, Plot-2,
                <br />
                Nehru Nagar East, Bhilai,
                <br />
                Chhattisgarh 490020
              </Typography>
            </Box>
            <Box mt={2}>
              <Link
                to="/"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "black",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color={"gray"}
                  sx={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "#757575",
                  }}
                >
                  enquiries@mailmodo.com
                </Typography>
              </Link>
            </Box>
            <Stack>
              <Typography
                mt={2}
                sx={{
                  fontFamily: "__Inter_1a7035",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Find us online
              </Typography>

              <Stack direction="row" spacing={2} mt={2}>
                <img
                  src={FbImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
                <img
                  src={LinkdenImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
                <img
                  src={InstagramImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
                <img
                  src={YTImage}
                  alt="logo"
                  style={{ height: "30px", width: "30px" }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          mt={6}
          textAlign="center"
          sx={{
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            justifyContent: {
              xl: "space-between",
              lg: "space-between",
              md: "space-between",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Typography
            variant="body2"
            // color="textSecondary"
            sx={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 600,
              color: "#757575",
              paddingTop: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "20px",
                xs: "20px",
              },
            }}
          >
            Copyright © 2023 Atmik Bharat Industries Pvt. Ltd . All rights
            reserved.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 600,
              color: "#757575",

              paddingTop: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "10px",
                xs: "10px",
              },
            }}
          >
            <a
              href="https://vertexsuite.in/terms-of-service/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Terms of Service
            </a>{" "}
            |
            <a
              href="https://vertexsuite.in/privacy-policy/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {" "}
              Privacy Policy
            </a>{" "}
            |
            <a
              href="https://vertexsuite.in/privacy-policy/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {" "}
              Cookie Policy
            </a>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Footer;
