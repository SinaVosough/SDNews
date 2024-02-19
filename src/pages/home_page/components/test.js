import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination} from "swiper/modules";
import NewsCard from "./NewsCard";
import React from "react";


function Test() {
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
                            <h1 className="text-white text-center mb-5">General</h1>
                            <div className="row ">
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
                            <h1 className="text-white text-center mb-5">General</h1>
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
                            <h1 className="text-white text-center mb-5">General</h1>
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
        </>
    )
}

export default Test;