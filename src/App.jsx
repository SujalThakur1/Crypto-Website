import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Coin from "./Pages/Coin/Coin";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.css";


export default function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id"  element={<Coin/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
