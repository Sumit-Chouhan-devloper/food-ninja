import Nav from "../components/common/Nav";
import MyNewsLatter from "../components/common/MyNewsLatter";
import FoodTheory from "../components/FoodTheory";
import { KeepReadingItems, TheoryItems, navLinks } from "../components/common/Helper";
import KeepReading from "../components/KeepReading";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav navLinks={navLinks}/>
      <FoodTheory TheoryItems={TheoryItems} />
      <KeepReading KeepReadingItems={KeepReadingItems} />
      <MyNewsLatter />
      <Footer />
    </>
  );
};

export default Blog;
