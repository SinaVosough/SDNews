// import { findByLabelText } from "@testing-library/react";
// import Slider from "./slider";

import Slider from "./slider";

function FirstRow({topNews}) {

    if (!topNews || topNews.length === 0) return <p>Can not find any slide, sorry</p>;

    return (
        <div className="container row bg-light">
            <div className="col-6">
                {topNews.map((news, i) => {
                    return (
                        <div className="card mt-5" key={i}>
                            <a className="stretched-link"
                               href={news.url}>
                            </a>
                            <img
                                src={news.urlToImage ? news.urlToImage : 'https://placehold.co/600x400'}
                                alt="card_image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-secondary text-center">{news.title}</h3>
                                </div>
                                <div className="card-subtitle my-4">
                                    <p className="text-muted text-center">
                                        {news.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="col-6">
                <Slider/>
            </div>

        </div>


    )
}

export default FirstRow;