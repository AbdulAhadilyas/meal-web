"use client";

import React from "react";
import { Box, Card, Chip, Stack, Skeleton, Container, Grid2 } from "@mui/material";




const MealListSkeleton = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Grid2 container spacing={4}>
        {Array(6).fill("_").map((each,index) => (
          <Grid2 key={index} size={{ xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }}>
            <SkeletonMealCard  />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  )
}

export default MealListSkeleton


const SkeletonMealCard = () => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        p: 3,

      }}
      component={Stack}
      spacing={2.3}
    >
      {/* Image Section Skeleton */}
      <Box
        position="relative"
        sx={{
          width: "100%",
          height: "200px",
          borderRadius: "15px",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
        <Chip
          label=""
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 70,
            height: 25,
            borderRadius: "5px",
          }}
          component={Skeleton}
        />
      </Box>

      {/* Content Section Skeleton */}
      <Box>
        <Skeleton variant="text" width="60%" height={30} animation="wave" />
        <Box mt={1} mb={2}>
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              variant="text"
              width={`${70 - index * 10}%`}
              height={20}
              animation="wave"
              sx={{ mb: 0.5 }}
            />
          ))}
        </Box>

        {/* Cuisine and Rating Skeleton */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton
            variant="text"
            width="40%"
            height={20}
            animation="wave"
            sx={{ mb: 0.5 }}
          />
          <Skeleton
            variant="text"
            width="30%"
            height={20}
            animation="wave"
            sx={{ mb: 0.5 }}
          />
        </Stack>
      </Box>
    </Card>
  );
};

