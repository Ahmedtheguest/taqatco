import { Stack, Typography } from "@mui/material";
import React from "react";
import {
  FaTrashAlt,
  FaIndustry,
  FaLeaf,
  FaSeedling,
  FaClipboardCheck,
  FaTruck,
} from "react-icons/fa";
import ServiceCard from "../../../components/ServiceCard";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

const FourthSection = () => {
  //SECTION - general
  const theme = useTheme();
  const { t } = useTranslation();

  //SECTION - services
  const servicesStyles = {
    color: theme.palette.primary.light,
    size: 30,
  };
  const services = [
    {
      title: t("fourthSection.services.municipalSolidWasteRecycling.title"),
      description: t(
        "fourthSection.services.municipalSolidWasteRecycling.description"
      ),
      icon: <FaTrashAlt {...servicesStyles} />,
    },
    {
      title: t("fourthSection.services.metalAndScrapRecycling.title"),
      description: t(
        "fourthSection.services.metalAndScrapRecycling.description"
      ),
      icon: <FaIndustry {...servicesStyles} />,
    },
    {
      title: t("fourthSection.services.biogasProduction.title"),
      description: t("fourthSection.services.biogasProduction.description"),
      icon: <FaLeaf {...servicesStyles} />,
    },
    {
      title: t("fourthSection.services.organicFertilizerProduction.title"),
      description: t(
        "fourthSection.services.organicFertilizerProduction.description"
      ),
      icon: <FaSeedling {...servicesStyles} />,
    },
    {
      title: t("fourthSection.services.environmentalConsulting.title"),
      description: t(
        "fourthSection.services.environmentalConsulting.description"
      ),
      icon: <FaClipboardCheck {...servicesStyles} />,
    },
    {
      title: t("fourthSection.services.wasteManagementSolutions.title"),
      description: t(
        "fourthSection.services.wasteManagementSolutions.description"
      ),
      icon: <FaTruck {...servicesStyles} />,
    },
  ];

  return (
    <Stack
      sx={{
        paddingY: "2rem",
        backgroundColor: "secondary.dark",
        paddingX: "0.5rem",
      }}
    >
      <Stack
        sx={{
          width: "90%",
          margin: "auto",
          borderRadius: "12px",
        }}
        gap={"2rem"}
        id="services"
      >
        <Typography color={"primary.light"} variant="h5">
          {t("fourthSection.servicesTitle")}
        </Typography>
        <Grid
          direction={{ xs: "column", md: "row" }}
          container
          xs={12}
          spacing={{ xs: "0.5rem", md: "1rem" }}
        >
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default FourthSection;
