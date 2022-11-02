import NewsCard from "../../components/NewsCard";
import Link from "next/link";
import { getNews } from "../../server/database";

export default function news({ news }) {
    return (
        <>
            <h1>Single news page</h1>
            <p>We dont need this actually, use for testing</p>
            <div>
                <NewsCard
                    title={news.newsTitle}
                    organizer={news.newsCreatorId}
                    avatar={news.newsAvatar}
                    // date={news.newsDateCreated}
                    info={news.newsContent}
                    src={news.newsImage}
                />
                <br />
                <Link href={`/news/edit/${news.id}`}>
                    <div style={{ display: "flex" }}>
                        <img src="/Edit-icon.svg" alt="Edit News" />
                        &nbsp;
                        <p>Edit News</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

// /news/3umhg4tybhT8TWbY3vEu

export async function getServerSideProps({ params }) {
    const newsData = await getNews(params.id);
    const news = JSON.parse(JSON.stringify(newsData));

    return {
        props: { news }, // will be passed to the page component as props
    };
}

// tag = "event",
// organizer = "Organizer",
// avatar = "",
// date = "Today, 3:00PM",
// info = "Lorem ipsum dolor sit amet, conse ctetur adi piscing elit. Fringilla risus est sociis bibendum. Nunc...",
// src = "http://placekitten.com/500/500",

// newsTag: news.newsTag,
// newsCreatorId: 1,
// newsAvatar: "",
// newsDateCreated: Date(),
// newsContent: news.newsDescription,
// newsImage: news.newsImage,