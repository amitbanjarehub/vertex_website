// Layout.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section1 from "../Section/Section1/Section1";
import Section2 from "../Section/Section2/Section2";
import Section3 from "../Section/Section3/Section3";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </>
  );
};

export default Layout;