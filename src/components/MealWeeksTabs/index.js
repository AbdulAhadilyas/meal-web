"use client";

import { tabData } from "@/src/constants";
import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const MealWeeksTabs = ({
  onTabChange = () => {},
  value,
  isAddWeekBtnActive,
  onAddWeekBtnClick,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "white",
        py: 2.5,
        width: "100%",
        position:"sticky",
        top:0,
        zIndex:1
      }}
    >
      <Container>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          spacing={isSmallScreen ? 2 : 0}
          justifyContent="space-between"
          alignItems={isSmallScreen ? "flex-start" : "center"}
        >
          {/* Tabs Section */}
          <Box sx={{maxWidth:"100%"}}>
            <Tabs
              onChange={onTabChange}
              value={value}
              variant={isSmallScreen ? "scrollable" : "standard"}
              scrollButtons={isSmallScreen ? "auto" : false}
              allowScrollButtonsMobile
            >
              {tabData.map((eachTab) => (
                <Tab
                  label={eachTab.label}
                  value={eachTab.value}
                  key={eachTab.value}
                />
              ))}
            </Tabs>
          </Box>
          {/* Button Section */}
          <Button
            variant="contained"
            disabled={isAddWeekBtnActive}
            onClick={onAddWeekBtnClick}
            fullWidth={isSmallScreen}
            sx={{ mt: isSmallScreen ? 1 : 0 }}
          >
            Add to Week
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default MealWeeksTabs;
