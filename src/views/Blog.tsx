import Nav from "../components/common/Nav";
import MyNewsLatter from "../components/common/MyNewsLatter";
import FoodTheory from "../components/FoodTheory";
import { KeepReadingItems, TheoryItems } from "../components/common/Helper";
import KeepReading from "../components/KeepReading";
import BackToTop from "../components/common/BackToTop";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackToTop />
      <Nav />
      <FoodTheory TheoryItems={TheoryItems} />
      <KeepReading KeepReadingItems={KeepReadingItems} />
      <MyNewsLatter />
      <Footer />
    </>
  );
};

export default Blog;
