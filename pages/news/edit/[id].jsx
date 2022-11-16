import React, { useState } from "react";
import { storage } from "../../../firebase/clientApp";
import { getNews, getAllCategories } from "../../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopBanner from "../../../components/Molecules/TopBanner";
import NewsForm from "../../../components/Organisms/NewsForm";
import axios from "axios";

export default function NewNews({ newsItem, categoriesList }) {
    console.log(newsItem)
    const [news, setNews] = useState({
        newsTitle: newsItem.newsTitle,
        newsCreatorId: newsItem.newsCreatorId,
        newsAvatar: newsItem.newsAvatar,
        newDateCreated: newsItem.newsDateCreated,
        newsContent: newsItem.newsContent,
        newsImage: newsItem.newsImage,
        newsTags: newsItem.newsTags,
    });
    const [imageURL, setImageURL] = useState(newsItem.fileName);

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

    function handleChangeNewsCategory(tags) {
        setNews({ ...news, newsTags: [...tags] });
        return;
    }

    function handleCancel() { }

    function handleConfirm() {
        const putNews = {
            id: newsItem.id,
            newsTitle: news.newsTitle,
            newsCreatorId: newsItem.newsCreatorId,
            newsAvatar: "",
            newsDateCreated: newsItem.newsDateCreated,
            newsContent: news.newsContent,
            newsImage: news.newsImage,
            newsTags: news.newsTags,
        }
        console.log(putNews)
        axios.put("/api/news", putNews).then((res) => {
            console.log("edited successfully", res.data);
            window.location = `/community?tabId=1`
        });
    }

    return (
        <div>
            <TopBanner text={"Edit News"} />
            <NewsForm
                mode={"edit"}
                news={news}
                onChangeNewsTitle={handleChangeNewsTitle}
                onChangeNewsCreator={handleChangeNewsCreator}
                onChangeNewsContent={handleChangeNewsContent}
                image={imageURL}
                onChangeNewsImage={handleChangeNewsImage}
                onChangeNewsTags={handleChangeNewsCategory}
                categoriesList={categoriesList}
                onConfirm={handleConfirm}
            />

        </div>
    );
}

export async function getServerSideProps({ params }) {
    const newsData = await getNews(params.id);
    const newsItem = JSON.parse(JSON.stringify(newsData));

    const categoriesData = await getAllCategories();
    const categoriesList = JSON.parse(JSON.stringify(categoriesData));

    return {
        props: { newsItem, categoriesList }
    };
}