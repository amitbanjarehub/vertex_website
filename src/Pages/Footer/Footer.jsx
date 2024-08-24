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
        display: { lg: "flex", xl: "flex" },
        flexDirection: { lg: "row", xl: "row" },
        justifyContent: { lg: "center", xl: "center" },
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
            lg: "70%",
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
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              <img src={Logo} alt="logo" />
            </Typography>
            {/* <Typography variant="body2" color="textSecondary">
            Registered Address (US)
          </Typography> */}
            <Typography variant="h6" gutterBottom>
              Registered Address (US)
            </Typography>
            <Typography variant="body2">
              Mailmodo Technologies Inc.
              <br />
              16192, Coastal Highway
              <br />
              Lewes, Delaware, 19958
              <br />
              United States
            </Typography>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Registered Address (India)
              </Typography>
              <Typography variant="body2">
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
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "400",
                  }}
                >
                  enquiries@mailmodo.com
                </Typography>
              </Link>
            </Box>
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
                color: "rgb(0, 0, 0)",
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "__Inter_1a7035 - 600",
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
                  color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    lineHeight: {
                      lg: "31px",
                      sm: "31px",
                      md: "31px",
                    },
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
                color: "rgb(0, 0, 0)",
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "__Inter_1a7035 - 600",
              }}
            >
              Product
            </Typography>
            {[
              "Email Marketing",
              "Customer Engagement",
              "AMP Emails",
              "Surveys",
              "Shopify Email Marketing",
              "Email Deliverability",
              "Email Template Builder",
              "Send Transactional Email",
              "Bulk Email Service",
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
                  color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    lineHeight: {
                      lg: "31px",
                      sm: "31px",
                      md: "31px",
                    },
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
                color: "rgb(0, 0, 0)",
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "__Inter_1a7035 - 600",
              }}
            >
              Resources
            </Typography>
            {[
              "AMP Email Guide",
              "Email Marketing 101",
              "Email Templates",
              "Email Flows",
              "Email Subject Lines",
              "Email Checklist",
              "Email Stash",
              "AI Subject Line Generator",
              "Use Cases",
              "Case Studies",
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
                  color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    lineHeight: {
                      lg: "31px",
                      sm: "31px",
                      md: "31px",
                    },
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
                color: "rgb(0, 0, 0)",
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "__Inter_1a7035 - 600",
              }}
            >
              How We Compare
            </Typography>
            {[
              "Mailchimp vs Mailmodo",
              "ActiveCampaign vs Mailmodo",
              "Constant Contact vs Mailmodo",
              "Klaviyo vs Mailmodo",
              "MailerLite vs Mailmodo",
              "Brevo vs Mailmodo",
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
                  color="rgb(71, 84, 103)"
                  sx={{
                    marginBottom: {
                      lg: "4px",
                      sm: "4px",
                      md: "4px",
                    },
                    lineHeight: {
                      lg: "31px",
                      sm: "31px",
                      md: "31px",
                    },
                  }}
                >
                  {text}
                </Typography>
              </Link>
            ))}
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Subscribe to our Newsletter
            </Typography>
            <Box display="flex" alignItems="center">
              <TextField
                placeholder="Your email address"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  mr: 1,
                  width: {
                    xs: "65%", // 100% width on extra-small screens
                    sm: "65%", // 100% width on small screens
                    md: "65%", // 100% width on medium screens
                    lg: "65%", // 75% width on large screens
                    xl: "50%", // 50% width on extra-large screens
                  },
                }}
              />
              <IconButton color="primary" aria-label="send">
                <SendIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © 2024 Mailmodo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <a
              href="/terms"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Terms of Service
            </a>{" "}
            |
            <a
              href="/privacy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/cookies"
              style={{ textDecoration: "none", color: "inherit" }}
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
