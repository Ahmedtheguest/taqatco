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
const Home = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      direction="column"
      gap={"2rem"}
      sx={{ backgroundColor: "primary.main" }}
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Stack>
  );
};

export default Home;
