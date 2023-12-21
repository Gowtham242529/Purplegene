import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import { BrowserRouter } from "react-router-dom";
import E3Arena from "./pages/E3Arena";
import Campus from './pages/Campus'
import Courses from "./pages/Courses";
import Footer from "./pages/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Enroll />
        <Courses/>
        <E3Arena/>
        <Campus/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
