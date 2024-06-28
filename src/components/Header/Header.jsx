import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div>
        <div className="m-28">
        <Navbar/>
        </div>
        <Hero/>
    </div>
  )
}
