import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../HeaderMenuItem/MenuItem";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import Logo from "./logo.png";
import { MdMenu } from "react-icons/md"; // Add this for mobile menu icon

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState([]);
  const [menuContent2, setMenuContent2] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const theme = useTheme();
  const isLgOrXl = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdOrSm = useMediaQuery(theme.breakpoints.down("md")); // Check for mobile screens

  const handleHover = (event, content) => {
    setAnchorEl(event.currentTarget);
    setMenuContent(content?.content);
    setMenuContent2(content?.content2);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHoveredIndex(null);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: { xl: "row", lg: "row", md: "column" }, // Column layout for mobile
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xl: "70%", lg: "80%", md: "100%" },
        }}
      >
        <Stack
          sx={{
            height: { lg: "30px", xl: "36px" },
            width: { lg: "120px", xl: "198px" },
          }}
        >
          <img src={Logo} alt="logo" />
        </Stack>

        {isMdOrSm ? (
          // Mobile menu
          <Button onClick={handleMobileMenuOpen}>
            <MdMenu size={24} />
          </Button>
        ) : (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: { lg: "36px", xl: "36px" },
              width: { lg: "646px", xl: "756px" },
            }}
          >
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="h6"
                onMouseOver={(e) => {
                  handleHover(e, item);
                  setHoveredIndex(index);
                }}
                sx={{
                  mx: 2,
                  alignItems: "center",
                  cursor: "pointer",
                  display: { lg: "flex" },
                  fontSize: { lg: "12px", xl: "14px" },
                }}
              >
                <Stack
                  sx={{
                    color: hoveredIndex === index ? "#4c3bea" : "black",
                    fontSize: { lg: "12px", xl: "14px" },
                  }}
                >
                  {" "}
                  {item.title}{" "}
                </Stack>
                <Stack
                  sx={{
                    marginTop: { lg: "0px", xl: "4px" },
                    marginLeft: { lg: "2px", xl: "4px" },
                    height: { lg: "16px" },
                    transform:
                      hoveredIndex === index ? "rotate(180deg)" : "none",
                    transformOrigin: "center",
                    color: hoveredIndex === index ? "#4c3bea" : "black",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <IoChevronDown size={16} />
                </Stack>
              </Typography>
            ))}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  marginRight: "8px",
                  display: "flex",
                  alignItems: "center",
                  height: { lg: "42px", xl: "42px" },
                  fontSize: { lg: "12px", xl: "14px" },
                  "&:hover": {
                    backgroundColor: "#4c3bea",
                    color: "white",
                    borderColor: "#4c3bea",
                  },
                }}
              >
                <IoPersonSharp style={{ marginRight: "8px" }} />
                Login
              </Button>

              <Button
                variant="contained"
                sx={{
                  fontSize: { lg: "12px", xl: "14px" },
                  display: "flex",
                  height: { lg: "42px", xl: "42px" },
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                  padding: "8px 16px",
                  "&:hover .buttonText": {
                    transform: "translateX(-8px)",
                  },
                  "&:hover .buttonIcon": {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                }}
              >
                <Box
                  className="buttonText"
                  sx={{
                    transition: "transform 0.3s ease",
                  }}
                >
                  Get started - it's free
                </Box>
                <Box
                  className="buttonIcon"
                  sx={{
                    position: "absolute",
                    right: "8px",
                    opacity: 0,
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  <HiOutlineArrowSmRight size={20} color="white" />
                </Box>
              </Button>
            </Stack>
          </Stack>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={null} // No need for anchorEl for mobile menu
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "360px",
            padding: 2,
            backgroundColor: "#fff",
          },
        }}
      >
        {menuItems.map((item, index) => (
          <Box key={index} onClick={() => navigate(item.path || "/")}>
            <Typography variant="h6" sx={{ py: 1 }}>
              {item.title}
            </Typography>
          </Box>
        ))}
        {/* Add more items as needed */}
      </Menu>
    </AppBar>
  );
};

export default Header;
