import { useState } from "react";
import Link from "next/link";
import EventsList from "../../components/EventsList";
import Newss from "../../components/Newss";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, useHits, Hits } from "react-instantsearch-hooks-web";
import { getEvents } from "../../server/database";
import NavBar from '../../components/NavBar';
import FloatingActionButton from "../../components/FloatButton";
import styled from 'styled-components';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

export function EventHits() {
  const { hits } = useHits();

  return <EventsList eventList={hits} />
}

export function NewsHits() {
  const { hits } = useHits();

  return <Newss news={hits} />
}

export default function Community() {
  const [tab, setTab] = useState(0);
  // const [isAdd, setIsAdd] = useState(false);
  const [navValue, setNavValue] = useState(1);

  const tabContents = {
    0: { component: <EventHits />, searchIndex: "prod_EVENTS" },
    1: { component: <NewsHits />, searchIndex: "prod_NEWS" },
  };


  const handleChangeTab = (e) => {
    if (e.target.id) {
      setTab(+e.target.id);
    }
  };

  const StyledSearchBox = styled(SearchBox)`
  form {
    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
   position: relative;
    background-color:#E4E4E4;
    width:90%;
    height:45px;
    margin:20px;
    border-radius:13px;
    border: none;
    font-size: 20px;
  }

  .ais-SearchBox-submit {
    position: absolute;
    right: 10%;
    height: 45px;
    width: 45px;
    border: none;
    background-color: transparent;
  }

  .ais-SearchBox-submitIcon{
    width:20px;
    height:20px;
  }

  .ais-SearchBox-submit{

  fill:#108928;
}

  .ais-SearchBox-reset{
  display:none;
}
  `

  const Tab = styled.div`
display: flex;
width: 100%;
height: 40px;
justify-content: space-around;
border-bottom:1.5px solid #D9D9D9;

`

  const EventTab = styled.p`
  cursor: pointer;
  text-decoration: underline ${tab === 0 ? "#FFB800" : "transparent"};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top:8px;
`

  const NewTab = styled.p`
  cursor: pointer;
  text-decoration: underline ${tab === 1 ? "#FFB800" : "transparent"} ;
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top:8px;

`

  return (
    <>
      <InstantSearch indexName={tabContents[tab].searchIndex} searchClient={searchClient}>
        <StyledSearchBox reset={null}/>
        <Tab onClick={handleChangeTab} >

          <EventTab id="0">
            Events
          </EventTab>
          <NewTab id="1">
            News
          </NewTab>

        </Tab>
        {tabContents[tab].component}
      </InstantSearch>
      <FloatingActionButton />
      <NavBar value={navValue} onChange={(event, newValue) => {
        setNavValue(newValue);
      }} />
    </>
  )
}
