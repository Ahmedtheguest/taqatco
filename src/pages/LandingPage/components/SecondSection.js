import React, { useEffect, useRef, useState } from "react";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import forest from "../../../shared/assets/images/forest.jpg";
import { useTheme } from "@emotion/react";
import ValueCard from "../../../components/ValueCard";
import {
  FaLeaf,
  FaRocket,
  FaHandsHelping,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SecondSection = ({ targetRef }) => {
  //SECTION - general
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();
  const overlayRef = useRef(null);

  //SECTION - useState
  const [containerHeight, setContainerHeight] = useState("60vh"); // Default value

  //SECTION - functions
  const updateContainerHeight = () => {
    if (overlayRef.current) {
      const overlayHeight = overlayRef.current.offsetHeight;
      // Calculate the container height to be 80% of overlay height
      if (isMdUp) {
        setContainerHeight(`${overlayHeight * 0.83}px`);
      } else {
        setContainerHeight(`${overlayHeight * 0.9}px`);
      }
    }
  };

  //SECTION - useEffect
  useEffect(() => {
    // Initial height calculation
    updateContainerHeight();

    // Add resize event listener
    window.addEventListener("resize", updateContainerHeight);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  //SECTION - values
  const valuesStyles = {
    size: 24,
    color: theme.palette.tertiary.light,
  };
  const values = [
    {
      title: t("secondSection.values.sustainability.title"),
      description: t("secondSection.values.sustainability.description"),
      icon: <FaLeaf {...valuesStyles} />,
    },
    {
      title: t("secondSection.values.innovation.title"),
      description: t("secondSection.values.innovation.description"),
      icon: <FaRocket {...valuesStyles} />,
    },
    {
      title: t("secondSection.values.collaboration.title"),
      description: t("secondSection.values.collaboration.description"),
      icon: <FaHandsHelping {...valuesStyles} />,
    },
    {
      title: t("secondSection.values.integrity.title"),
      description: t("secondSection.values.integrity.description"),
      icon: <FaShieldAlt size={24} {...valuesStyles} />,
    },
    {
      title: t("secondSection.values.responsibility.title"),
      description: t("secondSection.values.responsibility.description"),
      icon: <FaGlobe size={24} {...valuesStyles} />,
    },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      ref={targetRef}
      sx={{
        position: "relative",
        height: containerHeight,
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Stack
        ref={overlayRef}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: { xs: "-5%", md: "-10%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "auto",
          backgroundColor: "transparent",
          zIndex: 1,
          padding: { xs: "0.25rem", md: "1rem" },
          borderRadius: "15px",
        }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{
            flex: 1,
            backgroundColor: "primary.light",
            width: "100%",
            padding: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
          gap={"2rem"}
        >
          <Stack
            sx={{ flex: 1 }}
            justifyContent={"center"}
            textAlign={"start"}
            gap={"1rem"}
            id="about-us"
          >
            <Typography color={"tertiary.main"} variant="h5">
              {t("secondSection.aboutUs.title")}
            </Typography>
            <Typography color={"tertiary.light"} variant="body2">
              {t("secondSection.aboutUs.description1")}
            </Typography>
            <Typography color={"tertiary.light"} variant="body2">
              {t("secondSection.aboutUs.description2")}
            </Typography>
            <Typography color={"tertiary.light"} variant="body2">
              {t("secondSection.aboutUs.description3")}
            </Typography>
          </Stack>
          <Stack
            sx={{
              flex: 1,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
            }} // Ensure image stretches to the same height
          >
            <img
              src={forest}
              alt="forest"
              style={{
                borderRadius: "12px",
                height: "100%", // Make the image height stretch to the flex container's height
                width: "100%",
                maxHeight: "400px", // Set a maximum height for the image
                minHeight: "250px",
                objectFit: "cover", // Ensure the image covers the space without distortion
              }}
            />
          </Stack>
        </Stack>
        <Stack
          sx={{
            flex: 1,
            backgroundColor: "secondary.main",
            width: "100%",
            padding: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              borderRadius: "12px",
              flex: 1,
              backgroundColor: "secondary.light",
              padding: { xs: "1rem", md: "2rem" },
            }}
            direction={{ xs: "column", md: "row" }}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={{ xs: "0.5rem", md: "3rem" }}
          >
            <Stack
              direction={"column"}
              gap={"1rem"}
              textAlign={"start"}
              id="vision-mission"
            >
              <Typography variant="h6" color={"primary.light"}>
                {t("secondSection.missionVision.missionTitle")}
              </Typography>
              <Typography variant="body2" color={"primary.light"}>
                {t("secondSection.missionVision.missionDescription")}
              </Typography>
            </Stack>
            <Divider
              orientation={isMdUp ? "vertical" : "horizontal"}
              sx={{
                my: 2,
                mx: { xs: 0, md: 2 },
                borderColor: "white",
                borderWidth: "1px", // Adjust border width for better visibility
                height: isMdUp ? "150px" : "1px", // Set height for horizontal divider
                width: isMdUp ? "1px" : "100%", // Set width for vertical divider
              }}
            />
            <Stack direction={"column"} gap={"1rem"} textAlign={"start"}>
              <Typography variant="h6" color={"primary.light"}>
                {t("secondSection.missionVision.visionTitle")}
              </Typography>
              <Typography variant="body2" color={"primary.light"}>
                {t("secondSection.missionVision.visionDescription")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{
            flex: 1,
            backgroundColor: "primary.light",
            width: "100%",
            padding: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            flexWrap: "nowrap",
          }}
        >
          <Typography variant="h6" color={"tertiary.main"} id="values">
            {t("secondSection.values.title")}
          </Typography>
          <Grid xs={12} container>
            {values.map((value) => (
              <ValueCard
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SecondSection;
