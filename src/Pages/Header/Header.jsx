import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Slide, Stack, useMediaQuery, useTheme } from "@mui/material";
import Logo from "./logo.png";
import { MdMenu } from "react-icons/md";
import HeaderSliderMobile from "./HeaderSliderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");
  const theme = useTheme();
  const isLgOrXl = useMediaQuery(theme.breakpoints.up("lg"));

  const handleMobileMenuOpen = () => {
    setSlideDirection("right");
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setSlideDirection("left");
    setMobileMenuOpen(false);


  };

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        display: { xl: "flex" },
        flexDirection: { xl: "row", lg: "row" },
        justifyContent: { xl: "center", lg: "center", md: "column" },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xl: "70%", lg: "80%" },
        }}
      >
        <Stack
          sx={{
            height: { lg: "30px", xl: "36" },
            width: { lg: "120px", xl: "198px" },
          }}
        >
          <img src={Logo} alt="logo" />
        </Stack>
        {isLgOrXl ? (

          <>
            <HeaderDesktop />

          </>
        ) : (
          mobileMenuOpen ? (<><Button onClick={handleMobileMenuClose}>
            <MdMenu size={24} />
          </Button></>) : (<><Button onClick={handleMobileMenuOpen}>
            <MdMenu size={24} />
          </Button></>)
        )}
      </Toolbar>

      {mobileMenuOpen && (
        <HeaderSliderMobile mobileMenuOpen={mobileMenuOpen} />
      )}

    </AppBar>
  );
};

export default Header;
