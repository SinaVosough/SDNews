import './css/newsPic.css'


function NewsPic(props) {
    const {mhs} = props;
    const {test} = props;
    console.log(test)
    console.log(mhs)
    if (!mhs || mhs.length === 0) return <p>Can not find any slide, sorry</p>;
    return (
        <>
            <section className="p-5 main allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">Main</h1>
                    <div className="row ">

                        {mhs.map((mamamia, i) => {

                            return (

                                <div className="col-4" key={i}>
                                    <div className="card">
                                        <img
                                            src={mamamia.urlToImage}
                                            alt="card_image"
                                            className="card-img-top custom-card"
                                        />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3 className="text-secondary text-center">{mamamia.title}</h3>
                                            </div>
                                            <div className="card-subtitle my-4">
                                                <p className="text-muted text-center">
                                                    {mamamia.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}


                        {/*<div className="col-4">*/}
                        {/*    <div className="card">*/}
                        {/*        <img*/}
                        {/*            src="./img/card1.jpg"*/}
                        {/*            alt="card_image"*/}
                        {/*            className="card-img-top custom-card"*/}
                        {/*        />*/}
                        {/*        <div className="card-body">*/}
                        {/*            <div className="card-title">*/}
                        {/*                <h3 className="text-secondary text-center">Test1</h3>*/}
                        {/*            </div>*/}
                        {/*            <div className="card-subtitle my-4">*/}
                        {/*                <p className="text-muted text-center">*/}
                        {/*                    Lorem ipsum dolor sit amet.*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-4">*/}
                        {/*    <div className="card">*/}
                        {/*        <img*/}
                        {/*            src="./img/card1.jpg"*/}
                        {/*            alt="card_image"*/}
                        {/*            className="card-img-top custom-card"*/}
                        {/*        />*/}
                        {/*        <div className="card-body">*/}
                        {/*            <div className="card-title">*/}
                        {/*                <h3 className="text-secondary text-center">Test1</h3>*/}
                        {/*            </div>*/}
                        {/*            <div className="card-subtitle my-4">*/}
                        {/*                <p className="text-muted text-center">*/}
                        {/*                    Lorem ipsum dolor sit amet.*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            <section className="p-5 sport allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">Sport</h1>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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
                    </div>
                </div>
            </section>

            <section className="p-5 economic allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">Economic</h1>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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
                    </div>
                </div>
            </section>

            <section className="p-5 political allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">Political</h1>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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
                    </div>
                </div>
            </section>

            <section className="p-5 art allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">Art</h1>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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
                    </div>
                </div>
            </section>

            <section className="p-5 technology allcontainer">
                <div className="container-fluid">
                    <h1 className="text-white text-center mb-5">Technology</h1>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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

                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="./img/card1.jpg"
                                    alt="card_image"
                                    className="card-img-top custom-card"
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
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsPic;