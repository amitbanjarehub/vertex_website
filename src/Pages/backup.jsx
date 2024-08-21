
import { Button, Stack, Typography } from '@mui/material'

import React from 'react'

const Section1 = () => {
    return (
        <Stack sx={{ height: "410px", border: "1px solid red", marginTop: "80px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }} >
            <Stack sx={{ height: "358px", border: "1px solid blue", width: "788px" }}>
                <Stack sx={{
                    fontSize: {
                        xs: "40px",
                        sm: "40px",
                        md: "40px",
                        lg: "62px",
                        xl: "62px",
                    }, fontWeight: 600, color: "black", lineHeight: {
                        xs: "42px",
                        sm: "42px",
                        md: "42px",
                        lg: "65px",
                        xl: "65px",
                    }, textAlign: "center"
                }}>Let your subscribers</Stack>
                <Stack sx={{
                    display: "flex", flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                        xl: "row",
                    }, justifyContent: "center"
                }}>
                    <Typography sx={{
                        fontSize: {
                            xs: "40px",
                            sm: "40px",
                            md: "40px",
                            lg: "62px",
                            xl: "62px",
                        }, fontWeight: 600, color: "#5858e0", lineHeight: {
                            xs: "42px",
                            sm: "42px",
                            md: "42px",
                            lg: "65px",
                            xl: "65px",
                        },
                    }}>take action</Typography>

                    <Typography sx={{
                        fontSize: {
                            xs: "40px",
                            sm: "40px",
                            md: "40px",
                            lg: "62px",
                            xl: "62px",
                        }, fontWeight: 600, color: "black", lineHeight: {
                            xs: "42px",
                            sm: "42px",
                            md: "42px",
                            lg: "65px",
                            xl: "65px",
                        },
                    }}>within emails</Typography>
                </Stack>
                <Stack sx={{
                    fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "16px",
                        lg: "24px",
                        xl: "24px",
                    }, fontWeight: 400, color: "#000", lineHeight: {
                        xs: "24px",
                        sm: "24px",
                        md: "24px",
                        lg: "34px",
                        xl: "34px",
                    }, textAlign: "center", marginTop: "38px"
                }}>Design, send and automate interactive emails to</Stack>
                <Stack sx={{
                    fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "16px",
                        lg: "24px",
                        xl: "24px",
                    }, fontWeight: 300, color: "#000", lineHeight: {
                        xs: "24px",
                        sm: "24px",
                        md: "24px",
                        lg: "34px",
                        xl: "34px",
                    }, textAlign: "center"
                }}>boost your email conversions by 3x</Stack>
                <Stack sx={{
                    display: "flex", flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                        xl: "row",
                    }, justifyContent: "center", border: "1px solid red", marginTop: "52px"
                }}>
                    <Stack sx={{
                        marginRight: {
                            xs: "0px",
                            sm: "0px",
                            md: "0px",
                            lg: "20px",
                            xl: "20px",
                        }, marginBottom: {
                            xs: "20px",
                            sm: "20px",
                            md: "20px",
                            lg: "0px",
                            xl: "0px",
                        }
                    }}><Button variant="contained" size='large'>Get Started - it's free</Button></Stack>
                    <Stack><Button variant="outlined" size='large'>Talk to a Human</Button></Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Section1