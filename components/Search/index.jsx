import algoliasearch from "algoliasearch/lite";
import RenderResult from "next/dist/server/render-result";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "UOV96BHKDZ",
  "3bb3bff1b3db5e4bf329f4a0de0b3e3e"
);

export default function Search() {
  return (
    <>
      <InstantSearch indexName="prod_foodbank" searchClient={searchClient}>
        <SearchBox />
      </InstantSearch>
    </>
  );
}
