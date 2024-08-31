import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function FAQList() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack
      sx={{
        // border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack sx={{}}>
        <Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: {
                xs: "28px",
                sm: "28px",
                md: "40px",
                lg: "40px",
                xl: "20px",
              },
              paddingTop: {
                xs: "28px",
                sm: "28px",
                md: "40px",
                lg: "40px",
                xl: "40px",
              },
            }}
          >
            <Stack
              sx={{
                fontSize: {
                  xs: "22px",
                  sm: "28px",
                  md: "52px",
                  lg: "52px",
                  xl: "68px",
                },
                lineHeight: {
                  xs: "32px",
                  sm: "32px",
                  md: "62px",
                  lg: "62px",
                  xl: "62px",
                },
                fontWeight: { xs: 600, sm: 600, md: 600, lg: 600, xl: 600 },
                color: "black",
              }}
            >
              {" "}
              Frequently asked questions{" "}
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "12px",
                  md: "24px",
                  lg: "30px",
                  xl: "30px",
                },
                lineHeight: {
                  xs: "22px",
                  sm: "22px",
                  md: "30px",
                  lg: "30px",
                  xl: "40px",
                },
                fontWeight: { xs: 400, sm: 400, md: 300, lg: 300, xl: 300 },
                color: "black",
                // border: "1px solid white",
                width: {
                  xs: "84%",
                  sm: "52%",
                  md: "80%",
                  lg: "76%",
                  xl: "100%",
                },
                marginBottom: {
                  xs: "28px",
                  sm: "28px",
                  md: "40px",
                  lg: "40px",
                  xl: "40px",
                },
              }}
              textAlign={"center"}
            >
              {" "}
              Everything you need to know about the product and billing
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{
          //   border: "1px solid red",
          width: { xl: "50%", lg: "60%", md: "50%", sm: "100%", xs: "100%" },
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleToggle("panel1")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel1" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel1" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Is customer support available?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Absolutely! Vertex Suite offers dedicated customer support to
              assist you with any questions or problems you may have. Our team
              is always ready to help you make the most of the platform.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleToggle("panel2")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel2" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel2" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              How do I get started with Vertex Suite?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Simple, you signup with your information then our team will setup
              the onboarding process and guide you through the integration
              steps.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleToggle("panel3")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel3" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel3" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Does Vertex Suite offer a free trial?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes! Vertex Suite gives you a 14-day free trial, during which you
              can experience our centralized dashboard firsthand.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleToggle("panel4")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel4" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel4" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Can Vertex Suite help me improve my customer service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes ! With features like customer relationship management and
              order details, order tracking in real time, Vertex Suite helps you
              deliver exceptional customer service and enhance customer
              experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleToggle("panel5")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel5" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel5" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Can I customize Vertex Suite to suit my business needs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes, Vertex suite is flexible and customizable, it is capable of
              providing customized solutions based on terms and conditions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleToggle("panel6")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel6" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel6" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Does Vertex Suite support multi-vendor management?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes, Vertex Suite offers a powerful multi-vendor management
              platform that allows you to easily engage with multiple sellers,
              manage inventory, and order details , track shipments from a
              centralized dashboard.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleToggle("panel7")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel7" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel7" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Can I track inventory in real-time with Vertex Suite?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes ofcourse ! Vertex provides real-time inventory tracking with
              the help of a convenient centralized dashboard, which enables you
              to keep up to date with your stock inventory and optimizes order
              processing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleToggle("panel8")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel8" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel8" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Does Vertex Suite offer financial handling features?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes, Vertex Suite enables you to simplify your financial
              management tools, payment processing and revenue management with
              the help of its user-friendly user interface.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleToggle("panel9")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel9" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel9" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Can I access Vertex Suite from any device?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes of course ! The user interface of Vertex Suite is designed
              with advanced technology, it is a better responsive UI that you
              can access from any device like desktops, tablets, and smartphones
              etc.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleToggle("panel10")}
          sx={{
            "&:hover": {
              backgroundColor: "#f4f4ff",
            },
            backgroundColor: expanded === "panel10" ? "#f4f4ff" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel10" ? (
                <FaMinus style={{ fontSize: "24px", color: "#5858e0" }} />
              ) : (
                <FaPlus style={{ fontSize: "24px", color: "#5858e0" }} />
              )
            }
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(0, 0, 0)",
                lineHeight: "31px",
              }}
            >
              Can Vertex Suite integrate with popular e-commerce marketplaces?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                lineHeight: "25px",
              }}
            >
              Yes, Vertex suite supports integration with various e-commerce
              marketplaces to expand the reach of your business with ease that
              you can handle from a single platform.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
}

export default FAQList;
