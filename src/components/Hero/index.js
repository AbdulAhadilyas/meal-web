import { HeroBackground } from '@/src/assets';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${HeroBackground.src})`, // Replace with your image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                position: "relative",
                "&::before": {
                    content: '""', // Correct content property for pseudo-elements
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgb(93 90 90 / 19%)", // Overlay color and opacity
                    zIndex: 1,
                },
                p:2
            }}
        >
            <Typography
                variant="h3"
                fontWeight="700"
                color='secondary'
                sx={{
                    zIndex: 2,
                }}
            >
                Optimized Your Meal
            </Typography>
            <Typography
                variant="body1"
                color='text.primary'
                sx={{
                    zIndex: 2,
                    mt: 1,
                }}
            >
                Select Meal to Add in Week. You will be able to edit, modify and change the Meal Weeks.
            </Typography>
        </Box>
    );
};

export default Hero;
