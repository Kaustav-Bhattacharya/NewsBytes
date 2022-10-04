import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItem";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${page}&pageSize=16`
      );
      let res = await data.json();
      setTotalArticles(res.totalResults);
      setNewsList(res.articles);
    })();
  }, [page]);

  return (
    <div className="container my-3">
      <h1>News Bytes - Top Headlines</h1>
      <div className="row">
        {newsList.map((news) => (
          <div key={news.url} className="col md-4">
            <NewsItems
              title={news.title ? news.title.slice(0, 45) : ""}
              description={
                news.description ? news.description.slice(0, 88) : ""
              }
              imageUrl={
                !news.urlToImage
                  ? "https://img.etimg.com/thumb/msid-94624462,width-1070,height-580,imgsize-11194,overlay-ettech/photo.jpg"
                  : news.urlToImage
              }
              newsUrl={news.url}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1 ? true : false}
          type="button"
          onClick={() => setPage(page - 1)}
          className="btn btn-dark"
        >
          &larr; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalArticles / 16) ? true : false}

          type="button"
          onClick={() => setPage(page + 1)}
          className="btn btn-dark"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
