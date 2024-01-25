import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Navbar from "./pages/home_page/components/navbar";
import Slider from "./pages/home_page/components/slider";
import Pic from "./pages/home_page/components/newsPic";
import Footer from "./pages/home_page/components/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Slider/>
    <Pic/>
    <Footer/>
  </React.StrictMode>
);