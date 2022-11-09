import React, { useState } from "react";
import { storage } from "../../firebase/clientApp";
import { addNews, getAllCategories } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopBanner from "../../components/Molecules/TopBanner";
import NewsForm from "../../components/Organisms/NewsForm";
import axios from "axios";

export default function NewNews({ categoriesList }) {
    const [news, setNews] = useState({
        newsTitle: "",
        newsCreatorId: "Clover Food Bank",
        newsAvatar: "",
        newsDateCreated: new Date(),
        newsContent: undefined,
        newsImage: "",
        newsTags: [],
    });

    const [imageURL, setImageURL] = useState(null);

    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     axios.post("/api/news", news).then((res) => {
    //         console.log("posted successfully", res.data);
    //     });
    // };

    function handleChangeNewsTitle(newsTitle) {
        console.log(newsTitle);
        setNews({ ...news, newsTitle });
        console.log(news)
        return;
    }

    function handleChangeNewsCreator() {
        // setnewsCreator()
        return;
    }

    function handleChangeNewsContent(newsContent) {
        console.log(newsContent)
        setNews({ ...news, newsContent });
        console.log(news)
        return;
    }

    async function handleChangeNewsImage(img) {
        const imgRef = ref(storage, img.name);
        await uploadBytes(imgRef, img);
        const newImgRef = await getDownloadURL(imgRef);
        setNews({ ...news, newsImage: newImgRef });
        // console.log(img.name);
        setImageURL(img.name);
    }

    function handleChangeNewsCategory(tag) {
        setNews({ ...news, newsTags: [...tag] });
        console.log(news)
        return;
    }

    function handleCancel() { }

    function handleConfirm(e) {
        console.log(news);
        const postnews = {
            newsTitle: news.newsTitle,
            newsCreatorId: 1,
            newsAvatar: "",
            newsDateCreated: new Date(),
            newsContent: news.newsContent,
            newsImage: news.newsImage,
            newsTags: news.newsTags,
        }
        console.log('buh', postnews.newsDateCreated);
        axios.post("/api/news", postnews).then((res) => {
            console.log("posted successfully", res.data);
            window.location = `/community?tabId=1`
        });
    }

    return (
        <div>
            <TopBanner text={"Create a News"} />
            <NewsForm
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

export async function getServerSideProps(context) {
    const categoriesData = await getAllCategories();
    const categoriesList = JSON.parse(JSON.stringify(categoriesData));

    return {
        props: { categoriesList }
    };
}
