import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const GoalCard = ({ title, description, icon }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      textAlign={"start"}
      paddingY="1rem"
      paddingRight={{ xs: "0rem", sm: "1rem" }}
    >
      <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
        {icon}
        <Typography variant="body1" color={"primary.light"}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="body2" color={"primary.light"}>
        {description}
      </Typography>
    </Grid>
  );
};

export default GoalCard;
