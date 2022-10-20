import { useEffect, useState } from "react";
import News from "./News";
import { getNews } from '../server/database';

export default function Newss() {
  const [newss, setNewss] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const newsList = await getNews();
      setNewss(newsList);
    };
    fetchEvent();
  }, []);

  return (
    <ul>
      {newss.map((news) => (
        <li key={news.newsTitle}>
          <News
            newsId={news.id}
            newsTitle={news.newsTitle}
          />
        </li>
      ))}
    </ul>
  );
}
