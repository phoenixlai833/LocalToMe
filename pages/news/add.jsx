import React, { useState } from "react";
import { storage } from "../../firebase/clientApp";
import { addNews, getNewsCategories } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import NewsForm from "../../components/NewsForm";
import axios from "axios";

export default function NewNews({ newsList, newsCategories }) {
    const [news, setNews] = useState({
        newsTitle: "",
        newsCreatorId: 1,
        newsAvatar: "",
        newsDateCreated: new Date(),
        newsContent: "",
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

// export async function getServerSideProps(context) {
//     const newsData = await getAllNews();
//     const newsList = JSON.parse(JSON.stringify(newsData));

//     const newsCategoriesData = await getNewsCategories();
//     const newsCategories = JSON.parse(JSON.stringify(newsCategoriesData));

//     return {
//         props: { newsList, newsCategories }, // will be passed to the page component as props
//     };
// }
