import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Wrapper = ({ component }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box width={"100%"} flexGrow={1}>
        {component}
      </Box>
      <Footer />
    </Box>
  );
};

export default Wrapper;
