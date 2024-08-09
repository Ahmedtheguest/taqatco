import { Stack, Typography } from "@mui/material";
import backgroundtwo from "../../../shared/assets/images/backgroundtwo.jpg";
import React from "react";

const ThirdSection = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "80vh",
        backgroundImage: `url(${backgroundtwo})`,
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
        Discover the beauty of the world around you. Explore the wilderness,
        embrace the serenity, and reconnect with nature.
      </Typography>
    </Stack>
  );
};

export default ThirdSection;
