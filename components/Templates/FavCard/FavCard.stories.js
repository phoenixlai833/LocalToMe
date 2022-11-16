import FavCard from "./index";

export default {
    title: "Templates/FavCard",
    component: FavCard
}


const images = "http://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"


export const Template = () => <FavCard img={images}/>;



