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

const ThirdSection = () => {
  const goalsStyles = {
    color: "primary.light",
    size: 24,
  };
  const goals = [
    {
      title: "Enhance Environmental Sustainability",
      description:
        "Lead waste recycling initiatives to support Saudi Arabia's environmental goals.",
      icon: <FaRecycle {...goalsStyles} />,
    },
    {
      title: "Reduce Carbon Footprint",
      description:
        "Drive efforts toward achieving zero carbon emissions by 2060.",
      icon: <FaTree {...goalsStyles} />,
    },
    {
      title: "Promote Circular Economy",
      description:
        "Transform waste into valuable resources to reduce landfill dependence.",
      icon: <FaRedo {...goalsStyles} />,
    },
    {
      title: "Foster Innovation",
      description:
        "Develop cutting-edge recycling technologies aligned with global standards.",
      icon: <FaCogs {...goalsStyles} />,
    },
    {
      title: "Support Economic Diversification",
      description:
        "Contribute to the growth of the green economy in Saudi Arabia.",
      icon: <FaChartLine {...goalsStyles} />,
    },
    {
      title: "Empower Communities",
      description:
        "Create sustainable job opportunities and raise environmental awareness.",
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
          Our Goals Align with Vision 2030!
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
