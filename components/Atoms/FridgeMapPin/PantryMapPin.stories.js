import FridgeMapPin from "./index";
import { InstantSearch } from "react-instantsearch-hooks-web";

export default {
    title: "Atoms/FridgeMapPin",
    component: FridgeMapPin
}

const fridges = [{
    name: "fridges 1",
    location: "123 Main St",
    description: "This is a fridges, it has food",
}];

export const Default = () => <FridgeMapPin fridges={fridges} />
