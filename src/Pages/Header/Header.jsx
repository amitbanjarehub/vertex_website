// import React, { useEffect, useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import {
//   Box,
//   Button,
//   Slide,
//   Stack,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import Logo from "./logo.png";
// import { MdMenu } from "react-icons/md";
// import HeaderSliderMobile from "./HeaderSliderMobile";
// import HeaderDesktop from "./HeaderDesktop";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [slideDirection, setSlideDirection] = useState("right");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const theme = useTheme();
//   const isLgOrXl = useMediaQuery(theme.breakpoints.up("lg"));

//   const handleMobileMenuOpen = () => {
//     setSlideDirection("right");
//     setMobileMenuOpen(true);
//   };

//   const handleMobileMenuClose = () => {
//     setSlideDirection("left");
//     setMobileMenuOpen(false);
//   };

//   return (
//     <Stack
//       sx={{
//         // backgroundColor: "white",
//         display: { xl: "flex" },
//         flexDirection: { xl: "row", lg: "row" },
//         justifyContent: { xl: "center", lg: "center", md: "column" },
//         // border: "1px solid blue",
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//         // width: { xl: scrolled ? "60%" : "100%", lg: scrolled ? "60" : "100%" },
//         // display: "flex",
//         // flexDirection: "row",
//         // justifyContent: "center",
//         // alignItems: "center",
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: { xl: scrolled ? "32%" : "70%", lg: scrolled ? "36%" : "80%" },
//           marginTop: {
//             xl: scrolled ? "20px" : "0px",
//             lg: scrolled ? "20px" : "0px",
//           },
//           backgroundColor: {
//             xl: scrolled ? "#847e94" : "none",
//             lg: scrolled ? "#847e94" : "none",
//           },
//           // width: { xl: "70%", lg: "80%" },
//           // border: "1px solid red",
//           borderRadius: {
//             xl: scrolled ? "12px" : "0px",
//             lg: scrolled ? "12px" : "0px",
//           },
//           transition: "all 0.5s ease-in-out",
//         }}
//       >
//         <Stack
//           sx={{
//             height: { lg: "30px", xl: "36" },
//             width: { lg: "120px", xl: "198px" },
//             // border: "1px solid red",
//           }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <img src={Logo} alt="logo" />
//         </Stack>
//         {isLgOrXl ? (
//           <>
//             {" "}
//             <HeaderDesktop scrolled={scrolled} />{" "}
//           </>
//         ) : mobileMenuOpen ? (
//           <>
//             <Button onClick={handleMobileMenuClose}>
//               <MdMenu size={24} />
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button onClick={handleMobileMenuOpen}>
//               <MdMenu size={24} />
//             </Button>
//           </>
//         )}
//       </Toolbar>

//       {mobileMenuOpen && <HeaderSliderMobile mobileMenuOpen={mobileMenuOpen} />}
//     </Stack>
//   );
// };

// export default Header;

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
import Logo from "./logo.png";
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
          <img src={Logo} alt="logo" />
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
