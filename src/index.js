//SECTION - GENERAL
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//SECTION - STYLING
import { CssBaseline, ThemeProvider } from "@mui/material";
import MUITheme from "./shared/materiulUI/MUITheme";

//SECTION I18N
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

//SECTION REACT-ROUTER
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={MUITheme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
