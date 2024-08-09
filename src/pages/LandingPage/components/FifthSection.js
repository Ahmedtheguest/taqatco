import { Grid, Stack, Typography } from "@mui/material";
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

const FifthSection = () => {
  const theme = useTheme();

  const servicesStyles = {
    color: theme.palette.primary.light,
    size: 30,
  };

  const services = [
    {
      title: "Municipal Solid Waste Recycling",
      description:
        "Advanced processes to convert waste into valuable resources, reducing landfill usage.",
      icon: <FaTrashAlt {...servicesStyles} />,
    },
    {
      title: "Metal and Scrap Recycling",
      description:
        "Specialized recycling of various scrap materials, including metals, to promote resource recovery and sustainability.",
      icon: <FaIndustry {...servicesStyles} />,
    },
    {
      title: "Biogas Production",
      description:
        "Generation of renewable energy from organic waste through anaerobic digestion.",
      icon: <FaLeaf {...servicesStyles} />,
    },
    {
      title: "Organic Fertilizer Production",
      description:
        "Conversion of waste into high-quality organic fertilizers for agricultural use.",
      icon: <FaSeedling {...servicesStyles} />,
    },
    {
      title: "Environmental Consulting",
      description:
        "Expert guidance on sustainable waste management practices and regulatory compliance.",
      icon: <FaClipboardCheck {...servicesStyles} />,
    },
    {
      title: "Waste Management Solutions",
      description:
        "Tailored solutions for businesses and municipalities to manage and reduce waste effectively.",
      icon: <FaTruck {...servicesStyles} />,
    },
  ];
  return (
    <Stack
      sx={{
        paddingY: "2rem",
        backgroundColor: "primary.light",
      }}
    >
      <Stack
        sx={{
          width: "90%",
          margin: "auto",
          padding: "1rem",
          borderRadius: "12px",
        }}
        gap={"2rem"}
      >
        <Typography color={"tertiary.main"} variant="h5">
          Our Team
        </Typography>
        <Grid direction={{ xs: "column", md: "row" }} container xs={12}>
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

export default FifthSection;
