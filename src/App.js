import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Profile from "./Components/Profile";
import Link from "./Components/Link";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Languages from "./Components/Languages";
import Courses from "./Components/Courses";
import Hobbies from "./Components/Hobbies";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";

function App() {
  const [themeOwn, setThemeOwn] = useState(true);

  const handleChangeTheme = () =>
    themeOwn ? setThemeOwn(false) : setThemeOwn(true);

  useEffect(() => {
    if (!themeOwn) {
      document.documentElement.style.background = "black";
      document.documentElement.style.color = "white";
    } else {
      document.documentElement.style.background = "white";
      document.documentElement.style.color = "black";
    }
  }, [themeOwn]);

  return (
    <>
      <Header themeOwn={themeOwn} onHandleChangeOwn={handleChangeTheme} />
      <main className="main">
        <Details themeOwn={themeOwn} />
        <Profile themeOwn={themeOwn} />
        <Portfolio />
        <Link themeOwn={themeOwn} />
        <Employment themeOwn={themeOwn} />
        <Education themeOwn={themeOwn} />
        <Skills themeOwn={themeOwn} />
        <Languages themeOwn={themeOwn} />
        <Courses themeOwn={themeOwn} />
        <Hobbies themeOwn={themeOwn} />
      </main>
      <Footer themeOwn={themeOwn} />
    </>
  );
}

export default App;
