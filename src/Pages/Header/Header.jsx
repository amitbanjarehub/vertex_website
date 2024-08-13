import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import { PiNewspaperClipping } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../HeaderMenuItem/MenuItem";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState([]);

  const handleHover = (event, content) => {
    setAnchorEl(event.currentTarget);
    setMenuContent(content);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
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
              lg: "70%",
              xl: "60%",
            },
          }}
        >
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              variant="h6"
              component="div"
              onMouseEnter={(e) => handleHover(e, item.content)}
              sx={{ mx: 5, cursor: "pointer", color: "black" }}
            >
              {item.title}
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
              width: "600px",
              maxHeight: "400px",
            },
          }}
        >
          <Grid container spacing={2}>
            {menuContent.map((content, index) => (
              <Grid
                item
                xs={6}
                key={index}
                // sx={{ border: "1px solid red" }}
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
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
