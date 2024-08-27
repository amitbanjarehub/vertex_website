import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import LoginCard from "./Pages/Login/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
