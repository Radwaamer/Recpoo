import About from "./pages/home/about/about";
import Categories from "./pages/home/categories/categories";
import Join from "./pages/home/join/join";
import Landing from "./pages/home/landing/landing";
import Random from "./pages/home/random/random";
import Subscribe from "./pages/home/subscribe/subscribe";

export default function Home() {
  return (
    <>
    <Landing />
    <Categories />
    <Random />
    <About />
    <Join />
    <Subscribe />
    </>
  )
}
