import React from "react";
// import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Swiper from 'swiper';
import "swiper/css";
// import Navbar from "./pages/home_page/components/navbar";
// import Slider from "./components/slider";
import NewsPic from "./components/NewsPic";
// import Footer from
// "./pages/home_page/components/footer";
import FirstRow from "./components/FirstRow";
import {useState, useEffect} from "react";
import axios from 'axios';
import Navbar from "../component/navbar";
import {Route} from "react-router-dom";
import DetailNews from "../news_page/DetailNews";

function HomePage() {

    const [data, setData] = useState("");
    useEffect(() => {

        axios.get('https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const topNews = res.data.articles.slice(7, 10);
            console.log(topNews);
            setData(prevoiusState => {
                return {...prevoiusState, "topNews": topNews}
            })
        })

        axios.get('https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const generalNews = res.data.articles.slice(3, 6);
            const generalNews1 = res.data.articles.slice(13, 16);
            const generalNews2 = res.data.articles.slice(17, 20);
            console.log(generalNews, "generalNews");
            setData(previousState => {
                return {
                    ...previousState,
                    "generalNews": generalNews,
                    "generalNews1": generalNews1,
                    "generalNews2": generalNews2
                }
            })
        });

        //Runs only on the first render
        axios.get('https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const sportNews = res.data.articles.slice(3, 6);
            const sportNews1 = res.data.articles.slice(13, 16);
            const sportNews2 = res.data.articles.slice(17, 20);
            console.log(sportNews);
            setData(previousState => {
                return {...previousState, "sportNews": sportNews, "sportNews1": sportNews1, "sportNews2": sportNews2}
            })
        });

        axios.get('https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const businessNews = res.data.articles.slice(3, 6);
            const businessNews1 = res.data.articles.slice(13, 16);
            const businessNews2 = res.data.articles.slice(17, 20);
            console.log(businessNews);
            setData(previousState => {
                return {
                    ...previousState,
                    "businessNews": businessNews,
                    "businessNews1": businessNews1,
                    "businessNews2": businessNews2
                }
            })
        });

        axios.get('https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const scienceNews = res.data.articles.slice(3, 6);
            const scienceNews1 = res.data.articles.slice(13, 16);
            const sceinceNews2 = res.data.articles.slice(17, 20);
            console.log(scienceNews);
            setData(previousState => {
                return {
                    ...previousState,
                    "scienceNews": scienceNews,
                    "scienceNews1": scienceNews1,
                    "scienceNews2": sceinceNews2
                }
            })
        });

        axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const entertainmentNews = res.data.articles.slice(3, 6);
            const entertainmentNews1 = res.data.articles.slice(13, 16);
            const entertainmentNews2 = res.data.articles.slice(17, 20);
            console.log(entertainmentNews);
            setData(previousState => {
                return {
                    ...previousState,
                    "entertainmentNews": entertainmentNews,
                    "entertainmentNews1": entertainmentNews1,
                    "entertainmentNews2": entertainmentNews2
                }
            })
        });

        axios.get('https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
                const technologyNews = res.data.articles.slice(3, 6);
                const technologyNews1 = res.data.articles.slice(13, 16);
                const technologyNews2 = res.data.articles.slice(17, 20);
                console.log(technologyNews);
                setData(previousState => {
                    return {
                        ...previousState,
                        "technologyNews": technologyNews,
                        "technologyNews1": technologyNews1,
                        "technologyNews2": technologyNews2
                    }
                })
            }
        );
    }, []);
    //Runs only on the first render

    return (
        <>
            <Navbar/>
            <section className="container d-flex col-lg-12">
                <FirstRow topNews={data.topNews}/>
            </section>
            <NewsPic generalNews={data.generalNews} generalNews1={data.generalNews1} generalNews2={data.generalNews2}
                     sportNews={data.sportNews} sportNews1={data.sportNews1} sportNews2={data.sportNews2}
                     businessNews={data.businessNews} businessNews1={data.businessNews1}
                     businessNews2={data.businessNews2}
                     scienceNews={data.scienceNews} scienceNews1={data.scienceNews1} scienceNews2={data.scienceNews2}
                     entertainmentNews={data.entertainmentNews} entertainmentNews1={data.entertainmentNews1}
                     entertainmentNews2={data.entertainmentNews2}
                     technologyNews={data.technologyNews} technologyNews1={data.technologyNews1}
                     technologyNews2={data.technologyNews2}
            />
        </>
    );
}

export default HomePage;
