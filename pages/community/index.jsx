
import EventsList from "../../components/Organisms/EventsList";
import { useEffect, useState } from "react";
import AllNews from "../../components/Templates/AllNews";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  useHits,
  useSearchBox,
} from "react-instantsearch-hooks-web";
import { getEvents } from "../../server/database";
import NavBar from '../../components/Organisms/NavBar';
import FloatingActionButton from "../../components/Atoms/FloatButton";
import styled from 'styled-components';
import Search from "../../components/Molecules/Search";
import { getAllNews } from "../../server/database";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import TopNavigation from '../../components/Organisms/NavBarTop';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

function CustomSearch() {
  const { query, refine, clear, isSearchStalled } = useSearchBox();

  function handleSearch(input) {
    refine(input);
  }
  return <Search onSearch={handleSearch} />;
}

export function EventHits() {
  const { hits } = useHits();

  return <EventsList eventList={hits} />;
}


export function NewsHits({ allNews }) {
  const { data: session } = useSession()
  const sessionEmail = session?.user.email
  const { hits } = useHits();

  // return <AllNews allNews={hits} />
  return <AllNews allNews={allNews} sessionEmail={sessionEmail} />;
}


const Heading = styled.p`
  margin: 1em;
  font-size: 1.5em;
  font-weight: 550;
`;

const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  border-bottom: 1.5px solid #d9d9d9;
`;

const EventTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

const NewTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

const TopBar = styled.div`
  @media (max-width: 768px) {
    display:none;
}
`

const Btmbar = styled.div`
margin-top: 5rem;
    @media (min-width: 768px) {
        display:none;
    }
    `

const ComBox = styled.div`
@media (min-width: 768px) {
border: 1px solid #ffffff;
margin-top:9vh;
margin-left: 18vw;
margin-right: 18vw;
min-height: 91vh;
border-radius: 15px;
   box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);

}
`


export default function Community({ allNews, tabId, usersData }) {
  const [tab, setTab] = useState(tabId);
  // const [isAdd, setIsAdd] = useState(false);

  const tabContents = {
    0: { component: <EventHits />, searchIndex: "prod_EVENTS" },
    1: { component: <NewsHits allNews={allNews} />, searchIndex: "prod_NEWS" },
  };

  const handleChangeTab = (e) => {
    if (e.target.id) {
      setTab(+e.target.id);
    }
  };

  return (
    <>
      <TopBar>
        <TopNavigation />
      </TopBar>
      <ComBox>
        <InstantSearch
          indexName={tabContents[tab].searchIndex}
          searchClient={searchClient}
        >

          <CustomSearch />

          <Tab onClick={handleChangeTab}>
            <EventTab id="0" tabId={tab}>
              Events
            </EventTab>
            <NewTab id="1" tabId={tab}>
              News
            </NewTab>
          </Tab>

          {tab === 0 ? (
            <Heading>Recent Events</Heading>
          ) : (
            <Heading>Recent News</Heading>
          )}
          {tabContents[tab].component}
        </InstantSearch>
      </ComBox>
      <FloatingActionButton />
      <Btmbar>
        <NavBar value={1} />
      </Btmbar>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  const tabId = context.query.tabId || 0;
  const req = await getAllNews();
  const allNews = JSON.parse(JSON.stringify(req))

  // const users = await getUsers()
  // const usersData = JSON.parse(JSON.stringify(users));

  if (!session) {
    return {
      props: {
        allNews,
        tabId,
      },
    }
  } else {

    return {
      props: {
        allNews,
        tabId,
        session
      },
    };
  }
}