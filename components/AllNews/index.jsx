import { useEffect, useState } from "react";
import { getNews } from '../../server/database';

export default function AllNews() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    // const fetchEvent = async () => {
    //   const newsList = await getNews();
    //   setAllNews(newsList);
    // };
    // fetchEvent();
  }, []);

  return (
    <ul>
      {/* {allNews.map((news) => (
        <li key={news.newsTitle}>
          <News 
            newsId={news.id}
            newsTitle={news.newsTitle}
          />
        </li>
      ))} */}
      <li>News Item</li>
      <li>News Item</li>
      <li>News Item</li>
      <li>News Item</li>
    </ul>
  );
}
