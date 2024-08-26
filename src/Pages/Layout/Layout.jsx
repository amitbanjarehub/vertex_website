// Layout.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section1 from "../Section/Section1/Section1";
import Section2 from "../Section/Section2/Section2";
import Section3 from "../Section/Section3/Section3";
import Section4 from "../Section/Section4.jsx/Section4";
import CustomCard from "../Section/Section7/Section7";
import Section8 from "../Section/Section8/Section8";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Section1 />
        {/* <Section2 /> */}
        {/* <Section3 /> */}
         <Section4 />
         {/* <CustomCard /> */}
         <Section8 />
      </main>
      <Footer />
    </>
  );
};

export default Layout;