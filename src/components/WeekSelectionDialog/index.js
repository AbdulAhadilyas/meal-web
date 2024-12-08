"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { weekData } from "@/src/constants";

const WeekSelectionDialog = ({ open, onClose, handleSave }) => {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");

  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Typography variant="h6" fontWeight="600" align="center" gutterBottom>
            Select Week
          </Typography>
          <Stack direction={{sm:"row",xs:"column"}} spacing={2} justifyContent="center" >
            {weekData.map((eachWeek) => (
              <Button
                key={eachWeek.value}
                disableElevation
                children={eachWeek.label}
                color={selectedWeek === eachWeek.value ? "primary" : "default"}
                sx={{
                  background:
                    selectedWeek === eachWeek.value
                      ? "rgba(207, 236, 255, 1)"
                      : "rgba(242, 242, 242, 1)",
                  color: "text.secondary",
                  borderRadius: "9.55px",
                }}
                onClick={() => handleWeekSelect(eachWeek.value)}
                variant="contained"
              />
            ))}
          </Stack>
          <Box>
            <Button
              sx={{ width: "120px" }}
              variant="contained"
              onClick={()=>handleSave(selectedWeek)}
              color="primary"
            >
              Save
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default WeekSelectionDialog;
