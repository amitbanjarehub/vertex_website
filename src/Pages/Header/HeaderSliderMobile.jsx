// import { Box, Slide, Stack, Typography } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HeaderSliderMobile = ({ mobileMenuOpen }) => {
//   const mobileList = [
//     { title: "Try Mailmodo for free", path: "#" },
//     { title: "Login", path: "#" },
//     { title: "Help", path: "#" },
//     { title: "Pricing", path: "#" },
//     { title: "For developers", path: "#" },
//     { title: "Guides", path: "#" },
//     { title: "Case studies", path: "#" },
//     { title: "Use cases", path: "#" },
//     { title: "Features", path: "#" },
//   ];
//   const navigate = useNavigate();
//   return (
//     <>
//       <Slide
//         direction="right"
//         in={mobileMenuOpen}
//         mountOnEnter
//         timeout={600}
//         unmountOnExit
//         sx={{ border: "1px solid #ebeff2" }}
//         // sx={{ border: "1px solid red" }}
//       >
//         <Stack
//           sx={(theme) => ({
//             backgroundColor: "white",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             zIndex: 1000,

//           })}
//         >
//           {mobileList.map((item, index) => (
//             <Box key={index} onClick={() => navigate(item.path || "/")}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "black",
//                   height: "20px",
//                   fontSize: "0.75rem",
//                   borderBottom: "1px solid #ebeff2",
//                   padding: "0.50rem",
//                 }}
//               >
//                 {item.title}
//               </Typography>
//             </Box>
//           ))}
//         </Stack>
//       </Slide>
//     </>
//   );
// };

// export default HeaderSliderMobile;
import { Box, Button, Slide, Stack, Typography } from "@mui/material";
import React from "react";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderSliderMobile = ({ mobileMenuOpen, handleMobileMenuToggle }) => {
  const mobileList = [
    { title: "Try Mailmodo for free", path: "#" },
    { title: "Login", path: "#" },
    { title: "Help", path: "#" },
    { title: "Pricing", path: "#" },
    { title: "For developers", path: "#" },
    { title: "Guides", path: "#" },
    { title: "Case studies", path: "#" },
    { title: "Use cases", path: "#" },
    { title: "Features", path: "#" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <Slide direction="right" in={mobileMenuOpen} mountOnEnter unmountOnExit>
        <Stack
          sx={{
            backgroundColor: "white",
            position: "fixed",
            top: "56px", // Set the sidebar to open right below the header
            left: 0,
            zIndex: 1300,
            width: "100vw",
            height: "56vh", // Set sidebar height to 50% of viewport
            overflowY: "auto",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          {/* <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
            <Button onClick={handleMobileMenuToggle}>
              <MdMenu size={24} />
            </Button>
          </Box> */}
          {mobileList.map((item, index) => (
            <Box key={index} onClick={() => navigate(item.path || "/")}>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontSize: "0.85rem",
                  padding: "1rem",
                  borderBottom: "1px solid #ebeff2",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Slide>
    </>
  );
};

export default HeaderSliderMobile;
