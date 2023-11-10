import "@/styles/globals.css";
import Home from "@/Components/Home";
import Featured from "@/Components/Featured";
import Cards from "@/Components/Cards";
import Reviews from "@/Components/Reviews";
import Footer from "@/Components/Footer";

export default function App() {
  return (
    <>
      <Home />
      <Featured />
      <Cards />
      <Reviews />
      <Footer/>
    </>
  );
}
