import { useEffect, useState } from "react";
import { getAllNews } from '../../../server/database';
import { Colours } from "../../../styles/globals";
import styled from 'styled-components';
import { Avatar } from "@mui/material";
import Icon from "@mui/material/Icon";
import Link from "next/link";
import { useRouter } from 'next/router';
import { deleteNews } from "../../../server/database";
import EventCategoryTag from "../../Atoms/EventCategoryTag";
import axios from "axios";

const NewsList = styled.div`
  position: relative;

`

const NewsCont = styled.div`
  margin: 1.5em;
  background: ${Colours.background};
  display: flex;
  width: 90vw;
  gap: 10px;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Divider = styled.div`
  width: 5px;
  background-color: ${Colours.primary};
  display: flex;
  height: 90%;
  align-self: center;
  border-radius: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    margin-left: 3em;
    margin-right: 1em;
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;

`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  h3 {
    margin: 10px 0;
  }
  h2 {
    margin-bottom: 3px;
  }
  p {
    margin: 0;
  }
`;

const TagList = styled.div`
  // display: flex;
  margin: 1em 1em 0 0;
`;

const Tag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  background-color: #ffb800;
  color: white;
  border: none;
  border-radius: 13px;
  padding: 8px 10px;
  font-size: 16px;
  margin-right: 0.8em;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width:75vw;
  height: 25vh;
  @media (min-width: 768px) {
    width: 45vw;
    height: 33vh;
  }
`;

const Content = styled.div`
  position: relative;
  line-height: 1.5;
  margin-bottom: 1em;
`;

const Hr = styled.hr`
  border-top: 1px solid #d9d9d9;
  margin: 3vh 0;
  border-bottom: none;
`;

const ExtraSpace = styled.div`
  height: 10vh;
`;

const ReadMoreBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${Colours.primary};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: -10px;
`;

const EditNews = styled.div`
  display: flex;
  p {
    margin: 0;
  }
`;
const DeleteNews = styled.div`
  display: flex;
`;

const Func = styled.div`
  position: absolute;
  top: 0;
  right: 13vw;
`;

const AbsPos = styled.div`
  position: absolute;
  top: 10vh;
  left: 20vw;
  z-index: 1000;
`;

const DeleteCont = styled.div`
  position:fixed;
  top:40%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 35vw;
  height: 25vh;
  padding: 2%;
  margin: auto;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 210px;
  min-width: 320px;
`;
const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5%;
`;

const DeleteBtn = styled.button`
  background: #e24949;
  border-radius: 15px;
  height: 44px;
  width: 137px;

  font-size: 14px;
  line-height: 17px;
  text-align: center;
  border: 0px;

  color: #ffffff;
  margin: 2%;
`
const CancelBtn = styled.button`
  background-color: #FFFFFF;
  border: 2px solid #535353;
  border-radius: 15px;
  height: 44px;
  width: 137px;

  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #535353;
  margin: 2%;
`;
export default function AllNews({ allNews, sessionEmail }) {
  const [showMore, setShowMore] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const router = useRouter();
  const [popUpId, setPopUpId] = useState(null);

  const handleDelete = (singleEventId) => async (e) => {
    e.preventDefault();
    console.log(singleEventId)
    await deleteNews(singleEventId);
    window.location.reload();
    // router.push("/community");
  };

  const handlePopup = (id) => (e) => {
    e.preventDefault();
    setPopUpId(id);
    setConfirmDelete(true);
  };

  function hidePopup() {
    setConfirmDelete(false);
  }

  return (
    <>

      {allNews.map((news) => (
        // let user;
        // axios.get(`/api/users/${news.newsCreatorId}`);
        // return (
        <NewsList key={news.id}>
          <NewsCont>
            <LeftCont>
              <Avatar src={news.newsCreatorId.image} />
              {/* <img src={user.image} alt="user avatar" /> */}
              <Divider />
            </LeftCont>
            <TextDiv>
              <InfoDiv>
                {/* <h3>Organizer</h3> */}
                <h3>{news.newsCreatorId.name}</h3>
                <h2>{news.newsTitle}</h2>
                <p>
                  {new Date(news.newsDateCreated).toLocaleString("default", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                </p>
              </InfoDiv>
              {/* <TagList>
                {news.newsTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList> */}
              <EventCategoryTag eventCategories={news.newsTags} selected={true} />

              <Content>
                <p>
                  {!showMore && news.newsContent?.length > 100
                    ? news.newsContent.substring(0, 100) + "..."
                    : news.newsContent}
                </p>
                {news.newsContent?.length > 100 && (
                  <ReadMoreBtn onClick={() => setShowMore(!showMore)}>
                    {showMore ? (
                      <>Show Less {<Icon>expand_less</Icon>}</>
                    ) : (
                      <>Read More {<Icon>expand_more</Icon>}</>
                    )}
                  </ReadMoreBtn>
                )}
              </Content>

              {news.newsImage && <ImageContainer
                src={news.newsImage}
              ></ImageContainer>}
            </TextDiv>
          </NewsCont>

          {sessionEmail == news.newsCreatorId.email && (
            <Func>
              <Link href={`/news/edit/${news.id}`}>
                <EditNews>
                  <img src="/Edit-icon.svg" alt="Edit News" />
                  &nbsp;
                  <p>Edit News</p>
                </EditNews>
              </Link>
              <DeleteNews>
                <img src="/Delete-icon.svg" alt="Delete News" />
                &nbsp;
                <p onClick={handlePopup(news.id)}>Delete News</p>
              </DeleteNews>
            </Func>
          )}

          {confirmDelete && popUpId == news.id && (
            <AbsPos>
              <DeleteCont>
                <h2 styles={{ paddingRight: "10%" }}>
                  Are you sure you want to delete this News?
                  <br /> This cannot be undone.
                </h2>
                <BtnCont>
                  <CancelBtn onClick={hidePopup}>Cancel</CancelBtn>
                  <Link href="/community?tab=1">
                    <DeleteBtn onClick={handleDelete(news.id)}>
                      Confirm
                    </DeleteBtn>
                  </Link>
                </BtnCont>
              </DeleteCont>
            </AbsPos>
          )}

          <Hr />
        </NewsList>
      )
      )
      }
      <ExtraSpace />
    </>
  );
}
