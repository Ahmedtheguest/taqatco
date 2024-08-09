import { Stack, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";

const Home = ({ onNavbarColorChange }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const targetRef = useRef(null);

  const [isNavbarOverTarget, setIsNavbarOverTarget] = useState(false);

  const handleScroll = () => {
    // Assuming a fixed navbar height of 64 pixels.
    const navbarHeight = 64;

    // Calculate the bottom position of the target element relative to the viewport.
    const targetBottom =
      targetRef.current.getBoundingClientRect().top + window.scrollY;

    // Determine the current scroll position plus the height of the navbar.
    const scrollPosition = window.scrollY + navbarHeight;

    // Update the state based on whether the navbar has scrolled past the bottom of the target element.
    setIsNavbarOverTarget(scrollPosition > targetBottom);
  };

  //SECTION - useEffect
  useEffect(() => {
    // Attach a scroll event listener to the window when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Trigger a callback function whenever the `isNavbarOverTarget` state changes.
    // This is used to inform the parent component about the change in scroll position.
    onNavbarColorChange(isNavbarOverTarget);
  }, [isNavbarOverTarget, onNavbarColorChange]);

  return (
    <Stack direction="column" sx={{ backgroundColor: "primary.main" }}>
      <FirstSection />
      <SecondSection targetRef={targetRef} />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Stack>
  );
};

export default Home;
