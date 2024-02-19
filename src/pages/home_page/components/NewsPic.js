import './css/newsPic.css'
import NewsCard from "./NewsCard";

import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/slider.css';

// import required modules
import {EffectFade, Navigation, Pagination} from 'swiper/modules';


function NewsPic(props) {
    const {generalNews} = props;
    const {generalNews1} = props;
    const {generalNews2} = props;
    const {sportNews} = props;
    const {sportNews1} = props;
    const {sportNews2} = props;
    const {businessNews} = props;
    const {scienceNews} = props;
    const {entertainmentNews} = props;
    const {technologyNews} = props;
    if (!generalNews || generalNews.length === 0) return <p>Can not find any slide, sorry</p>;
    if (!sportNews || sportNews.length === 0) return <p>Can not find any slide, sorry</p>;
    if (!businessNews || businessNews.length === 0) return <p>Can not find any slide, sorry</p>;
    if (!scienceNews || scienceNews.length === 0) return <p>Can not find any slide, sorry</p>;
    if (!entertainmentNews || entertainmentNews.length === 0) return <p>Can not find any slide, sorry</p>;
    if (!technologyNews || technologyNews.length === 0) return <p>Can not find any slide, sorry</p>;

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section className="p-5 general allcontainer">
                        <div className="container-fluid">
                            <h1 className="text-white text-center mb-5">تازه ترین ها</h1>
                            <div className="row">
                                {generalNews.map((news, i) => {
                                    return (
                                        <NewsCard news={news} i={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="p-5 general allcontainer">
                        <div className="container-fluid">
                            <h1 className="text-white text-center mb-5">تازه ترین ها</h1>
                            <div className="row ">
                                {generalNews1.map((news, i) => {
                                    return (
                                        <NewsCard news={news} i={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="p-5 general allcontainer">
                        <div className="container-fluid">
                            <h1 className="text-white text-center mb-5">تازه ترین ها</h1>
                            <div className="row ">
                                {generalNews2.map((news, i) => {
                                    return (
                                        <NewsCard news={news} i={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>

            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section className="p-5 sport allcontainer">
                        <div className="container-fluid">
                            <h1 className="text-white text-center mb-5">ورزشی</h1>
                            <div className="row">
                                {sportNews.map((news, i) => {
                                    return (
                                        <NewsCard news={news} i={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="p-5 sport allcontainer">
                        <div className="container-fluid">
                            <h1 className="text-white text-center mb-5">ورزشی</h1>
                            <div className="row">
                                {sportNews1.map((news, i) => {
                                    return (
                                        <NewsCard news={news} i={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="p-5 sport allcontainer">
                        <div className="container-fluid">
                            <h1 className="text-white text-center mb-5">ورزشی</h1>
                            <div className="row">
                                {sportNews2.map((news, i) => {
                                    return (
                                        <NewsCard news={news} i={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>

            <section className="p-5 economic allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">اقتصاد</h1>
                    <div className="row">
                        {businessNews.map((news, i) => {
                                return (
                                    <NewsCard news={news} i={i}/>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>

            <section className="p-5 political allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">سیاسی</h1>
                    <div className="row">
                        {scienceNews.map((news, i) => {
                                return (
                                    <NewsCard news={news} i={i}/>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>

            <section className="p-5 art allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">فرهنگ و هنر</h1>
                    <div className="row">
                        {entertainmentNews.map((news, i) => {
                                return (
                                    <NewsCard news={news} i={i}/>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>

            <section className="p-5 technology allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">تکنولوژی</h1>
                    <div className="row">
                        {technologyNews.map((news, i) => {
                            return (
                                <NewsCard news={news} i={i}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsPic;