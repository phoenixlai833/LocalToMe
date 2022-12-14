import React, { useState } from "react";
import Router from "next/router";
import { storage } from "../../firebase/clientApp";
import { getAllCategories } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopBanner from "../../components/Molecules/TopBanner";
import NewsForm from "../../components/Organisms/NewsForm";
import { useSession } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import axios from "axios";
import Toast from "../../components/Molecules/Toast/Toast";
import styled from "styled-components";
import TopNavigation from "../../components/Organisms/NavBarTop";
import NavBar from "../../components/Organisms/NavBar";


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

const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}
`

const DesktopBox = styled.div`
@media (min-width: 768px) {
margin-top:8vh;
margin-left: 18vw;
margin-right: 18vw;
// min-height: 92vh;
box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
}
`

export default function NewNews({ categoriesList }) {
    const { data: session } = useSession();
    const userId = session.user.id;
    const [newsId, setNewsId] = useState(null);

    const [news, setNews] = useState({
        newsTitle: "",
        newsCreatorId: userId,
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
        // console.log(news)
        return;
    }

    function handleCancel() { }

    function handleConfirm(e) {
        console.log(news);
        const postnews = {
            newsTitle: news.newsTitle,
            newsCreatorId: userId,
            newsAvatar: "",
            newsDateCreated: new Date(),
            newsContent: news.newsContent,
            newsImage: news.newsImage,
            newsTags: news.newsTags,
        }
        console.log('buh', postnews.newsDateCreated);
        axios.post("/api/news", postnews).then((res) => {
            console.log("posted successfully", res.data);
            setNewsId(res.data);
           
        });
    }


    const handleViewPost = () => {
        Router.push(`/community?tabId=1`)
    };

    return (
        <div>
            <TopBar>
                <TopNavigation value={1}/>
            </TopBar>
            <DesktopBox>
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
                <div style={{ paddingBottom: "8vh" }}></div>
            </DesktopBox>
            {newsId && (
                <ToastPopup>
                    <Toast onViewPost={handleViewPost} />
                </ToastPopup>
            )}
            <div className="smallDisplayNone">
                <NavBar value={1} />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false,
            },
        }
    }

    const categoriesData = await getAllCategories();
    const categoriesList = JSON.parse(JSON.stringify(categoriesData));

    return {
        props: { categoriesList }
    };
}
