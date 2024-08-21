import { Box, Button, Grid, Menu, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { IoChevronDown, IoPersonSharp } from 'react-icons/io5';
import { menuItems } from '../HeaderMenuItem/MenuItem'
import { useNavigate } from 'react-router-dom';


const HeaderDesktop = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuContent, setMenuContent] = useState([]);
    const [menuContent2, setMenuContent2] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
        setHoveredIndex(null);
    };
    const handlePrice = () => {
        navigate("/price");
    }
    const handleHover = (event, content) => {
        setAnchorEl(event.currentTarget);
        setMenuContent(content?.content || "");
        setMenuContent2(content?.content2 || "");
    };


    const navigate = useNavigate();

    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: { lg: "36px", xl: "36px" },
                    width: { lg: "646px", xl: "756px" },
                }}
            >
                {menuItems.map((item, index) => (
                    <Typography
                        key={index}
                        variant="h6"
                        onMouseOver={(e) => {
                            handleHover(e, item);
                            setHoveredIndex(index);
                        }}
                        sx={{
                            mx: 2,
                            alignItems: "center",
                            cursor: "pointer",
                            display: { lg: "flex" },
                            fontSize: { lg: "12px", xl: "14px" },
                            flexDirection: { lg: "row" },
                        }}
                    >
                        <Stack
                            sx={{
                                color: hoveredIndex === index ? "#4c3bea" : "black",
                                fontSize: { lg: "12px", xl: "14px" },
                            }}
                        >
                            {" "}
                            {item.title}{" "}
                        </Stack>
                        <Stack
                            sx={{
                                marginTop: { lg: "0px", xl: "4px" },
                                marginLeft: { lg: "2px", xl: "4px" },
                                height: { lg: "16px" },
                                transform:
                                    hoveredIndex === index ? "rotate(180deg)" : "none",
                                transformOrigin: "center",
                                color: hoveredIndex === index ? "#4c3bea" : "black",
                                transition: "transform 0.3s ease",
                            }}
                        >
                            <IoChevronDown size={16} />
                        </Stack>
                    </Typography>
                ))}

                <Stack sx={{
                    color: "black",
                    fontSize: { lg: "12px", xl: "14px" },
                    "&:hover": {
                        color: "#4c3bea", 
                    },
                }} onClick={handlePrice}>Price</Stack>
            </Stack>

            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        marginRight: "8px",
                        display: "flex",
                        alignItems: "center",
                        height: { lg: "42px", xl: "42px" },
                        fontSize: { lg: "12px", xl: "14px" },
                        "&:hover": {
                            backgroundColor: "#4c3bea",
                            color: "white",
                            borderColor: "#4c3bea",
                        },
                    }}
                >
                    <IoPersonSharp style={{ marginRight: "8px" }} />
                    Login
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        fontSize: { lg: "12px", xl: "14px" },
                        display: "flex",
                        height: { lg: "42px", xl: "42px" },
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        position: "relative",
                        padding: "8px 16px",
                        "&:hover .buttonText": {
                            transform: "translateX(-8px)",
                        },
                        "&:hover .buttonIcon": {
                            opacity: 1,
                            transform: "translateX(0)",
                        },
                    }}
                >
                    <Box
                        className="buttonText"
                        sx={{
                            transition: "transform 0.3s ease",
                        }}
                    >
                        Get started - it's free
                    </Box>
                    <Box
                        className="buttonIcon"
                        sx={{
                            position: "absolute",
                            right: "8px",
                            opacity: 0,
                            transition: "transform 0.3s ease, opacity 0.3s ease",
                        }}
                    >
                        <HiOutlineArrowSmRight size={20} color="white" />
                    </Box>
                </Button>
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
                        width: { lg: "50%", xl: "50%" },
                        maxHeight: { lg: "auto", xl: "auto" },

                        marginTop: { lg: "24px", xl: "24px" },
                    },
                }}
            >
                <Grid sx={{ display: "flex", flexDirection: "row", width: "auto" }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            marginRight: "20px",

                            // borderBottom: "1px solid #c9c9cf",
                        }}
                    >
                        {menuContent && menuContent.map((content, index) => (
                            <Grid
                                item
                                xs={6}
                                key={index}
                                onClick={() => {
                                    navigate(content.path || "/");
                                }}
                            >

                                <Stack sx={{ display: "flex", flexDirection: "row",  }}>
                                    {content.icon && (<Stack sx={{  width: "24px", marginRight: "8px" }}> {content.icon || ""}</Stack>)}
                                    <Stack sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontWeight: "bold", fontSize: "14px", color: "black" }}
                                        >
                                            {content.title || ""}
                                            {content.subtitle || ""}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 2, fontSize: "12px" }}
                                        >
                                            {content.description || ""}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                {content.items &&
                                    content.items.map((item, idx) => (
                                        <Grid container key={idx} >
                                            <Grid item xs={12}>
                                                <Stack sx={{ display: "flex", flexDirection: "row", }}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{ fontWeight: "bold", marginRight: "4px" }}
                                                    >
                                                        {item.icon || ""}
                                                    </Typography>

                                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                                        {item.title || ""}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    ))}
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            width: { lg: "50%", xl: "50%" },
                            backgroundColor: "#d6d6db",
                            borderBottom: "1px solid #c9c9cf",
                        }}
                    >
                        {menuContent2 && menuContent2.map((content, index) => (
                            <Grid
                                item
                                xs={6}
                                key={index}
                                onClick={() => {
                                    navigate(content.path || "/");
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    {content.icon || ""}
                                    {content.subtitle || ""}
                                </Typography>

                                {content.items &&
                                    content.items.map((item, idx) => (
                                        <Grid container key={idx}>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle1">
                                                    {item.icon || ""} {item.title || ""}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    sx={{
                        marginTop: { lg: "12px", xl: "12px" },
                    }}
                >
                    <Stack
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            mx: "16px",
                        }}
                    >
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#4c3bea",
                            }}
                        >
                            <Stack>See all feature</Stack>{" "}
                            <Stack sx={{ marginTop: "2px" }}>
                                <HiOutlineArrowSmRight />
                            </Stack>{" "}
                        </Stack>
                        <Stack>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#4c3bea",
                                }}
                            >
                                Book a demo
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Menu>
        </>
    )
}

export default HeaderDesktop