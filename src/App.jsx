import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />{" "}
        <Route path="/aboutus" element={<AboutUs />} />{" "}
        <Route path="/services" element={<Home />} />{" "}
        <Route path="/portfolio" element={<Portfolio />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
