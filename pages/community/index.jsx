import { useState } from "react";
import Link from "next/link";
import EventsList from "../../components/EventsList";
import Newss from "../../components/Newss";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import { getEvents } from "../../server/database";
const searchClient = algoliasearch(
  "UOV96BHKDZ",
  "3bb3bff1b3db5e4bf329f4a0de0b3e3e"
);

export default function Community() {
  const [tab, setTab] = useState(0);
  const [isAdd, setIsAdd] = useState(false);

  const tabContents = {
    0: { component: <EventsList />, searchIndex: "prod_EVENTS"},
    1: { component: <Newss />, searchIndex: "prod_NEWS"},
  };

  const handleChangeTab = (e) => {
    if (e.target.id) {
      setTab(+e.target.id);
    }
  };

  const handleAdd = () => {
    setIsAdd(!isAdd);
  };

  return (
    <InstantSearch indexName={tabContents[tab].searchIndex} searchClient={searchClient}>
      <SearchBox />
      <div className="tabs" onClick={handleChangeTab}>
        <p className="tab" id="0">
          Events
        </p>
        <p className="tab" id="1">
          News
        </p>
      </div>
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
      {isAdd && (
        <div>
          <h3>What do you want to create today?</h3>
          <Link href="../events/add">
            <button>Event</button>
          </Link>
          <Link href="../news/add">
            <button>News Article</button>
          </Link>
        </div>
      )}
      {tabContents[tab].component}
    </InstantSearch>
  )
}

export async function getServerSideProps(context) {
  const eventData = await getEvents();
  const eventList = JSON.parse(JSON.stringify(eventData));
  console.log(JSON.stringify(eventList))

  return {
    props: {}, // will be passed to the page component as props
  };
}
