import algoliasearch from "algoliasearch/lite";
import RenderResult from "next/dist/server/render-result";
import { InstantSearch, SearchBox, useHits } from "react-instantsearch-hooks-web";
import React from "react";
import styled from 'styled-components';


const SearchBar = styled.div`
    background-color: #108928;
    border: none;
    color: black;
    border-radius: 10px;
    width: 80%;
    height: 50px;
    font-size: large;
`;


const searchClient = algoliasearch(
  "UOV96BHKDZ",
  "3bb3bff1b3db5e4bf329f4a0de0b3e3e"
);

export function CustomHits(props) {
  const { hits, results, sendEvent } = useHits(props);

  console.log('idk', hits, results, sendEvent)
  return <>{/* Your JSX */}</>;

}

export default function Search({ indexName }) {

  return (

    <SearchBar>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
      </InstantSearch>
    </SearchBar>
  );
}


