import React from "react";
import { AboutCardItem } from "./common/Helper";
// Define a type for the AboutCard item
type AboutProps = {
  items: AboutCardItem[];
};

const About: React.FC<AboutProps> = ({ items }) => {
  return (
    <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 mt-12 sm:mt-[80px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 xl:gap-[80px] md:h-[603px] mb-12">
        {items.map((item) => (
          <div className="md:w-6/12 w-full flex flex-col justify-between h-full" key={item.id}>
            <div className="mb-4 md:mb-0">
                <img
                  height={510}
                  width={278}
                  className="w-full"
                  src={item.nature_img}
                  alt="nature"
                />
                <button className="ff_roboto text-[#DFE1E7] bg-[#283A61] font-medium text-sm py-1 px-3 rounded mt-5 mb-3">
                  {item.btn}
                </button>
                <h3 className="ff_Merriweather text-black font-bold leading-[140%] text-[22px] sm:text-2xl">
                  {item.heading}
                </h3>
                <p className="ff_Merriweather text-[#515151] leading-[160%] pb-2 sm:pb-4">
                  {item.timePara}
                </p>
                <p className="ff_roboto text-[#434343] text-base leading-[160%]">
                  {item.mainPara}
                </p>
            </div>
            <div className="flex items-center">
              <img height={42} width={42} src={item.bottomImg} alt="user" />
              <p className="ff_Merriweather text-black text-sm font-bold pl-[14px]">{item.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
