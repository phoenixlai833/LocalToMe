import NavBar from "../../components/NavBar"
import TopBanner from "../../components/TopBanner"

export default function Favourites() {
   return <div>
      <TopBanner text="Favourites" />
      <NavBar value={3} />
   </div>
}