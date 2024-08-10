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
import { useTranslation } from "react-i18next";

const Footer = () => {
  //SECTION - general
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  //SECTION - functions
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
        paddingX: "5%",
        paddingY: "1rem",
        flexWrap: "wrap", // Ensures wrapping on small screens
      }}
      spacing={4}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
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
        )}
        <Stack
          direction="row"
          gap={2}
          sx={{
            flexWrap: "wrap", // Wrap items in this section
            justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile
          }}
        >
          {t("footer.sections", { returnObjects: true }).map((section) => (
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
        gap={2}
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
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </Typography>
    </Stack>
  );
};

export default Footer;
