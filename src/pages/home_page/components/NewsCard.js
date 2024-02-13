function NewsCard({news, i}) {
    // const {news} = props;
    // const {i} = props;
    return (
        <div className="d-flex align-items-stretch col-4" key={i}>
            <div className="card">
                <a className="stretched-link"
                   href={news.url}>
                </a>
                <img
                    src={news.urlToImage ? news.urlToImage : 'https://placehold.co/600x400'}
                    alt="card_image"
                    className="card-img-top custom-card"
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
        </div>
    )
}

export default NewsCard;