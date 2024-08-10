import { useTheme } from "@emotion/react";
import { Divider, Stack, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import logoTransparent from "../../assets/images/logoTransparent.png";
import { useTranslation } from "react-i18next";

const Navbar = ({ colorChange }) => {
  //SECTION - general
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  //SECTION - useState
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //SECTION - styles
  const textStyles = (colorChange) => ({
    cursor: "pointer",
    color: colorChange
      ? !isMobile
        ? theme.palette.tertiary.main
        : theme.palette.primary.light
      : theme.palette.primary.light,
    transition: "color 0.3s ease", // Smooth transition for hover effect
    "&:hover": {
      color: colorChange ? theme.palette.gray.main : theme.palette.primary.main,
      transition: "color 0.3s ease", // Smooth transition for hover effect
    },
  });

  //SECTION - functions
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.1; // 10% of the viewport height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      if (isMobile) {
        setIsDrawerOpen(false); // Close drawer after selecting a menu item
      }
    }
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogoClick = () => {
    handleScroll("home");
  };

  const renderMenuItems = () => {
    const sections = t("navbar.sections", { returnObjects: true });

    return (
      <>
        {sections.map((section) => (
          <Typography
            key={section.id}
            sx={textStyles(colorChange)}
            variant="h6"
            onClick={() => handleScroll(section.id)}
          >
            {section.name}
          </Typography>
        ))}
        <Divider
          orientation={isMobile ? "horizontal" : "vertical"}
          flexItem
          sx={{
            color: colorChange
              ? !isMobile
                ? theme.palette.tertiary.main
                : theme.palette.primary.light
              : theme.palette.primary.light,
          }}
        />
        <Typography
          sx={textStyles(colorChange)}
          variant="h6"
          onClick={() =>
            handleLanguageChange(i18n.language === "en" ? "ar" : "en")
          }
        >
          {t("navbar.language")}
        </Typography>
      </>
    );
  };

  //SECTION - useEffect
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY;
      console.log("Current scroll position:", scrollPosition);

      const sections = t("navbar.sections", { returnObjects: true });
      let currentSection = "None";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section.name;
          }
        }
      });

      console.log("Current section:", currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [t]);

  return (
    <>
      {isMobile ? (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          bgcolor={colorChange ? "primary.light" : "transparent"}
          sx={{
            position: colorChange ? "fixed" : "absolute",
            top: "0rem",
            left: "0rem",
            width: "100%",
            zIndex: 1000,
          }}
        >
          <Stack
            sx={{
              borderRadius: "50%",
              border: colorChange
                ? `1px solid ${theme.palette.tertiary.main}`
                : "auto",
              margin: "3%",
              marginLeft: i18n.language === "en" ? "8%" : "auto",
              marginRight: i18n.language === "ar" ? "8%" : "auto",
            }}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <IconButton onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon
                sx={{
                  color: colorChange
                    ? theme.palette.tertiary.main
                    : theme.palette.primary.light,
                }}
              />
            </IconButton>
          </Stack>
          <Stack
            sx={{
              height: "100px",
              marginRight: i18n.language === "en" ? "8%" : "auto",
              marginLeft: i18n.language === "ar" ? "8%" : "auto",
            }}
          >
            <img
              src={logoTransparent}
              alt="logo"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={handleLogoClick}
            />
          </Stack>
          <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Stack
              direction="column"
              sx={{
                padding: "2rem",
                gap: "0.5rem",
                bgcolor: theme.palette.green.main,
              }}
            >
              {renderMenuItems()}
            </Stack>
          </Drawer>
        </Stack>
      ) : colorChange ? (
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            position: "fixed",
            width: "100%",
            backgroundColor: theme.palette.primary.light,
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <Stack
            alignItems={"center"}
            direction="row"
            gap={2}
            sx={{
              marginLeft: i18n.language === "en" ? "5%" : "auto",
              marginRight: i18n.language === "ar" ? "5%" : "auto",
              borderRadius: "100em",
              border: `1px solid ${theme.palette.tertiary.main}`,
              padding: ".7em 1.389em",
              height: "fit-content",
            }}
          >
            {renderMenuItems()}
          </Stack>
          <Stack
            sx={{
              height: "100px",
              marginRight: i18n.language === "en" ? "5%" : "auto",
              marginLeft: i18n.language === "ar" ? "5%" : "auto",
            }}
          >
            <img
              src={logoTransparent}
              alt="logo"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={handleLogoClick}
            />
          </Stack>
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          bgcolor={"transparent"}
          sx={{
            position: "absolute",
            top: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            zIndex: 1000,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              borderRadius: "100em",
              border: `1px solid ${
                colorChange
                  ? theme.palette.tertiary.main
                  : theme.palette.primary.light
              }`,
              padding: ".7em 1.389em",
              height: "fit-content",
            }}
            gap={2}
          >
            {renderMenuItems()}
          </Stack>
          <Stack sx={{ height: "100px" }}>
            <img
              src={logoTransparent}
              alt="logo"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={handleLogoClick}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Navbar;
