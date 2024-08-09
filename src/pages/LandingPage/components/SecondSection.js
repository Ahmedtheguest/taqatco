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

const SecondSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // Refs to get heights
  const overlayRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("60vh"); // Default value

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
  const valuesStyles = {
    size: 24,
    color: theme.palette.tertiary.light,
  };
  const values = [
    {
      title: "Sustainability",
      description:
        "We are committed to promoting sustainable practices that protect and preserve our environment for future generations.",
      icon: <FaLeaf {...valuesStyles} />,
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation to drive advancements in waste management and circular economy practices.",
      icon: <FaRocket {...valuesStyles} />,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of partnerships with the community, industry, and government to achieve our goals.",
      icon: <FaHandsHelping {...valuesStyles} />,
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our operations and interactions.",
      icon: <FaShieldAlt size={24} {...valuesStyles} />,
    },
    {
      title: "Responsibility",
      description:
        "We take responsibility for the impact of our actions on society and the environment, striving to create positive change.",
      icon: <FaGlobe size={24} {...valuesStyles} />,
    },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "relative",
        height: containerHeight,
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        padding: { xs: "0.5rem", md: "1rem", lg: "2rem" },
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
          padding: "1rem",
          borderRadius: "15px",
        }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{
            flex: 1,
            backgroundColor: "primary.light",
            width: "100%",
            padding: { xs: "2rem", md: "3rem" },
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
          >
            <Typography color={"tertiary.main"} variant="h5">
              About us
            </Typography>
            <Typography color={"tertiary.light"} variant="body2">
              TAQATCO is a leading innovator in sustainable waste management,
              committed to transforming waste into valuable resources. Our
              mission is to drive Saudi Arabia's journey towards zero carbon
              emissions by 2060, aligning with the "Green Saudi Initiative."
            </Typography>
            <Typography color={"tertiary.light"} variant="body2">
              Specializing in municipal solid waste recycling, we convert waste
              into biogas and organic fertilizers, reducing reliance on
              landfills and promoting a circular economy. Our processes adhere
              to internationally recognized standards, ensuring safety,
              efficiency, and environmental protection.
            </Typography>
            <Typography color={"tertiary.light"} variant="body2">
              At TAQATCO, we are dedicated to creating a cleaner, greener future
              for Saudi Arabia, turning waste into wealth and contributing to a
              sustainable society.
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
            padding: { xs: "2rem", md: "3rem" },
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
            <Stack direction={"column"} gap={"1rem"} textAlign={"start"}>
              <Typography variant="h6" color={"primary.light"}>
                Our Mission
              </Typography>
              <Typography variant="body2" color={"primary.light"}>
                To provide innovative and environmentally safe waste recycling
                solutions that reduce carbon emissions, protect natural
                resources, and support the "Green Saudi Initiative," all while
                delivering economic value and promoting sustainability across
                the Kingdom.
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
                Our Vision
              </Typography>
              <Typography variant="body2" color={"primary.light"}>
                To be the leading force in sustainable waste management,
                transforming waste into valuable resources, and driving Saudi
                Arabia's journey towards a zero-carbon future, while
                contributing to a thriving circular economy.
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
            padding: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            flexWrap: "nowrap",
          }}
        >
          <Typography variant="h6" color={"tertiary.main"}>
            Our Values
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
