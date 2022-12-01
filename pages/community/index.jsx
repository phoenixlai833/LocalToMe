import EventsList from "../../components/Organisms/EventsList";
import { useEffect, useState } from "react";
import AllNews from "../../components/Templates/AllNews";
import algoliasearch from "algoliasearch/lite";
import {
  Index,
  InstantSearch,
  SearchBox,
  useHits,
  useSearchBox,
} from "react-instantsearch-hooks-web";
import { getEvents } from "../../server/database";
import NavBar from "../../components/Organisms/NavBar";
import FloatingActionButton from "../../components/Atoms/FloatButton";
import styled from "styled-components";
import Search from "../../components/Molecules/Search";
import { getAllNews } from "../../server/database";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth].js";
import { unstable_getServerSession } from "next-auth/next";
import TopNavigation from "../../components/Organisms/NavBarTop";
import { flexbox } from "@mui/system";
import { CenterFocusStrong } from "@mui/icons-material";
import Image from "next/image";

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

  if (hits.length === 0)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ color: "green", fontSize: "25px", width: "50vw" }}>
          Sorry, we cannot find what you want...
        </p>
        {/* <Image src="/Mascot/Chou_detective.png" width="500%" height="500%" /> */}
      </div>
    );
  if (hits[0]?.eventCreatorId) return <EventsList eventList={hits} />;
}

export function NewsHits({ allNews }) {
  const { data: session } = useSession();
  const sessionEmail = session?.user.email;
  const { hits } = useHits();
  if (hits.length === 0)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ color: "green", fontSize: "25px", width: "50vw" }}>
          Sorry, we cannot find what you want...
        </p>
        {/* <Image src="/Mascot/Chou_detective.png" width="500%" height="500%" /> */}
      </div>
    );
  if (hits[0]?.newsCreatorId)
    return <AllNews allNews={hits} sessionEmail={sessionEmail} />;
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
    display: none;
  }
`;

const Btmbar = styled.div`
  margin-top: 5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ComBox = styled.div`
  @media (min-width: 768px) {
    border: 1px solid #ffffff;
    margin-top: 9vh;
    margin-left: 18vw;
    margin-right: 18vw;
    min-height: 91vh;
    box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
  }
`;

export default function Community({ tabId }) {
  const [tab, setTab] = useState(tabId);

  const tabContents = {
    0: { component: <EventHits />, searchIndex: "prod_EVENTS" },
    1: { component: <NewsHits />, searchIndex: "prod_NEWS" },
  };

  const handleChangeTab = (e) => {
    if (e.target.id) {
      setTab(+e.target.id);
    }
  };

  return (
    <div>
      <TopBar>
        <TopNavigation value={1} />
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const tabId = context.query.tabId || 0;

  if (!session) {
    return {
      props: {
        tabId,
      },
    };
  } else {
    return {
      props: {
        tabId,
        session,
      },
    };
  }
}
