// import React from "react";
// import Img1 from "./2_column_c983b8610c.png";
// import Img2 from "./Frame_1110166543_66d11d4241.png";
// import Img3 from "./Group_1110165752_d5d3675d1c.png";
// import { Stack, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const Section14 = () => {
//   return (
//     <motion.div
//       initial={{ y: "20vh" }} // Stack starts from below the viewport
//       animate={{ y: 0 }} // Animates to its initial position
//       transition={{
//         duration: 2, // Duration of 2 seconds for each slide
//         ease: "easeOut",
//         repeat: Infinity, // Infinite repeat
//         repeatDelay: 4, // 1 second delay between repeats
//       }}
//     >
//       <Stack
//         sx={{
//           marginTop: "80px",
//           // border: "1px solid blue",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           position: "relative",
//           marginBottom: "200px",
//         }}
//       >
//         <Stack
//           sx={{
//             //   border: "1px solid red",
//             width: { xl: "80%", lg: "80%", md: "80%", sm: "70%", xs: "70%" },
//             position: "relative",
//           }}
//         >
//           <img
//             src={Img1}
//             alt="logo"
//             style={{
//               width: "100%",
//               height: { xl: "", lg: "", md: "", sm: "", xs: "" },
//             }}
//           />

//           <Box
//             component="img"
//             src={Img2}
//             alt="icon"
//             sx={{
//               position: "absolute",
//               left: {
//                 lg: "-100px",
//                 xl: "-100px",
//                 md: "-100px",
//                 sm: "-40px",
//                 xs: "-20px",
//               },
//               top: "50%",
//               transform: "translateY(-50%)",
//               height: {
//                 lg: "340px",
//                 xl: "340px",
//                 md: "140px",
//                 sm: "100px",
//                 xs: "80px",
//               },
//               width: {
//                 lg: "340px",
//                 xl: "340px",
//                 md: "140px",
//                 sm: "100px",
//                 xs: "80px",
//               },
//               // border: "1px solid red",
//             }}
//           />

//           <Box
//             component="img"
//             src={Img3}
//             alt="icon"
//             sx={{
//               position: "absolute",
//               right: {
//                 lg: "-100px",
//                 xl: "-100px",
//                 md: "-100px",
//                 sm: "-40px",
//                 xs: "-20px",
//               },
//               top: "50%",
//               transform: "translateY(-50%)",
//               height: {
//                 lg: "340px",
//                 xl: "340px",
//                 md: "140px",
//                 sm: "100px",
//                 xs: "80px",
//               },
//               width: {
//                 lg: "340px",
//                 xl: "340px",
//                 md: "140px",
//                 sm: "100px",
//                 xs: "80px",
//               },
//             }}
//           />
//         </Stack>
//       </Stack>
//     </motion.div>
//   );
// };

// export default Section14;

import React from "react";
import Img1 from "./2_column_c983b8610c.png";
import Img2 from "./Frame_1110166543_66d11d4241.png";
import Img3 from "./Group_1110165752_d5d3675d1c.png";
import { Stack, Box } from "@mui/material";
import { motion, useInView } from "framer-motion";

const Section14 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ y: "20vh" }}
      animate={isInView ? { y: 0 } : { y: "20vh" }}
      transition={{
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 4,
      }}
    >
      <Stack
        sx={{
          marginTop: "80px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          // marginBottom: "200px",
          marginBottom: "100px",
        }}
      >
        <Stack
          sx={{
            width: { xl: "80%", lg: "80%", md: "80%", sm: "90%", xs: "90%" },            
            position: "relative",
            // border: "1px solid red",
          }}
        >
          <img
            src={Img1}
            alt="logo"
            style={{
              width: "100%",
              height: { xl: "", lg: "", md: "", sm: "", xs: "" },
            }}
          />

          <Box
            component="img"
            src={Img2}
            alt="icon"
            sx={{
              position: "absolute",
              left: {
                lg: "-100px",
                xl: "-100px",
                md: "-100px",
                sm: "-40px",
                xs: "-20px",
              },
              top: "50%",
              transform: "translateY(-50%)",
              height: {
                lg: "340px",
                xl: "340px",
                md: "140px",
                sm: "100px",
                xs: "80px",
              },
              width: {
                lg: "340px",
                xl: "340px",
                md: "140px",
                sm: "100px",
                xs: "80px",
              },
            }}
          />

          <Box
            component="img"
            src={Img3}
            alt="icon"
            sx={{
              position: "absolute",
              right: {
                lg: "-100px",
                xl: "-100px",
                md: "-100px",
                sm: "-40px",
                xs: "-20px",
              },
              top: "50%",
              transform: "translateY(-50%)",
              height: {
                lg: "340px",
                xl: "340px",
                md: "140px",
                sm: "100px",
                xs: "80px",
              },
              width: {
                lg: "340px",
                xl: "340px",
                md: "140px",
                sm: "100px",
                xs: "80px",
              },
            }}
          />
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default Section14;
