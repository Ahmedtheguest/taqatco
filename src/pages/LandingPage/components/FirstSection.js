import { Stack, Typography } from "@mui/material";
import backgroundone from "../../../shared/assets/images/backgroundone.jpg";
import React from "react";

const FirstSection = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "90vh",
        backgroundImage: `url(${backgroundone})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
        Welcome to Taqatco
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: "600px" }}>
        We turn waste into valuable resources, driving Saudi Arabia’s path to
        zero carbon emissions by 2060. Discover our sustainable solutions in
        recycling and biogas production for a cleaner, greener future.
      </Typography>
    </Stack>
  );
};

export default FirstSection;
