import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Link,
  Stack,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import HeaderSliderMobile from "../Header/HeaderSliderMobile";
import Logo from "./logo.png";
import { MdMenu } from "react-icons/md";

const LoginCard = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    <Stack>
      <AppBar
        sx={{
          backgroundColor: "white",
          display: { xl: "flex" },
          flexDirection: { xl: "row", lg: "row" },
          justifyContent: { xl: "center", lg: "center", md: "column" },
        //   border: "1px solid red",
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
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          p: 4,
          mt: 5,
          boxShadow: 3,
          borderRadius: 2,
          marginTop: { lg: "10%", xl: "10%", xs: "124px", sm: "224px" },
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login to continue{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </Typography>

        <Button
          variant="outlined"
          startIcon={<FcGoogle />}
          fullWidth
          size="large"
          sx={{ mb: 3, textTransform: "none", borderRadius: 2 }}
        >
          <Typography>Sign in with Google for Work</Typography>
        </Button>

        <Divider sx={{ mb: 3 }}>Or continue with</Divider>
        <Stack>
          <Typography>Work Email</Typography>
          <TextField
            //   label="Work Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 3, borderRadius: 2 }}
            size="small"
          />
        </Stack>
        <Box sx={{ position: "relative", mb: 3 }}>
          <Stack>
            <Typography>Your Password</Typography>
            <TextField
              // label="Your Password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              sx={{ borderRadius: 2 }}
              size="small"
            />
          </Stack>
          <Box
            onClick={togglePasswordVisibility}
            sx={{
              position: "absolute",
              top: "70%",
              right: 10,
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
          </Box>
        </Box>

        <Box sx={{ textAlign: "right", mb: 3 }}>
          <Link href="#" underline="none">
            Forgot Password?
          </Link>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mb: 3, textTransform: "none", borderRadius: 2 }}
          size="large"
        >
          Login
        </Button>

        <Typography align="center" variant="body2">
          Don't have a Mailmodo account yet? <Link href="#">Sign up</Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default LoginCard;
