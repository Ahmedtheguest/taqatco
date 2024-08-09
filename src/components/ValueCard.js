import { Grid, Typography } from "@mui/material";
import React from "react";

const ValueCard = ({ title, description, icon }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      xl={4}
      textAlign={"start"}
      paddingY="1rem"
      paddingRight={{ xs: "0rem", sm: "1rem" }}
    >
      {icon}
      <Typography variant="body1" color={"tertiary.main"}>
        {title}
      </Typography>
      <Typography variant="body2" color={"tertiary.light"}>
        {description}
      </Typography>
    </Grid>
  );
};

export default ValueCard;
