import { Stack, Typography } from "@mui/material";
import backgroundone from "../../../shared/assets/images/backgroundone.jpg";
import React from "react";
import { useTranslation } from "react-i18next";

const FirstSection = () => {
  //SECTION - general
  const { t } = useTranslation();

  return (
    <Stack
      id="home"
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
        padding: { xs: "0.5rem", md: "1rem", lg: "2rem" },
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
        {t("firstSection.welcome")}
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: "600px", padding: "0.5rem" }}>
        {t("firstSection.description")}
      </Typography>
    </Stack>
  );
};

export default FirstSection;
