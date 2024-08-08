import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      semiSm: 425,
      sm: 600,
      semiMd: 700,
      md: 900,
      semiLg: 1024,
      lg: 1200,
      xl: 1536,
      xxl: 1750,
      fourK: 2560,
    },
  },
  palette: {
    primary: {
      dark: "#C6DDDF",
      main: "#DEEBEC",
      light: "#F6FEFF",
    },
    secondary: {
      dark: "#7473B6",
      main: "#7473B6",
      light: "#6E6DAD",
    },
    tertiary: {
      main: "#101828",
    },
    gray: {
      g25: "#F9FAFF",
      g50: "#F9FAFB",
      g75: "#F4F5FA",
      g100: "#F2F4F7",
      light: "#4A6FA8",
      main: "#B7BECE",
      dark: "#6C737B",
      g200: "#EAECF0",
      g400: "#98A2B3",
      g500: "#667085",
      g600: "#475467",
    },
    green: {
      primary: "#00A886",
    },
  },
  typography: {
    fontFamily: "Signika, Roboto,  Arial, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default responsiveFontSizes(theme);
