import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Layout from "./Pages/Layout/Layout";
import FirstComponent from "./Pages/FirstComponent/FirstComponent";
import Section1 from "./Pages/Section/Section1/Section1";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Section1 />

      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes> */}

      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
