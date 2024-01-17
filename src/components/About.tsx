import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../model/data";

const About = () => {
  const { id } = useParams();
  return (
    <div
      className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 mt-12 sm:mt-[40px]"
      id="about"
    >
      <div
        className="flex flex-wrap mb-12 items-center lg:gap-20 gap-10"
        id={id}
      >
        {posts.map((item, key) => (
          <Link to="/blog/" className="lg:w-[46%] w-full group" key={key}>
            <div className="mb-4 md:mb-0">
              <div className="overflow-hidden rounded">
                <img
                  height={510}
                  width={278}
                  className="w-full group-hover:scale-110 transition-all duration-300"
                  src={item.image}
                  alt="nature"
                />
              </div>
              <button className="ff_roboto text-[#DFE1E7] bg-[#283A61] font-medium text-sm py-[3px] px-4 rounded mt-5 mb-3 hover:bg-transparent border hover:border-[#283A61] hover:text-[#283A61] transition-all duration-300">
                {item.category}
              </button>
              <h3 className="ff_Merriweather text-black font-bold leading-[140%] text-[22px] sm:text-2xl">
                {item.title}
              </h3>
              <p className="ff_Merriweather text-[#515151] leading-[160%] pb-2 sm:pb-4">
                {item.createdAt}
              </p>
              <p className="ff_roboto text-[#434343] text-base leading-[160%]">
                {item.description[0].description}
              </p>
            </div>
            <div className="flex items-center mt-[30px]">
              <img height={42} width={42} src={item.author.image} alt="user" />
              <p className="ff_Merriweather text-black text-sm font-bold pl-[14px]">
                {item.author.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
