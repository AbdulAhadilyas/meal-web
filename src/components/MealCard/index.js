"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Chip,
  Rating,
  Stack,
  Typography,
  Collapse,
  Button,
  CardActionArea,
  Paper,
  Fab,
} from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete icon

const MealCard = ({
  data,
  onClick = () => {},
  sleected,
  onDelete ,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (event) => {
    event.stopPropagation();
    setExpanded((prev) => !prev);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete(data.id);
  };

  return (
    <Paper
      sx={{
        borderRadius: "16px",
        position: "relative",
        ...(sleected && { border: 2, borderColor: "primary.main" }),
      }}
      onClick={onClick}
      elevation={6}
    >
      {onDelete && (
        <Fab
          onClick={handleDeleteClick}
          sx={{
            position: "absolute",
            top: -15,
            right: -7,
          }}
          color="error"
          size="small"
        >
          <DeleteIcon />
        </Fab>
      )}
      <CardActionArea sx={{ borderRadius: "16px", p: 3 }} component="div" >
        <Stack spacing={2}>
          <Box
            position="relative"
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Image src={data.image} alt="meal" fill />
            <Chip
              label={data?.mealType[0]}
              color="primary"
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            />
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold">
              {data?.name}
            </Typography>
            <Box mt={1} mb={2}>
              <Collapse in={expanded} collapsedSize={110}>
                {data.instructions.map((eachInc, index) => (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key={index}
                    sx={{ fontSize: "0.9rem", mb: 0.5 }}
                  >
                    {eachInc}
                  </Typography>
                ))}
              </Collapse>

              {data.instructions.length > 4 && (
                <Button
                  onClick={handleExpandClick}
                  sx={{
                    mt: 1,
                    textTransform: "none",
                    fontSize: "0.85rem",
                    color: "primary.main",
                  }}
                >
                  {expanded ? "See Less" : "See More"}
                </Button>
              )}
            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2">
                <b>Cuisine:</b> {data?.cuisine}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" mr={1}>
                  <b>Rating:</b> {data?.rating}
                </Typography>
                <Rating
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: (theme) => theme.palette.primary.main,
                    },
                    "& .MuiRating-iconEmpty": {
                      color: (theme) => theme.palette.action.disabled,
                    },
                  }}
                  value={data?.rating}
                  precision={0.1}
                  readOnly
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </CardActionArea>
    </Paper>
  );
};

export default MealCard;
