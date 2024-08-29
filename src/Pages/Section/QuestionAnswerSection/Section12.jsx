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
              Does Mailmodo create/send only interactive emails?
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
              Mailmodo enables but is not limited to creating and sending
              interactive emails. You can create, send, and automate both HTML
              and interactive AMP email campaigns without any dev intervention.
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
              Does Mailmodo create/send only interactive emails?
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
              Mailmodo enables but is not limited to creating and sending
              interactive emails. You can create, send, and automate both HTML
              and interactive AMP email campaigns without any dev intervention.
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
              Does Mailmodo create/send only interactive emails?
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
              Mailmodo enables but is not limited to creating and sending
              interactive emails. You can create, send, and automate both HTML
              and interactive AMP email campaigns without any dev intervention.
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
              Does Mailmodo create/send only interactive emails?
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
              Mailmodo enables but is not limited to creating and sending
              interactive emails. You can create, send, and automate both HTML
              and interactive AMP email campaigns without any dev intervention.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>

    
    </Stack>
  );
}

export default FAQList;
