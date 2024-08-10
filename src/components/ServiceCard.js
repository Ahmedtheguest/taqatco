import { Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Grid
      direction={"column"}
      alignItems={"center"}
      item
      xs={12}
      md={6}
      lg={4}
      fourK={2}
      paddingBottom={"1rem"}
    >
      <Stack
        sx={{
          backgroundColor: "secondary.light",
          borderRadius: "12px",
          padding: "2rem",
          height: "100%",
        }}
        gap={"1rem"}
      >
        {icon}
        <Typography color={"primary.light"} variant="body1">
          {title}
        </Typography>
        <Typography color={"primary.light"} variant="body2">
          {description}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default ServiceCard;
