

import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

const StickyHeader = () => {
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

  return (
    <Stack
      sx={{ position: "sticky", top: 0, zIndex: 1000,  marginTop: "200px" }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40px",
          width: scrolled ? "60%" : "100%", // Reduced width after scroll
          margin: scrolled ? "0 auto" : "0", // Centering after scroll
          border: "1px solid gray",
          borderRadius: "12px",
          backgroundColor: scrolled ? "green" : "yellow", // Background color change
          transition: "all 0.5s ease-in-out", // Smooth animation
        }}
      >
        <Stack>Image</Stack>

        {!scrolled && (
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <Stack>Menu1</Stack>
            <Stack>Menu2</Stack>
          </Stack>
        )}

        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Stack>button1</Stack>
          <Stack>button2</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StickyHeader;
