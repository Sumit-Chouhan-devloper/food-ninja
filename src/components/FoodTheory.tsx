import { FoodTheoryItem } from "./common/Helper";
import { posts } from "../model/data";
type FoodTheoryProps = {
  TheoryItems: FoodTheoryItem[];
};

const FoodTheory: React.FC<FoodTheoryProps> = ({ TheoryItems }) => {
  return (
    <div className="container lg:max-w-[800px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 pt-14 sm:pt-[100px]">
      {posts.map((obj, index) => (
        <div key={index}>
          <button className="ff_roboto text-[#DFE1E7] bg-[#283A61] font-medium text-sm py-1 px-4 rounded hover:bg-transparent border hover:border-[#283A61] hover:text-[#283A61] transition-all duration-300">
            {obj.category}
          </button>
          <h1 className="ff_Merriweather text-black font-bold md:text-[46px] text-4xl py-4 leading-[120%]">
            {obj.title}
          </h1>
          <p className="ff_roboto text-[#515151] text-sm pb-[18px]">
            {obj.createdAt}
          </p>
          <img
            className="w-full min-h-[200px] sm:min-h-[268px] img_shadow rounded"
            height={268}
            width={800}
            src={obj.image}
            alt="nature"
          />
          <div className="flex items-center gap-[14px] mt-5">
            <img height={42} width={42} src={obj.author.image} alt="user" />
            <p className="ff_Merriweather text-black text-sm font-bold pl-[14px]">
              {obj.author.title}
            </p>
          </div>
          <p className="ff_roboto text-[#434343] font-medium leading-[160%] text-[22px] sm:text-[26px] py-6  sm:py-[30px]">
            {obj.description[0].subHeading}
          </p>
          <p className="ff_roboto text-[#434343] text-[18px] sm:text-2xl leading-[160%] pb-8 md:pb-10">
            {obj.description[0].description}
          </p>
          <div className="bg-[#F5F5F5] px-5 py-5 sm:px-9 sm:py-8 rounded-[7px] border border-[#DDD]">
            <h3 className="ff_Merriweather text-black text-[22px] font-bold sm:text-2xl leading-[160%] pb-2 sm:pb-4">
              In this article
            </h3>
            <p className="ff_Merriweather text-#303030 text-base sm:text-lg leading-[160%]">
              1.
              <a
                href="#"
                className="cursor-pointer inline-block underline hover:no-underline underline-offset-4"
              >
                How to travel without spending a dime
              </a>
            </p>
            <p className="ff_Merriweather text-#303030 text-base sm:text-lg leading-[160%] my-4">
              2.
              <a
                href="#"
                className="cursor-pointer inline-block underline underline-offset-4 hover:no-underline"
              >
                Get the most out of your credit card reward points
              </a>
            </p>
            <p className="ff_Merriweather text-#303030 text-base sm:text-lg leading-[160%]">
              3.
              <a
                href="#"
                className="cursor-pointer inline-block underline underline-offset-4 hover:no-underline"
              >
                Why you don’t need more than 3 pieces of clothing
              </a>
            </p>
          </div>
          <p className="ff_roboto text-lg sm:text-xl text-[#434343] leading-[160%] pt-8 md:pt-10">
            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
            erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
            bibendum neque amet turpis non. Ac arcu lacus turpis elementum
            imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
            urna, nunc.
          </p>
        </div>
      ))}
      {TheoryItems.map((item, id) => (
        <div key={id}>
          <h3 className="ff_Merriweather text-[#303030] font-bold leading-[160%] text-[22px] sm:text-2xl pt-[30px]">
            {item.foodTheoryHeading}
          </h3>
          <p className="ff_roboto text-[#434343] text-lg sm:text-xl leading-[160%] py-5">
            {item.foodTheoryPara1}
          </p>
          <p className="ff_roboto text-[#434343] text-lg sm:text-xl leading-[160%]">
            {item.foodTheoryPara2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FoodTheory;
