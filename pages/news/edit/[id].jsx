import React, { useState } from "react";
import { storage } from "../../../firebase/clientApp";
import { getNews, editNews, getNewsCategories } from "../../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import NewsForm from "../../../components/NewsForm";
import axios from "axios";

export default function NewNews({ newsItem, newsCategories }) {
    const [news, setNews] = useState({
        newsTitle: newsItem.newsTitle,
        newsCreatorId: newsItem.newsCreatorId,
        newsAvatar: newsItem.newsAvatar,
        newDateCreated: new Date(),
        newsContent: newsItem.newsContent,
        newsImage: newsItem.newsImage,
        newsTags: newsItem.newsTags,
    });

    const [imageURL, setImageURL] = useState(null);

    function handleChangeNewsTitle(newsTitle) {
        setNews({ ...news, newsTitle });
    }

    function handleChangeNewsCreator() {
        // setnewsCreator()
        return;
    }

    function handleChangeNewsDescription(newsDescription) {
        setNews({ ...news, newsDescription });
    }

    async function handleChangeNewsImage(img) {
        const imgRef = ref(storage, img.name);
        await uploadBytes(imgRef, img);
        const newImgRef = await getDownloadURL(imgRef);
        setNews({ ...news, newsImage: newImgRef });
        // console.log(img.name);
        setImageURL(img.name);
    }

    function handleChangeNewsCategory(e) {
        setNews({ ...news, newsTags: [...newsTags, e.target.id] });
    }

    function handleCancel() { }

    function handleConfirm(news) {
        const postnews = {
            newsTitle: news.newsTitle,
            newsCreatorId: 1,
            newsAvatar: "",
            newsDateCreated: Date(),
            newsContent: news.newsDescription,
            newsImage: news.newsImage,
            newsTags: [news.newsTags],
        }

        axios.post("/api/news", postnews).then((res) => {
            window.location = `/community`
            console.log("posted successfully", res.data);
        });
    }

    return (
        <div>
            <NewsForm
                news={news}
                onChangeNewsTitle={handleChangeNewsTitle}
                onChangeNewsCreator={handleChangeNewsCreator}
                onChangeNewsDescription={handleChangeNewsDescription}
                image={imageURL}
                onChangeNewsImage={handleChangeNewsImage}
                onChangeNewsCategory={handleChangeNewsCategory}
                onConfirm={handleConfirm}
            />

        </div>
    );
}

export async function getServerSideProps({ params }) {
    const newsData = await getNews(params.id);
    const newsItem = JSON.parse(JSON.stringify(newsData));

    // const newsCategoriesData = await getNewsCategories();
    // const newsCategories = JSON.parse(JSON.stringify(newsCategoriesData));

    return {
        props: { newsItem }, // will be passed to the page component as props
    };
}