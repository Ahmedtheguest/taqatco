import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import osama from "../../../shared/assets/images/osama.jpg";
import ahmed from "../../../shared/assets/images/ahmed.jpg";
import jasem from "../../../shared/assets/images/jasem.jpg";
import waleed from "../../../shared/assets/images/waleed.jpg";
import MemberCard from "../../../components/MemberCard";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";

const FifthSection = () => {
  const { t } = useTranslation();

  const founders = [
    {
      name: t("fifthSection.teamMembers.0.name"),
      photo: osama,
      link: t("fifthSection.teamMembers.0.link"),
    },
    {
      name: t("fifthSection.teamMembers.1.name"),
      photo: ahmed,
      link: t("fifthSection.teamMembers.1.link"),
    },
    {
      name: t("fifthSection.teamMembers.2.name"),
      photo: jasem,
      link: t("fifthSection.teamMembers.2.link"),
    },
    {
      name: t("fifthSection.teamMembers.3.name"),
      photo: waleed,
      link: t("fifthSection.teamMembers.3.link"),
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
        id="team"
      >
        <Typography color={"tertiary.main"} variant="h5">
          {t("fifthSection.teamTitle")}
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
