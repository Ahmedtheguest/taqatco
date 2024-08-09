//SECTION - Routing
import { Route, Routes } from "react-router-dom";
import Wrapper from "./shared/template/Wrapper/Wrapper";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Home from "./pages/LandingPage/Home";
function App() {
  //SECTION - Translation related
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  //SECTION - useEffect
  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      localStorage.setItem("i18nextLng", "en");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper component={<Home />} />}></Route>
      </Routes>
    </>
  );
}

export default App;
