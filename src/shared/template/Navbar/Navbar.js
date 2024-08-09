import { useTheme } from "@emotion/react";
import { Divider, Stack, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import logoTransparent from "../../assets/images/logoTransparent.png";

const sections = [
  { id: "home", name: "Home" },
  { id: "about-us", name: "About Us" },
  { id: "vision-mission", name: "Vision and Mission" },
  { id: "values", name: "Values" },
  { id: "goals", name: "Goals" },
  { id: "services", name: "Services" },
  { id: "team", name: "Team" },
];

const Navbar = ({ colorChange }) => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const textStyles = {
    cursor: "pointer",
    color: colorChange
      ? theme.palette.tertiary.main
      : theme.palette.primary.light,
    "&:hover": {
      color: colorChange ? theme.palette.gray.main : theme.palette.primary.main,
      transition: "color 0.3s ease", // Smooth transition for hover effect
    },
  };

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

  const renderMenuItems = () => (
    <>
      {sections.map((section) => (
        <Typography
          key={section.id}
          sx={textStyles}
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
          borderColor: colorChange
            ? theme.palette.tertiary.main
            : theme.palette.primary.light,
        }}
      />
      <Typography sx={textStyles} variant="h6">
        Arabic
      </Typography>
    </>
  );

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY;
      console.log("Current scroll position:", scrollPosition);

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
  }, []);

  return (
    <>
      {isMobile ? (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          bgcolor={colorChange ? "primary.light" : "transparent"}
          sx={{
            position: "fixed",
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
              marginLeft: "8%",
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
            </IconButton>{" "}
          </Stack>{" "}
          <Stack sx={{ height: "100px", marginRight: "8%" }}>
            <img
              src={logoTransparent}
              alt="logo"
              style={{ objectFit: "fill", width: "100%", height: "100%" }}
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
            spacing={2}
            sx={{
              marginLeft: "5%",
              borderRadius: "100em",
              border: `1px solid ${theme.palette.tertiary.main}`,
              padding: ".7em 1.389em",
              height: "fit-content",
            }}
          >
            {renderMenuItems()}
          </Stack>
          <Stack sx={{ height: "100px" }}>
            <img
              src={logoTransparent}
              alt="logo"
              style={{ objectFit: "fill", width: "100%", height: "100%" }}
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
            spacing={2}
          >
            {renderMenuItems()}
          </Stack>{" "}
          <Stack sx={{ height: "100px" }}>
            <img
              src={logoTransparent}
              alt="logo"
              style={{ objectFit: "fill", width: "100%", height: "100%" }}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Navbar;
