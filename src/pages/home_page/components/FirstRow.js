// import { findByLabelText } from "@testing-library/react";
// import Slider from "./slider";

import Slider from "./slider";

function FirstRow() {
    return (
        <div className="container row bg-light">

            <div className="col-3">
                <div className="card mt-5">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="card mt-5">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <img
                        src="./img/card1.jpg"
                        alt="card_image"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-secondary text-center">Test1</h3>
                        </div>
                        <div className="card-subtitle my-4">
                            <p className="text-muted text-center">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <Slider/>
            </div>

        </div>


    )
}

export default FirstRow;