"use client";

import { Box, Container, Typography } from "@mui/material";
import { WeekSelectionDialog, MealList } from "../components";
import MealWeeksTabs from "../components/MealWeeksTabs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("all_meals");
  const [records, setRecords] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [userMealData, setUserMealData] = useState({});
  const [openWeekSelectioNDailog, setOpenWeekSelectioNDailog] = useState(false);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        setLoading(true);
        let data = await fetch("https://dummyjson.com/recipes?limit=6");
        data = await data.json();
        setRecords(data);
      } catch (error) {
        console.log("🚀 ~ fetchMeal ~ error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, []);

  const handleMealSave = (week) => {
    const isMealAlreadyAdded = userMealData[week]?.some(
      (meal) => meal.id === selectedMeal.id
    );
    if (isMealAlreadyAdded) {
      toast.error("This meal is already added for the selected week.",{});
      return;
    }
    setUserMealData((prev) => {
      const updatedWeekData = prev[week]
        ? [...prev[week], selectedMeal]
        : [selectedMeal];
      return { ...prev, [week]: updatedWeekData };
    });
    setOpenWeekSelectioNDailog(!openWeekSelectioNDailog);
    setSelectedMeal(null);
  };

  const handleMealDelete = (mealId) => {
    setUserMealData((prev) => {
      const updatedWeekData = prev[currentTab].filter(
        (eachMeal) => eachMeal.id !== mealId
      );
      return { ...prev, [currentTab]: updatedWeekData };
    });
    toast.success("Meal deleted successfuly.",);
    setSelectedMeal(null);
  };

  return (
    <Box className="main-background" sx={{position:"relative"}}>
      <Container sx={{py:3}}>
        <Typography variant="h5" fontWeight="600" color="text.secondary" >
          Week Orders
        </Typography>
      </Container>
      <MealWeeksTabs
        value={currentTab}
        onTabChange={(_, tab) => setCurrentTab(tab)}
        isAddWeekBtnActive={currentTab !== "all_meals" || !selectedMeal}
        onAddWeekBtnClick={() =>
          setOpenWeekSelectioNDailog(!openWeekSelectioNDailog)
        }
      />

      <MealList
        data={
          currentTab === "all_meals"
            ? records?.recipes
            : userMealData[currentTab]
        }
        onMealCardClik={(meal) => setSelectedMeal(meal)}
        sletetedMeal={selectedMeal}
        isLoading={loading}
        onMealDelte={currentTab !== "all_meals" && handleMealDelete}
      />
      <WeekSelectionDialog
        open={openWeekSelectioNDailog}
        onClose={() => setOpenWeekSelectioNDailog(!openWeekSelectioNDailog)}
        handleSave={handleMealSave}
      />
    </Box>
  );
}
