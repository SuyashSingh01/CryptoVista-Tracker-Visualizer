import React from 'react'


function NewsCard({ article }) {
    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });
    const openArticle = () => {
        window.open(article.url, "_blank");
    };

    return (
        <div className=" bg-opacity-80 w-[330px] max-h-[500px] rounded-md overflow-hidden mt-10
        hover:scale-110 transition duration-300 ease-in hover:shadow-gray-500 shadow-xl" onClick={openArticle} >
            <div className="relative ">
                <img className="h-[300px] w-[330px] object-cover"
                    src={article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/400x200'} alt="Trending-news" id="news-img" />
            </div>
            <div className="p-3 bg-gray-100 mb-10 ">
                <h3 className=" font-bold" id="news-title">{article.title}</h3>
                <h6 className="my-3 text-xs" >{article.source.name}·{date}</h6>
                <p className=" font-roboto text-secondary leading-2  text-md ">{article.description}</p>
            </div>
        </div>
    );
}
export default NewsCard;
