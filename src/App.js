//SECTION - Routing
import { Route, Routes } from "react-router-dom";
import Wrapper from "./shared/template/Wrapper/Wrapper";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  //SECTION - Translation related
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  //SECTION - useEffect
  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      localStorage.setItem("i18nextLng", "ar");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper component={<p>test</p>} />}></Route>
      </Routes>
    </>
  );
}

export default App;
