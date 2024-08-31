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
import Logo from "./logo.png";
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
            xl: "70%",
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
            <Typography variant="h6" gutterBottom>
              <img src={Logo} alt="logo" />
            </Typography>

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
              Registered Address (US)
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
              Mailmodo Technologies Inc.
              <br />
              16192, Coastal Highway
              <br />
              Lewes, Delaware, 19958
              <br />
              United States
            </Typography>
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
                Mailmodo Technologies Pvt Ltd
                <br />
                Hanto Rebel Building, 3rd Floor
                <br />
                2751/492, 2nd Sector HSR Layout
                <br />
                Bangalore, Karnataka, India - 560102
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
              { text: "Social Commerce", path: "https://www.google.com/" },
              {
                text: "Communication & Marketing",
                path: "https://www.google.com/",
              },
              { text: "Order & Inventory", path: "https://www.google.com/" },
              {
                text: "Shipment & Warehousing",
                path: "https://www.google.com/",
              },
              { text: "Multi Vendor", path: "https://www.google.com/" },
              { text: "Analytics", path: "https://www.google.com/" },
              { text: "Finance", path: "https://www.google.com/" },
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
              { text: "Integrations", path: "https://www.google.com/" },
              { text: "Blog", path: "https://www.google.com/" },
              { text: "Pricing", path: "https://www.google.com/" },
              { text: "Contact Us", path: "https://www.google.com/" },
              { text: "Terms & Conditions", path: "https://www.google.com/" },
              { text: "Privacy Policy", path: "https://www.google.com/" },
              { text: "FAQ's", path: "https://www.google.com/" },
              { text: "Refund Policy", path: "https://www.google.com/" },
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
              { text: "About Us", path: "https://www.google.com/" },
              { text: "Join Our Team", path: "https://www.google.com/" },
              { text: "Partners", path: "https://www.google.com/" },
              { text: "Events", path: "https://www.google.com/" },
              { text: "In The News", path: "https://www.google.com/" },
              { text: "Investments", path: "https://www.google.com/" },
              { text: "Sitemap", path: "https://www.google.com/" },
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
            <Typography variant="h6" gutterBottom>
              <img src={Logo} alt="logo" />
            </Typography>

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
              Registered Address (US)
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
              Mailmodo Technologies Inc.
              <br />
              16192, Coastal Highway
              <br />
              Lewes, Delaware, 19958
              <br />
              United States
            </Typography>
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
                Mailmodo Technologies Pvt Ltd
                <br />
                Hanto Rebel Building, 3rd Floor
                <br />
                2751/492, 2nd Sector HSR Layout
                <br />
                Bangalore, Karnataka, India - 560102
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
            © 2024 Mailmodo
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
              href="/terms"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Terms of Service
            </a>{" "}
            |
            <a
              href="/privacy"
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
              href="/cookies"
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
