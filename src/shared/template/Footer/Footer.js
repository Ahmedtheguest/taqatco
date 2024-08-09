import {
  Stack,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import logoTransparent from "../../assets/images/logoTransparent.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const sections = [
  { id: "home", name: "Home" },
  { id: "about-us", name: "About Us" },
  { id: "vision-mission", name: "Vision and Mission" },
  { id: "values", name: "Values" },
  { id: "goals", name: "Goals" },
  { id: "services", name: "Services" },
  { id: "team", name: "Team" },
];

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.1; // 10% of the viewport height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - 150;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack
      component="footer"
      sx={{
        backgroundColor: theme.palette.green.main,
        color: theme.palette.common.white,
        padding: "2rem",
        flexWrap: "wrap", // Ensures wrapping on small screens
      }}
      spacing={4}
    >
      <Stack
        direction={{ xs: "column", md: "row", width: "90%" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        sx={{ flexWrap: "wrap" }} // Wrap items on small screens
      >
        {isMobile && (
          <Box
            sx={{
              height: "100px",
              "&:hover": { cursor: "pointer" }, // Change cursor on hover
              marginTop: { xs: "1rem", sm: "0" }, // Add margin for better spacing on mobile
              display: "flex",
              justifyContent: "center", // Center the logo on mobile
            }}
            onClick={() => handleScroll("home")} // Navigate to "Home" on click
          >
            <img
              src={logoTransparent}
              alt="logo"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        )}{" "}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: "wrap", // Wrap items in this section
            justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile
          }}
        >
          {sections.map((section) => (
            <Typography
              key={section.id}
              onClick={() => handleScroll(section.id)}
              sx={{
                cursor: "pointer",
                color: theme.palette.common.white,
                "&:hover": {
                  color: theme.palette.primary.dark,
                  transition: "color 0.3s ease",
                },
                textAlign: { xs: "center", sm: "left" }, // Center text on mobile
                marginBottom: { xs: "0.5rem", sm: "0" }, // Add margin for better spacing on mobile
              }}
              variant="body1"
            >
              {section.name}
            </Typography>
          ))}
        </Stack>
        {!isMobile && (
          <Box
            sx={{
              height: "100px",
              "&:hover": { cursor: "pointer" }, // Change cursor on hover
              marginTop: { xs: "1rem", sm: "0" }, // Add margin for better spacing on mobile
              display: "flex",
              justifyContent: "center", // Center the logo on mobile
            }}
            onClick={() => handleScroll("home")} // Navigate to "Home" on click
          >
            <img
              src={logoTransparent}
              alt="logo"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        )}
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ flexWrap: "wrap" }} // Wrap items on small screens
      >
        <IconButton
          sx={{
            color: theme.palette.common.white,
            "&:hover": {
              color: theme.palette.primary.light,
              transition: "color 0.3s ease",
            },
          }}
          href=""
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.common.white,
            "&:hover": {
              color: theme.palette.primary.light,
              transition: "color 0.3s ease",
            },
          }}
          href=""
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.common.white,
            "&:hover": {
              color: theme.palette.primary.light,
              transition: "color 0.3s ease",
            },
          }}
          href=""
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          color: theme.palette.common.white,
        }}
      >
        &copy; {new Date().getFullYear()} Taqatco. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
