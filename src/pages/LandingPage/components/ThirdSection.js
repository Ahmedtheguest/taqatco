import { Grid, Stack, Typography } from "@mui/material";
import backgroundtwo from "../../../shared/assets/images/backgroundtwo.jpg";
import React from "react";
import GoalCard from "../../../components/GoalCard";
import {
  FaRecycle,
  FaTree,
  FaRedo,
  FaCogs,
  FaChartLine,
  FaPeopleCarry,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ThirdSection = () => {
  const { t } = useTranslation();
  const goalsStyles = {
    color: "primary.light",
    size: 24,
  };
  const goals = [
    {
      title: t("thirdSection.goals.enhanceEnvironmentalSustainability.title"),
      description: t(
        "thirdSection.goals.enhanceEnvironmentalSustainability.description"
      ),
      icon: <FaRecycle {...goalsStyles} />,
    },
    {
      title: t("thirdSection.goals.reduceCarbonFootprint.title"),
      description: t("thirdSection.goals.reduceCarbonFootprint.description"),
      icon: <FaTree {...goalsStyles} />,
    },
    {
      title: t("thirdSection.goals.promoteCircularEconomy.title"),
      description: t("thirdSection.goals.promoteCircularEconomy.description"),
      icon: <FaRedo {...goalsStyles} />,
    },
    {
      title: t("thirdSection.goals.fosterInnovation.title"),
      description: t("thirdSection.goals.fosterInnovation.description"),
      icon: <FaCogs {...goalsStyles} />,
    },
    {
      title: t("thirdSection.goals.supportEconomicDiversification.title"),
      description: t(
        "thirdSection.goals.supportEconomicDiversification.description"
      ),
      icon: <FaChartLine {...goalsStyles} />,
    },
    {
      title: t("thirdSection.goals.empowerCommunities.title"),
      description: t("thirdSection.goals.empowerCommunities.description"),
      icon: <FaPeopleCarry {...goalsStyles} />,
    },
  ];

  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      sx={{
        backgroundImage: `url(${backgroundtwo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
      }}
      id="goals"
    >
      <Stack
        sx={{
          paddingY: {
            xs: "65%",
            semiSm: "45%",
            semiMd: "30%",
            md: "30%",
            lg: "20%",
            xl: "15%",
          },
          width: "90%",
          margin: "auto",
          padding: "1rem",
        }}
        alignItems={"flex-start"}
        textAlign={"center"}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: "1rem" }}
          color={"primary.light"}
        >
          {t("thirdSection.goalsTitle")}
        </Typography>
        <Grid xs={12} container>
          {goals.map((goal) => (
            <GoalCard
              description={goal.description}
              title={goal.title}
              icon={goal.icon}
            />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default ThirdSection;
