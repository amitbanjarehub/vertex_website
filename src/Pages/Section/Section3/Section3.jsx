import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const Section3 = () => {
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
              backgroundColor: "#52b2cf",
              paddingTop: "1.5em",
            }}
          >
            <Box sx={{ backgroundColor: "#52b2cf", paddingTop: "1.5em" }}>
              <Typography variant="h2">Card 1</Typography>
            </Box>
          </Grid>
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
