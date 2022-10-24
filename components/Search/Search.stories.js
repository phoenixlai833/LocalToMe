import Search from "./index"

export default {
    title: "Search",
    component: Search,
}

const i = 1;

export const Default = () => <Search indexName={i} />
export const Error = () => <Search indexName={i} />