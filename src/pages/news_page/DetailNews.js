import FirstRow from "../home_page/components/FirstRow";
import Footer from "../component/footer";
import React, {useEffect, useState} from "react";
import axios from "axios";

function DetailNews() {

    const [data, setData] = useState("");
    useEffect(() => {

        axios.get('https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=26d94c0bfe2b4cfba18d1ce24dfaa464').then((res) => {
            const topNews = res.data.articles.slice(7, 10);
            console.log(topNews);
            setData(prevoiusState => {
                return {...prevoiusState, "topNews": topNews}
            })
        })
    }, []);


    return (
        <>
            <div className="container">
                <FirstRow topNews={data.topNews}/>
            </div>
        </>
    )
}

export default DetailNews;