import React from "react";
// import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
// import './index.sass';
// import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './main.css'
// import Login from './pages/login_page/LoginPage'
// import ProductPage from "./pages/product_page/ProductPage";
// import {Provider} from "react-redux";
// import configureStore from "./store/configureStore";
// import Layout from "./Layout";
import HomePage from "./pages/home_page/HomePage";
import Navbar from "./pages/component/navbar";
import Footer from "./pages/component/footer";
import Slider from "./pages/home_page/components/slider";
import DetailNews from "./pages/news_page/DetailNews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <React.StrictMode>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/detail/:detailnews" element={<DetailNews/>}/>
            </Routes>
            <Footer/>
        </React.StrictMode>
    </Router>
);
