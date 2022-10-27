import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItem";
import SomethingBroke from "./SomeThingWrong";
import Spinner from "./Spinner";

export default function News({ pageSize, country, category, title }) {
  const [newsList, setNewsList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [fetched, setFetched] = useState(true);

  document.title = `${title} - NewsBytes`;

  useEffect(() => {
    (async () => {
      setLoad(true);
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1592c5d1cebc450fbf077f986dbc51f9&page=${page}&pageSize=${pageSize}`
      );
      let res = await data.json();
      if (res.status !== "ok") setFetched(false);
      else if (res.status === "ok") setFetched(true);
      setLoad(false);
      // console.log(res);
      setTotalArticles(res.totalResults);
      setNewsList(res.articles);
    })();
  }, [page, country]);

  return (
    <>
      {!fetched ? (
      <div className="container my-3"><SomethingBroke className="text-center" style={{ marginTop: "90px" }}/></div>
      ) : (
        <div className="container my-3">
          <h1 className="text-center" style={{ marginTop: "90px" }}>
            News Bytes - {title}
          </h1>
          {load && <Spinner />}
          <div className="row">
            <div className="container d-flex justify-content-between">
              <button
                disabled={page <= 1 ? true : false}
                type="button"
                onClick={() => setPage(page - 1)}
                className="btn btn-dark my-3"
              >
                &larr; Previous
              </button>
              <button
                disabled={page >= Math.ceil(totalArticles / 16) ? true : false}
                type="button"
                onClick={() => setPage(page + 1)}
                className="btn btn-dark my-3"
              >
                Next &rarr;
              </button>
            </div>
            {newsList.map((news) => (
              <div key={news.url} className="col md-4">
                <NewsItems
                  title={news.title ? news.title.slice(0, 45) : ""}
                  description={
                    news.description ? news.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    !news.urlToImage
                      ? "https://tse2.mm.bing.net/th?id=OIP.Zv6FHN0b822DALpTkwp_KQHaEG&pid=Api&P=0"
                      : news.urlToImage
                  }
                  newsUrl={news.url}
                  author={news.author}
                  date={news.publishedAt}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1 ? true : false}
              type="button"
              onClick={() => setPage(page - 1)}
              className="btn btn-dark my-3"
            >
              &larr; Previous
            </button>
            <button
              disabled={page >= Math.ceil(totalArticles / 16) ? true : false}
              type="button"
              onClick={() => setPage(page + 1)}
              className="btn btn-dark my-3"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
