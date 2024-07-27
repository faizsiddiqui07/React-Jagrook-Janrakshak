import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryNews from "./pages/news/category/page";
import Details from "./pages/news/slug/page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/category/:category" element={<CategoryNews/>} />
          <Route path="/news/:slug" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
