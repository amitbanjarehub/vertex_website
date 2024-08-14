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
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState([]);
  const [menuContent2, setMenuContent2] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const theme = useTheme();
  const isLgOrXl = useMediaQuery(theme.breakpoints.up("lg"));

  const handleHover = (event, content) => {
    setAnchorEl(event.currentTarget);
    setMenuContent(content?.content);
    setMenuContent2(content?.content2);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHoveredIndex(null);
  };
  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        // border: "1px solid red",
        display: { xl: "flex" },
        flexDirection: { xl: "row", lg: "row" },
        justifyContent: { xl: "center", lg: "center" },
      }}
    >
      {isLgOrXl && (
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid blue",
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
          <Stack
            sx={{
              display: "flex",
              // border: "1px solid red",
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
                  mx: 2, // Reduced margin on the x-axis
                  alignItems: "center", // Align items vertically center
                  cursor: "pointer",
                  // border: "1px solid blue",
                  display: { lg: "flex" },
                  fontSize: { lg: "12px", xl: "14px" },
                  flexDirection: { lg: "row" },
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
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              // border: "1px solid blue",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginRight: "8px",
                display: "flex",
                alignItems: "center",
                height: { lg: "42px", xl: "42px" },
                // width: {lg: "100px", xl: "100px"},
                fontSize: { lg: "12px", xl: "14px" },
                "&:hover": {
                  backgroundColor: "#4c3bea", // Change the button background color on hover
                  color: "white", // Change text and icon color to white on hover
                  borderColor: "#4c3bea", // Change border color on hover
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

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose,
            }}
            PaperProps={{
              sx: {
                padding: 2,
                width: { lg: "50%", xl: "50%" },
                maxHeight: { lg: "auto", xl: "auto" },

                marginTop: { lg: "24px", xl: "24px" },
              },
            }}
          >
            <Grid sx={{ display: "flex", flexDirection: "row", width: "auto" }}>
              <Grid
                container
                spacing={2}
                sx={{
                  marginRight: "20px",

                  borderBottom: "1px solid #c9c9cf",
                }}
              >
                {menuContent.map((content, index) => (
                  <Grid
                    item
                    xs={6}
                    key={index}
                    onClick={() => {
                      navigate(content.path || "/");
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {content.icon || ""} {content.title || ""}
                      {content.subtitle || ""}
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {content.description || ""}
                    </Typography>

                    {content.items &&
                      content.items.map((item, idx) => (
                        <Grid container key={idx} sx={{ ml: 2 }}>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {item.icon || ""} {item.title || ""}
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 2 }}>
                              {item.description || ""}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}
                  </Grid>
                ))}
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  width: { lg: "50%", xl: "50%" },
                  backgroundColor: "#d6d6db",
                  borderBottom: "1px solid #c9c9cf",
                }}
              >
                {menuContent2.map((content, index) => (
                  <Grid
                    item
                    xs={6}
                    key={index}
                    onClick={() => {
                      navigate(content.path || "/");
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {content.icon || ""}
                      {content.subtitle || ""}
                    </Typography>

                    {content.items &&
                      content.items.map((item, idx) => (
                        <Grid container key={idx}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1">
                              {item.icon || ""} {item.title || ""}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              sx={{
                marginTop: { lg: "12px", xl: "12px" },
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mx: "16px",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#4c3bea",
                  }}
                >
                  <Stack>See all feature</Stack>{" "}
                  <Stack sx={{ marginTop: "2px" }}>
                    <HiOutlineArrowSmRight />
                  </Stack>{" "}
                </Stack>
                <Stack>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#4c3bea",
                    }}
                  >
                    Book a demo
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Menu>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
