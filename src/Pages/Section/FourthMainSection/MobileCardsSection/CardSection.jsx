import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Img1 from "./section8first.png";
import Img2 from "./section8second.png";
import Img3 from "./section8third.png";
import { Card, CardContent, Link, Stack, Typography } from "@mui/material";

const CardSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // triggerOnce ko false rakhen
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Stack sx={{ height: "auto" }} ref={ref}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column" },
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: { xs: "center", sm: "center", md: "center" },
        }}
      >
        {/* Card 1 */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Card
            sx={{
              maxWidth: 345,
              height: { sm: "412px", xs: "412px" },
              borderRadius: 3,
              boxShadow: 3,
              padding: 2,
              marginBottom: { xs: "20px", sm: "20px" },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{
                  fontSize: { xs: "18px", sm: "18px" },
                  lineHeight: { xs: "24px", sm: "24px" },
                  fontWeight: 700,
                  color: "rgb(0,0,0)",
                  marginBottom: { xs: "8px", sm: "8px" },
                }}
              >
                Dedicated, tailored support
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "14px", sm: "14px" },
                  lineHeight: { xs: "20px", sm: "20px" },
                  fontWeight: 400,
                  color: "gray",
                  marginBottom: { xs: "16px", sm: "16px" },
                }}
              >
                Rely on personalized support from platform migration to
                optimizing your results and troubleshooting.
              </Typography>
              <Link
                sx={{
                  mt: 2,
                  color: "#5a45fe",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  fontSize: { xs: "16px", sm: "16px" },
                }}
                variant="text"
              >
                Talk to a human →
              </Link>
            </CardContent>
            <Stack
              sx={{
                height: { xs: "212px", sm: "212px" },
                width: { xs: "100%", sm: "100%" },
                borderRadius: "12px",
                marginTop: { xs: "20px", sm: "20px" },
              }}
            >
              <img
                src={Img1}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Stack>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            sx={{
              maxWidth: 345,
              borderRadius: 3,
              height: { sm: "412px", xs: "412px" },
              boxShadow: 3,
              padding: 2,
              marginBottom: { xs: "20px", sm: "20px" },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{
                  fontSize: { xs: "18px", sm: "18px" },
                  lineHeight: { xs: "24px", sm: "24px" },
                  fontWeight: 700,
                  color: "rgb(0,0,0)",
                  marginBottom: { xs: "8px", sm: "8px" },
                }}
              >
                Dedicated, tailored support
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "14px", sm: "14px" },
                  lineHeight: { xs: "20px", sm: "20px" },
                  fontWeight: 400,
                  color: "gray",
                  marginBottom: { xs: "16px", sm: "16px" },
                }}
              >
                Rely on personalized support from platform migration to
                optimizing your results and troubleshooting.
              </Typography>
              <Link
                sx={{
                  mt: 2,
                  color: "#5a45fe",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  fontSize: { xs: "16px", sm: "16px" },
                }}
                variant="text"
              >
                Talk to a human →
              </Link>
            </CardContent>
            <Stack
              sx={{
                height: { xs: "212px", sm: "212px" },
                width: { xs: "100%", sm: "100%" },
                borderRadius: "12px",
                marginTop: { xs: "20px", sm: "20px" },
              }}
            >
              <img
                src={Img2}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Stack>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card
            sx={{
              maxWidth: 345,
              borderRadius: 3,
              height: { sm: "412px", xs: "412px" },
              boxShadow: 3,
              padding: 2,
              marginBottom: { xs: "20px", sm: "20px" },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{
                  fontSize: { xs: "18px", sm: "18px" },
                  lineHeight: { xs: "24px", sm: "24px" },
                  fontWeight: 700,
                  color: "rgb(0,0,0)",
                  marginBottom: { xs: "8px", sm: "8px" },
                }}
              >
                Dedicated, tailored support
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "14px", sm: "14px" },
                  lineHeight: { xs: "20px", sm: "20px" },
                  fontWeight: 400,
                  color: "gray",
                  marginBottom: { xs: "16px", sm: "16px" },
                }}
              >
                Rely on personalized support from platform migration to
                optimizing your results and troubleshooting.
              </Typography>
              <Link
                sx={{
                  mt: 2,
                  color: "#5a45fe",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  fontSize: { xs: "16px", sm: "16px" },
                }}
                variant="text"
              >
                Talk to a human →
              </Link>
            </CardContent>
            <Stack
              sx={{
                height: { xs: "212px", sm: "212px" },
                width: { xs: "100%", sm: "100%" },
                borderRadius: "12px",
                marginTop: { xs: "20px", sm: "20px" },
              }}
            >
              <img
                src={Img3}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Stack>
          </Card>
        </motion.div>
      </Stack>
    </Stack>
  );
};

export default CardSection;
