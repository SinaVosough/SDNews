import React from "react";
// import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Swiper from 'swiper';
import "swiper/css";
// import Navbar from "./pages/home_page/components/navbar";
// import Slider from "./components/slider";
import NewsPic from "./components/newsPic";
// import Footer from "./pages/home_page/components/footer";
import FirstRow from "./components/FirstRow";


function HomePage() {
    return (
        <>
            <section className="container d-flex col-lg-12">
                <FirstRow/>
            </section>
            <NewsPic/>
        </>
    );
}

export default HomePage;
