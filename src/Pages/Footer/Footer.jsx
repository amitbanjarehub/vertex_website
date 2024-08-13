import React from "react";
import { Grid, Box, Typography, TextField, IconButton, Stack } from "@mui/material";
import { LinkedIn, Facebook, Instagram, YouTube } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
        borderTop: "1px solid #e0e0e0",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Address Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Mailmodo
          </Typography>
          <Typography variant="body2" color="textSecondary">
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
            <Typography variant="body2" color="textSecondary">
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
            <Typography variant="body2">
              <strong>Email:</strong> enquiries@mailmodo.com
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} mt={2}>
            <LinkedIn />
            <Facebook />
            <Instagram />
            <YouTube />
          </Stack>
        </Grid>

        {/* Links Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Home
          </Typography>
          {["Pricing", "Help", "Features", "Marketing Partner", "Affiliate Program", "GDPR Compliance", "Book a Demo", "Contact Us", "Security"].map((text) => (
            <Typography variant="body2" color="textSecondary" key={text}>
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Product
          </Typography>
          {["Email Marketing", "Customer Engagement", "AMP Emails", "Surveys", "Shopify Email Marketing", "Email Deliverability", "Email Template Builder", "Send Transactional Email", "Bulk Email Service"].map((text) => (
            <Typography variant="body2" color="textSecondary" key={text}>
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          {["AMP Email Guide", "Email Marketing 101", "Email Templates", "Email Flows", "Email Subject Lines", "Email Checklist", "Email Stash", "AI Subject Line Generator", "Use Cases", "Case Studies"].map((text) => (
            <Typography variant="body2" color="textSecondary" key={text}>
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>
            How We Compare
          </Typography>
          {["Mailchimp vs Mailmodo", "ActiveCampaign vs Mailmodo", "Constant Contact vs Mailmodo", "Klaviyo vs Mailmodo", "MailerLite vs Mailmodo", "Brevo vs Mailmodo"].map((text) => (
            <Typography variant="body2" color="textSecondary" key={text}>
              {text}
            </Typography>
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
                    xs: '65%',  // 100% width on extra-small screens
                    sm: '65%',  // 100% width on small screens
                    md: '65%',  // 100% width on medium screens
                    lg: '65%',   // 75% width on large screens
                    xl: '50%',   // 50% width on extra-large screens
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
          <a href="/terms" style={{ textDecoration: "none", color: "inherit" }}>Terms of Service</a> | 
          <a href="/privacy" style={{ textDecoration: "none", color: "inherit" }}> Privacy Policy</a> | 
          <a href="/cookies" style={{ textDecoration: "none", color: "inherit" }}> Cookie Policy</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
