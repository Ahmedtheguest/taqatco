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
import { useTheme } from "@emotion/react";
import osama from "../../../shared/assets/images/osama.jpg";
import ahmed from "../../../shared/assets/images/ahmed.jpg";
import jasem from "../../../shared/assets/images/jasem.jpg";
import waleed from "../../../shared/assets/images/waleed.jpg";
import MemberCard from "../../../components/MemberCard";
import Grid from "@mui/material/Grid";

const FifthSection = () => {
  const theme = useTheme();

  const servicesStyles = {
    color: theme.palette.primary.light,
    size: 30,
  };

  const founders = [
    {
      name: "Osama Alharbi",
      photo: osama,
      link: "https://www.linkedin.com/in/osama-alharbi-1b3a961ba/",
    },
    {
      name: "Ahmed Aldhaif",
      photo: ahmed,
      link: "https://www.linkedin.com/in/ahmed-aldhaif-75360a262/",
    },
    {
      name: "Jasem Alyousef",
      photo: jasem,
      link: "https://www.linkedin.com/in/jasem-al-yousef-626473252/",
    },
    {
      name: "Waleed Alghamdi",
      photo: waleed,
      link: "https://www.linkedin.com/in/waleed-alghamdi",
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
        <Grid
          direction={{ xs: "column", md: "row" }}
          container
          spacing={"1rem"}
        >
          {founders.map((founder) => (
            <MemberCard
              name={founder.name}
              photo={founder.photo}
              link={founder.link}
            />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default FifthSection;
