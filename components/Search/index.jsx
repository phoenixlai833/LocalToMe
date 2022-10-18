import algoliasearch from "algoliasearch/lite";
import RenderResult from "next/dist/server/render-result";
import { InstantSearch, SearchBox, useHits } from "react-instantsearch-hooks-web";
import React from "react";
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
    <>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
      </InstantSearch>
    </>
  );
}
