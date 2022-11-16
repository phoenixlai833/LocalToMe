import FavoriteImage from "."

export default {
    title: "Atoms/FavoriteImage",
    component: FavoriteImage
}

const images = "http://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"

export const Default = () => <FavoriteImage img={images} />
