"use client";
import { Container, Grid, Grid2, Typography, Box } from "@mui/material";
import React from "react";
import MealCard from "../MealCard";
import { NoRecordIlllustartion } from "@/src/assets";
import Image from "next/image";
import MealListSkeleton from "../MealListSkeleton";
import MealCardSkeleton from "../MealCardSkeleton";

const MealList = ({
  data,
  onMealCardClik = () => {},
  sletetedMeal,
  isLoading,
  onMealDelte
}) => {
  return (
    <Container sx={{ my: 8 }}>
      <Grid2 container spacing={4}>
        {/* Show loading skeleton while isLoading is true */}
        {isLoading ? (
          Array(6)
            .fill("_")
            .map((each, index) => (
              <Grid2 key={index} size={{ xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }}>
                <MealCardSkeleton />
              </Grid2>
            ))
        ) : (
          <>
            {/* Show No Records message if data is empty */}
            {!data?.length ? (
              <Grid2 size={{ xs: 12 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Image
                    src={NoRecordIlllustartion}
                    alt="No records"
                    height={300}
                  />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    No meals available for this week. Please check back later.
                  </Typography>
                </Box>
              </Grid2>
            ) : (
              // Render Meal Cards when data is available
              data?.map((each) => (
                <Grid2
                  key={each.id}
                  size={{ xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }}
                >
                  <MealCard
                    data={each}
                    onClick={() => onMealCardClik(each)}
                    sleected={sletetedMeal?.id === each.id}
                    onDelete={onMealDelte}
                  />
                </Grid2>
              ))
            )}
          </>
        )}
      </Grid2>
    </Container>
  );
};

export default MealList;
