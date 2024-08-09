import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Grid from "@mui/material/Grid";

const MemberCard = ({ name, photo, link }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} semiMd={6} xxl={3}>
      <Stack
        direction={"column"}
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "15px",
          width: "100%",
        }}
        alignItems={"center"}
        padding={"1rem"}
        gap={"1rem"}
      >
        <Stack sx={{ height: "260px", width: "260px" }}>
          <img
            src={photo}
            alt={name}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              objectFit: "fill",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          gap={"0.5rem"}
        >
          <Typography variant="h5" color={"tertiary.main"}>
            {name}
          </Typography>
          <FaLinkedin
            size={28}
            color={theme.palette.tertiary.main}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(link)}
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default MemberCard;
