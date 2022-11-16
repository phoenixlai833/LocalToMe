import styled from "styled-components";

import { useEffect, useState } from "react";

export const AllTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

export const FavorTab = styled.p`
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

export default function Tabs({ tab, tabList, onChangeTab }) {
  const tabComponents = tabList.map((singleTab, index) => <FavorTab key={index} id={index} tabId={tab} onClick={() => onChangeTab(index)}>{singleTab}</FavorTab>)

  return <Tab>
    {tabComponents}

  </Tab>

}

