// import React from "react";
// import Img1 from "./2_column_c983b8610c.png";
// import Img2 from "./Frame_1110166543_66d11d4241.png";
// import Img3 from "./Group_1110165752_d5d3675d1c.png";
// import { Stack } from "@mui/material";

// const Section14 = () => {
//   return (
//     <Stack
//       sx={{
//         marginTop: "80px",
//         border: "1px solid blue",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         position: "relative",
//         marginBottom: "200px",
//       }}
//     >
//       <Stack
//         sx={{
//           border: "1px solid red",
//           width: { xl: "80%", lg: "80%", md: "80%", sm: "70%", xs: "70%" },
//           position: "relative",
//         }}
//       >
//         <img src={Img1} alt="logo" style={{ width: "100%" }} />
//         <img
//           src={Img2}
//           alt="icon"
//           style={{
//             position: "absolute",
//             left: "-100px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             height: {
//               lg: "340px",
//               xl: "340px",
//               md: "340px",
//               xs: "20px",
//               sm: "20px",
//             },
//             width: {
//               lg: "340px",
//               xl: "340px",
//               md: "340px",
//               xs: "20px",
//               sm: "20px",
//             },
//             border: "1px solid red",
//           }}
//         />
//         <img
//           src={Img3}
//           alt="icon"
//           style={{
//             position: "absolute",
//             right: "-100px", // Right side me position karne ke liye
//             top: "50%",
//             transform: "translateY(-50%)",
//             height: {
//               lg: "340px",
//               xl: "340px",
//               md: "340px",
//               xs: "40px",
//               sm: "40px",
//             },
//             width: {
//               lg: "340px",
//               xl: "340px",
//               md: "340px",
//               xs: "40px",
//               sm: "40px",
//             },
//           }}
//         />
//       </Stack>
//     </Stack>
//   );
// };

// export default Section14;

import React from "react";
import Img1 from "./2_column_c983b8610c.png";
import Img2 from "./Frame_1110166543_66d11d4241.png";
import Img3 from "./Group_1110165752_d5d3675d1c.png";
import { Stack, Box } from "@mui/material";

const Section14 = () => {
  return (
    <Stack
      sx={{
        marginTop: "80px",
        // border: "1px solid blue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
        marginBottom: "200px",
      }}
    >
      <Stack
        sx={{
          //   border: "1px solid red",
          width: { xl: "80%", lg: "80%", md: "80%", sm: "70%", xs: "70%" },
          position: "relative",
        }}
      >
        <img src={Img1} alt="logo" style={{ width: "100%",height: {xl: "", lg: "", md: "", sm: "", xs: ""} }} />

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
            // border: "1px solid red",
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
  );
};

export default Section14;
