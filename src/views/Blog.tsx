
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import MyNewsLatter from "../components/common/MyNewsLatter";
import FoodTheory from "../components/FoodTheory";
import { KeepReadingItems, TheoryItems } from "../components/common/Helper";
import KeepReading from "../components/KeepReading";
const Blog = () => {
  return (
    <>
      <Nav />
      <FoodTheory TheoryItems={TheoryItems}/>
      <KeepReading KeepReadingItems={KeepReadingItems}/>
      <MyNewsLatter/>
      <Footer/>

    </>
  );
};

export default Blog;
