
import EventsList from "../../components/Organisms/EventsList";
// import Newss from "../../components/Newss";

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
  const { hits } = useHits();

  // return <AllNews allNews={hits} />
  return <AllNews allNews={allNews} />;
}

const StyledSearchBox = styled(SearchBox)`
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    position: relative;
    background-color: #e4e4e4;
    width: 90%;
    height: 45px;
    margin: 20px;
    border-radius: 13px;
    border: none;
    font-size: 20px;
    padding-left: 10%;
    // padding-right: 10%;
  }

  .ais-SearchBox-submit {
    position: absolute;
    left: 5%;
    height: 45px;
    width: 45px;
    border-color: transparent;
    background-color: transparent;
  }

  .ais-SearchBox-submitIcon {
    width: 20px;
    height: 20px;
    fill: #108928;
  }
  .ais-SearchBox-reset {
    display: none;
  }
`;

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
      <InstantSearch
        indexName={tabContents[tab].searchIndex}
        searchClient={searchClient}
      >
        {/* <Search /> */}
        <CustomSearch />
        {/* <StyledSearchBox /> */}
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
      <FloatingActionButton />
      <NavBar value={1} />
    </>
  );
}

export async function getServerSideProps(context) {
  const tabId = context.query.tabId || 0;

  const req = await getAllNews();
  const allNews = JSON.parse(JSON.stringify(req))

  // const users = await getUsers()
  // const usersData = JSON.parse(JSON.stringify(users));
  console.log("aaaaaa", allNews)
  return {
    props: {
      allNews,
      tabId,

    },
  };
}
