import { Box, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const HeaderSliderMobile = ({ mobileMenuOpen }) => {

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
    ]
    const navigate = useNavigate();
    return (
        <>
            <Slide direction="right" in={mobileMenuOpen} mountOnEnter timeout={600} unmountOnExit sx={{ border: "1px solid #ebeff2" }}>
                <Stack
                    sx={(theme) => ({
                        backgroundColor: "white",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 1000,

                    })}
                >
                    {mobileList.map((item, index) => (
                        <Box key={index} onClick={() => navigate(item.path || "/")}>
                            <Typography variant="h6" sx={{ color: "black", height: "20px", fontSize: "0.75rem", borderBottom: "1px solid #ebeff2", padding: "0.50rem" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}

                </Stack>
            </Slide>
        </>
    )
}

export default HeaderSliderMobile