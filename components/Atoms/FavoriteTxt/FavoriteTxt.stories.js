import FavoriteTxt from "./index"

export default {
    title: 'Atoms/FavoriteTxt',
    component: FavoriteTxt,
};

const title = "123 Food Bank";
const location = "1234 Main Street, Vancouver, BC";

export const Template = () => <FavoriteTxt title={title} location={location} />;





