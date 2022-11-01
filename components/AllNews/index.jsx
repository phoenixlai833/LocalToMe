import { useEffect, useState } from "react";
import { getAllNews } from '../../server/database';
import { Colours } from "../../styles/globals";
import styled from 'styled-components';
import { Avatar } from "@mui/material";
import Icon from "@mui/material/Icon";


const NewsList = styled.div`
width: 100%;
margin: 0;
`
const NewsCont = styled.div`
   margin: 1.5em;
   background:${Colours.background};
   display:flex;
   width:90vw;
   gap:10px;
`

const Divider = styled.div`
   width:5px;
   background-color:${Colours.primary};
   display:flex;
   height:90%;
   align-self:center;
   border-radius:10px;
`
const LeftCont = styled.div`
   display:flex;
   flex-direction:column;
   gap:10px;
`
const TextDiv = styled.div`
   display:flex;
   flex-direction:column;
   width:80%;
`
const InfoDiv = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
   margin: 0;
   h3{
      margin: 10px 0;
   }
   h2{
    margin-bottom: 3px;
   }
   p{
    margin:0;
   }
`

const TagList = styled.p`
// display: flex;
margin-bottom: 0;
`

const Tag = styled.div`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   height: 25px;
   background-color: #FFB800;
   color: white;
   border: none;
   border-radius: 13px;
   padding: 8px 10px;
   font-size: 16px;
   margin-right:0.8em;
`

const ImageContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background-image: url(${props => props.src});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   border-radius: 15px;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   min-height:20vh;
`;


const Content = styled.div`
position: relative;
line-height:1.5;
margin-bottom:1em;
`

const Hr = styled.hr`
border-top:1px solid #D9D9D9;
margin:3vh 0;
border-bottom: none;
`

const ExtraSpace = styled.div`
height: 10vh;
`

const ReadMoreBtn = styled.button`
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
border:none;
color:${Colours.primary};
position:absolute;
bottom:0;
right:0;
margin:-10px
`

export default function AllNews({ allNews }) {

  const [showMore, setShowMore] = useState(false);


  return (
    <>

      {allNews.map((news) => (
        <NewsList>
          <NewsCont key={news.newsTitle}>
            <LeftCont>
              <Avatar src={news.avatar} />
              <Divider />
            </LeftCont>
            <TextDiv>
              <InfoDiv>
                <h3>Organizer</h3>
                <h2>{news.newsTitle}</h2>
                <p>
                  {new Date((news.newsDateCreated.seconds) * 1000).toLocaleString(
                    "default",
                    { month: "long", day: "2-digit", year: "numeric" }
                  )}
                  {
                    new Date(news.newsDateCreated.seconds * 1000)
                      .toLocaleString()
                      .split(",")[1]
                  }
                </p>
              </InfoDiv>
              <TagList>
                {news.newsTags.map((tag) => (
                  <Tag>
                    {tag}
                  </Tag>
                ))}
              </TagList>

              <Content>
                <p>
                  {!showMore && news.newsContent.length > 100 ? news.newsContent.substring(0, 100) + "..." : news.newsContent}
                </p>
                <ReadMoreBtn onClick={() => setShowMore(!showMore)}>
                  {showMore ? <>Show Less {<Icon>expand_less</Icon>}</> : <>Read More {<Icon>expand_more</Icon>}</>}

                </ReadMoreBtn>
              </Content>

              <ImageContainer src={news.newsImage}></ImageContainer>

            </TextDiv>

          </NewsCont>
          <Hr />
        </NewsList>

      ))}

      <ExtraSpace />

    </>
  );
}


