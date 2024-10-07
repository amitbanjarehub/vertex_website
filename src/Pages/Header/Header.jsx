import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Button,
  Slide,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "./vertex_suite_logo.png";
import { MdMenu } from "react-icons/md";
import HeaderSliderMobile from "./HeaderSliderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const theme = useTheme();
  const isLgOrXl = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev); // Toggle the sidebar
  };

  return (
    <Stack
      sx={{
        display: { xl: "flex" },
        flexDirection: { xl: "row", lg: "row" },
        justifyContent: { xl: "center", lg: "center", md: "column" },
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xl: scrolled ? "32%" : "70%", lg: scrolled ? "36%" : "80%" },
          backgroundColor: scrolled ? (isMobile ? "white" : "#847e94") : "none",
          borderRadius: scrolled ? (isMobile ? "0px" : "12px") : "0px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Stack
          sx={{
            height: { lg: "30px", xl: "36px" },
            width: { lg: "120px", xl: "198px" },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              height: isMobile ? "40px" : scrolled ? "42px" : "64px", // Set height for mobile view
              width: isMobile ? "48px" : scrolled ? "52px" : "72px", // Set width for mobile view
            }}
          />{" "}
        </Stack>
        {isLgOrXl ? (
          <HeaderDesktop scrolled={scrolled} />
        ) : (
          <Button onClick={handleMobileMenuToggle}>
            <MdMenu size={24} />
          </Button>
        )}
      </Toolbar>

      {/* Sidebar for mobile view */}
      {mobileMenuOpen && (
        <HeaderSliderMobile
          mobileMenuOpen={mobileMenuOpen}
          handleMobileMenuToggle={handleMobileMenuToggle}
        />
      )}
    </Stack>
  );
};

export default Header;
