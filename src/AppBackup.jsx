import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Layout from "./Pages/Layout/Layout";
import FirstComponent from "./Pages/FirstComponent/FirstComponent";
import Section1 from "./Pages/Section/Section1/Section1";
import Section2 from "./Pages/Section/Section2/Section2";
import Section3 from "./Pages/Section/Section3/Section3";
import Section4 from "./Pages/Section/Section4.jsx/Section4";
import OverlappingCards12 from "./Pages/Section/overlapingCard/overlapingCards";
import OverlappingCards from "./Pages/Section/section5/Section5";
import SectionTest from "./Pages/Section/SectionTest.jsx/SectionTest";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Section1 />
     
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      {/* <OverlappingCards12 /> */}
      {/* <OverlappingCards /> */}

      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes> */}

      <Footer />
    </BrowserRouter>
  );
};

export default App;
