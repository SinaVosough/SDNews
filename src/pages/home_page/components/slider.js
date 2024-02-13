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

function Slider() {
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
                    <div className="card mt-5">
                        {/*<a className="stretched-link"*/}
                        {/*   href={news.url}>*/}
                        {/*</a>*/}
                        <img
                            src='https://placehold.co/600x400'
                            alt="card_image"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-secondary text-center">title</h3>
                            </div>
                            <div className="card-subtitle my-4">
                                <p className="text-muted text-center">
                                    description
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5">
                        {/*<a className="stretched-link"*/}
                        {/*   href={news.url}>*/}
                        {/*</a>*/}
                        <img
                            src='https://placehold.co/600x400'
                            alt="card_image"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-secondary text-center">title</h3>
                            </div>
                            <div className="card-subtitle my-4">
                                <p className="text-muted text-center">
                                    description
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mt-5">
                        {/*<a className="stretched-link"*/}
                        {/*   href={news.url}>*/}
                        {/*</a>*/}
                        <img
                            src='https://placehold.co/600x400'
                            alt="card_image"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-secondary text-center">title</h3>
                            </div>
                            <div className="card-subtitle my-4">
                                <p className="text-muted text-center">
                                    descriptionhfhfhfhf
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5">
                        {/*<a className="stretched-link"*/}
                        {/*   href={news.url}>*/}
                        {/*</a>*/}
                        <img
                            src='https://placehold.co/600x400'
                            alt="card_image"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-secondary text-center">title</h3>
                            </div>
                            <div className="card-subtitle my-4">
                                <p className="text-muted text-center">
                                    description
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="card mt-5">
                    {/*<a className="stretched-link"*/}
                    {/*   href={news.url}>*/}
                    {/*</a>*/}
                    <img
                        src='https://placehold.co/600x400'
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">title</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                description
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-5">
                    {/*<a className="stretched-link"*/}
                    {/*   href={news.url}>*/}
                    {/*</a>*/}
                    <img
                        src='https://placehold.co/600x400'
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">title</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                description
                            </p>
                        </div>
                    </div>
                </div>
                {/*<SwiperSlide>*/}
                {/*    <img src=""/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src=""/>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </>
    );
}

export default Slider