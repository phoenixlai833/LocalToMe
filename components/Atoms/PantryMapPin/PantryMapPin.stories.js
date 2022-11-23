import PantryMapPin from "./index";
import { InstantSearch } from "react-instantsearch-hooks-web";

export default {
    title: "Atoms/PantryMapPin",
    component: PantryMapPin
}

const pantries = [{
    name: "Pantry 1",
    location: "123 Main St",
    description: "This is a pantry, it has food",
}];

export const Default = () => <PantryMapPin pantries={pantries} />
