import MyHero from "../components/MyHero";
import Nav from "../components/common/Nav";
import About from "../components/About";
import { items } from "../components/common/Helper";
import Footer from "../components/common/Footer";
import MyNewsLatter from "../components/common/MyNewsLatter";

const Home = () => {
  return (
    <>
      <Nav />
      <MyHero />
      <About items={items} />
      <MyNewsLatter/>
      <Footer/>
    </>
  );
};

export default Home;
