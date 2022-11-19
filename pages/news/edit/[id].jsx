import React, { useState } from "react";
import { storage } from "../../../firebase/clientApp";
import { getNews, getAllCategories } from "../../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopBanner from "../../../components/Molecules/TopBanner";
import NewsForm from "../../../components/Organisms/NewsForm";
import axios from "axios";
import Toast from "../../../components/Molecules/Toast/Toast";
import styled from "styled-components";


const ToastPopup = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 100;
`

export default function NewNews({ newsItem, categoriesList }) {
    const [news, setNews] = useState(newsItem);
    const [imageURL, setImageURL] = useState(newsItem.fileName);
    const [newsId, setNewsId] = useState(null);

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
        console.log(news);
        return;
    }

    function handleCancel() { }

    function handleConfirm() {
        const putNews = {
            id: newsItem.id,
            newsTitle: news.newsTitle,
            // newsCreatorId: newsItem.newsCreatorId,
            newsAvatar: "",
            newsDateCreated: newsItem.newsDateCreated,
            newsContent: news.newsContent,
            newsImage: news.newsImage,
            newsTags: news.newsTags,
        }
        console.log(putNews)
        axios.put("/api/news", putNews).then((res) => {
            console.log("edited successfully", res.data);
            setNewsId(res.data);
            // window.location = `/community?tabId=1`
        });
    }

    const handleViewPost = () => {
        window.location = `/community?tabId=1`
    };

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
            {newsId && (
                <ToastPopup>
                    <Toast onViewPost={handleViewPost} />
                </ToastPopup>
            )}
        </div>
    );
}

export async function getServerSideProps(context) {
    const newsData = await getNews(context.params.id);
    const newsItem = JSON.parse(JSON.stringify(newsData));
    console.log(newsItem)

    const categoriesData = await getAllCategories();
    const categoriesList = JSON.parse(JSON.stringify(categoriesData));

    return {
        props: { newsItem, categoriesList }
    };
}