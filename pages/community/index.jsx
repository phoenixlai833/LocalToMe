import { useState } from "react";
import Search from "../../components/Search";
import Events from "../../components/Events";
import Newss from "../../components/Newss";

export default function Community() {
  const [searchIndex, setSearchIndex] = useState("prod_foodbank");
  const [tab, setTab] = useState(0);
  const [isAdd, setIsAdd] = useState(false);

  const tabContents = {
    0: <Events />,
    1: <Newss />,
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
    <div>
      <Search indexName={searchIndex} />
      <div className="tabs" onClick={handleChangeTab}>
        <p className="tab" id="0">Events</p>
        <p className="tab" id="1">News</p>
      </div>
      <button className="add-button" onClick={handleAdd}>Add</button>
      {tabContents[tab]}
      {isAdd && (
        <div>
          <h3>What do you want to create today?</h3>
          <button className="add-event-button" href="../events/add">
            Event
          </button>
          <button className="add-news-button" href="../news/add">
            News Article
          </button>
        </div>
      )}
      {tabContents[tab]}
    </div>
  );
}
