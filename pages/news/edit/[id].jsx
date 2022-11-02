import React, { useState } from "react";
import { storage } from "../../../firebase/clientApp";
import { getNews, editNews, getNewsCategories } from "../../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopBanner from "../../../components/Molecules/TopBanner";
import NewsForm from "../../../components/NewsForm";
import axios from "axios";

export default function NewNews({ newsItem, newsCategories }) {
    // console.log(newsItem.id)
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

    function handleChangeNewsContent(newsContent) {
        setNews({ ...news, newsContent });
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

    function handleConfirm() {
        const putNews = {
            id: newsItem.id,
            newsTitle: news.newsTitle,
            newsCreatorId: 1,
            newsAvatar: "",
            newsDateCreated: new Date(),
            newsContent: news.newsContent,
            newsImage: news.newsImage,
            newsTags: news.newsTags,
        }

        axios.put("/api/news", putNews).then((res) => {
            window.location = `/community`
            console.log("edited successfully", res.data);
        });
    }

    return (
        <div>
            <TopBanner text={"Edit News"} />
            <NewsForm
                news={news}
                onChangeNewsTitle={handleChangeNewsTitle}
                onChangeNewsCreator={handleChangeNewsCreator}
                onChangeNewsContent={handleChangeNewsContent}
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