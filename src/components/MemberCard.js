import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Grid from "@mui/material/Grid";

const MemberCard = ({ name, photo, link }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} xl={3}>
      <Stack
        sx={{
          width: "100%",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {/* First Box */}
        <Stack
          sx={{
            backgroundColor: theme.palette.primary.dark,
            height: "150px",
            position: "relative",
          }}
        >
          {/* Image Overlapping both boxes */}
          <Stack
            sx={{
              position: "absolute",
              left: "50%",
              top: "120%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              border: `2px solid ${theme.palette.tertiary.main}`,
              borderRadius: "10px",
            }}
          >
            <img
              src={photo}
              alt={name}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover", // Ensure image fills the container while maintaining aspect ratio
                borderRadius: "10px",
              }}
            />
          </Stack>
        </Stack>

        {/* Second Box */}
        <Stack
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: "340px",
            paddingTop: "130px", // To account for the image overlap
            paddingLeft: "1rem",
            paddingRight: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            color={theme.palette.tertiary.main}
            sx={{
              transition: "color 0.3s ease",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            {name}
          </Typography>
          <FaLinkedin
            size={28}
            color={theme.palette.tertiary.main}
            style={{ cursor: "pointer", marginTop: "0.5rem" }}
            onClick={() => window.open(link, "_blank")}
            className="linkedin-icon"
          />
        </Stack>
      </Stack>

      {/* Inline styles for hover effect on the LinkedIn icon */}
      <style jsx>{`
        .linkedin-icon:hover {
          color: ${theme.palette.secondary.main};
          transform: scale(1.1);
          transition: transform 0.3s ease, color 0.3s ease;
        }
      `}</style>
    </Grid>
  );
};

export default MemberCard;
