import {
  Stack,
  Typography,
  Box,
  hexToRgb,
  Divider,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import backgroundone from "../../shared/assets/images/backgroundone.jpg";
import backgroundtwo from "../../shared/assets/images/backgroundtwo.jpg";
import forest from "../../shared/assets/images/forest.jpg";
import { useTheme } from "@emotion/react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
const Home = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack direction="column" sx={{ backgroundColor: "primary.main" }}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Stack>
  );
};

export default Home;
