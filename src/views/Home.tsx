import MyHero from "../components/MyHero";
import Nav from "../components/common/Nav";
import About from "../components/About";
import {navLinks } from "../components/common/Helper";
import Footer from "../components/common/Footer";
import MyNewsLatter from "../components/common/MyNewsLatter";
import BackToTop from "../components/common/BackToTop";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackToTop />
      <Nav navLinks={navLinks}/>
      <MyHero />
      <About/>
      <MyNewsLatter />
      <Footer />
    </>
  );
};

export default Home;
