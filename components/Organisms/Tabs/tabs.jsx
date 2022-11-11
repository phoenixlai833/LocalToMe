import styled from "styled-components";

import { useEffect, useState } from "react";

export const EventTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

export const NewTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  border-bottom: 1.5px solid #d9d9d9;
`;


export default function Tabs({lefttxt='Event', tabId, righttxt='News' }) {

    const [tab, setTab] = useState(tabId);

    const handleChangeTab = (e) => {
        if (e.target.id) {
          setTab(+e.target.id);
        }
      };

    return <Tab onClick={handleChangeTab}>
            <EventTab id="0" tabId={tab}>{lefttxt}</EventTab>
            <NewTab id="1" tabId={tab}>{righttxt}</NewTab>
        </Tab>

}

