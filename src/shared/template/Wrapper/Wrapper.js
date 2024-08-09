import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Wrapper = ({ component }) => {
  //SECTION - useState
  const [navbarColorChange, setNavbarColorChange] = useState(false);

  //SECTION - functions
  const handleNavbarColorChange = (isOverTarget) => {
    setNavbarColorChange(isOverTarget);
  };

  const componentWithProps = React.cloneElement(component, {
    onNavbarColorChange: handleNavbarColorChange,
  });

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar colorChange={navbarColorChange} />
      <Box width={"100%"} flexGrow={1}>
        {componentWithProps}
      </Box>
      <Footer />
    </Box>
  );
};

export default Wrapper;
