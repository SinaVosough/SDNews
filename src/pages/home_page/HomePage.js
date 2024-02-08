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
import {useState, useEffect} from "react";
import axios from 'axios';

function HomePage() {

    const [data, setData] = useState("");
    useEffect(() => {

        axios.get('https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464&from=2024-02-07').then((res) => {
            // const allSlides = res.data;
            // console.log(res.data);
            const news = res.data.articles.slice(0, 3);
            setData({"news": news})
            console.log(news);


            setData(previousState => {
                return {...previousState, color: "blue"}
            })
            console.log(data)


        });

        //Runs only on the first render
    }, []);

    axios.get('https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464&from=2024-02-07').then((res) => {
            // const allSlides = res.data;
            // console.log(res.data);
            const news = res.data.articles.slice(0, 3);
            setData({"news": news})
            console.log(news);


            setData(previousState => {
                return {...previousState, color: "blue"}
            })
            console.log(data)


        });

        //Runs only on the first render
    }, []);


    return (
        <>
            <section className="container d-flex col-lg-12">
                <FirstRow/>
            </section>
            <NewsPic mhs={data.news} test="test"/>

        </>

    );
}

export default HomePage;
