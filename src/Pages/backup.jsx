
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import { Button, Stack, Box, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../HeaderMenuItem/MenuItem";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState([]);
  const [menuContent2, setMenuContent2] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const theme = useTheme();
  const isLgOrXl = useMediaQuery(theme.breakpoints.up('lg'));

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
    isLgOrXl && (
      <Box>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "150px",
              marginLeft: "150px",
            }}
          >
            <Stack>
              <Typography variant="h4" component="div" color={"black"}>
                Mailmodo
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: {
                  lg: "60%",
                  xl: "60%",
                },
              }}
            >
              {menuItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  component="div"
                  onMouseOver={(e) => {
                    handleHover(e, item);
                    setHoveredIndex(index);
                  }}
                  sx={{
                    mx: 4,
                    cursor: "pointer",
                    display: { lg: "flex" },
                    flexDirection: { lg: "row" },
                  }}
                >
                  <Stack
                    sx={{ color: hoveredIndex === index ? "#4c3bea" : "black" }}
                  >
                    {item.title}
                  </Stack>
                  <Stack
                    sx={{
                      marginTop: { lg: "8px" },
                      marginLeft: { lg: "4px" },
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
              }}
            >
              <Button variant="outlined" sx={{ marginRight: "8px" }}>
                Login
              </Button>
              <Button variant="contained">Get started - it's free</Button>
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
                              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
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
        </AppBar>
      </Box>
    )
  );
};

export default Header;

