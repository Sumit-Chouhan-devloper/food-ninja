import blog_Nature_img from "../assets/images/png/blog-top-img.png";
import user_img from "../assets/images/png/userImg.png";
import { FoodTheoryItem } from "./common/Helper";
// Define a type for the AboutCard item
type FoodTheoryProps = {
  TheoryItems: FoodTheoryItem[];
};

const FoodTheory: React.FC<FoodTheoryProps> = ({ TheoryItems }) => {
  // const FoodTheory = () => {
  return (
    <div className="container lg:max-w-[800px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 pt-14 sm:pt-[93px]">
      <button className="ff_roboto text-[#DFE1E7] bg-[#283A61] font-medium text-sm py-1 px-4 rounded">
        Food Theory
      </button>
      <h1 className="ff_Merriweather text-black font-bold md:text-[46px] text-4xl py-4 leading-[120%]">
        What I Learned About Life and Food Backpacking Around Greece
      </h1>
      <p className="ff_roboto text-[#515151] text-sm pb-[18px]">
        Aug 1, 2021 • 7 min read
      </p>
      <img
        className="w-full min-h-[200px] sm:min-h-[268px] img_shadow rounded"
        height={268}
        width={800}
        src={blog_Nature_img}
        alt="nature"
      />
      <div className="flex items-center gap-[14px] mt-5">
        <img height={42} width={42} src={user_img} alt="user" />
        <p className="ff_Merriweather text-black text-sm font-bold pl-[14px]">
          George Costanza
        </p>
      </div>
      <p className="ff_roboto text-[#434343] font-medium leading-[160%] text-[22px] sm:text-[26px] py-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
        diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
        nulla risus id fames nascetur urna. Eros in neque tincidunt.
      </p>
      <p className="ff_roboto text-[#434343] text-[18px] sm:text-2xl leading-[160%] pb-8 md:pb-10">
        Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
        malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
        adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
        neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
        diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
        tellus diam.
      </p>
      <div className="bg-[#F5F5F5] px-5 py-5 sm:px-9 sm:py-8 rounded-[7px]">
        <h3 className="ff_Merriweather text-black text-[22px] font-bold sm:text-2xl leading-[160%] pb-4">
          In this article
        </h3>
        <p className="ff_Merriweather text-#303030 text-base sm:text-lg leading-[160%]">
          1.
          <span className="relative z-0 before:absolute before:bg-[#303030] before:h-[1px] before:w-full before:left-[1%] before:content-[''] before:bottom-[2px]">
            {" "}
            How to travel without spending a dime
          </span>
        </p>
        <p className="ff_Merriweather text-#303030 text-base sm:text-lg leading-[160%] py-4">
          2.
          <span className="relative z-0 before:absolute before:bg-[#303030] before:h-[1px] before:w-full before:left-[1%] before:content-[''] before:bottom-[2px] my-4">
            {" "}
            Get the most out of your credit card reward points
          </span>
        </p>
        <p className="ff_Merriweather text-#303030 text-base sm:text-lg leading-[160%]">
          3.
          <span className="relative z-0 before:absolute before:bg-[#303030] before:h-[1px] before:w-full before:left-[1%] before:content-[''] before:bottom-[2px]">
            {" "}
            Why you don’t need more than 3 pieces of clothing
          </span>
        </p>
      </div>
      <p className="ff_roboto text-lg sm:text-xl text-[#434343] leading-[160%] pt-8 md:pt-10">
        Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat
        in. Et nulla a magna amet, amet. Sodales malesuada laoreet bibendum
        neque amet turpis non. Ac arcu lacus turpis elementum imperdiet. Euismod
        purus, libero scelerisque vitae, libero fermentum urna, nunc.
      </p>
      {TheoryItems.map((item, id) => (
        <div key={id}>
          <h3 className="ff_Merriweather text-[#303030] font-bold leading-[160%] text-[22px] sm:text-2xl pt-[30px]">{item.foodTheoryHeading}</h3>
          <p className="ff_roboto text-[#434343] text-lg sm:text-xl leading-[160%] py-5">{item.foodTheoryPara1}</p>
          <p className="ff_roboto text-[#434343] text-lg sm:text-xl leading-[160%]">{item.foodTheoryPara2}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodTheory;
