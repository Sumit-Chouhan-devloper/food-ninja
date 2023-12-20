import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const MyHero = () => {
  return (
    <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0"id="contact">
      <h1
        className="ff_Merriweather text-[#000638] font-black text-center md:text-5xl text-4xl pt-[92px] animate__animated"
        id="typed"
      >
        The Food Ninja Blog
      </h1>
      <p className="ff_roboto text-[#605C59] text-lg sm:text-xl text-center pt-[10px] pb-8 sm:pb-12">
        A blog about food, experiences, and recipes.
      </p>
      <div className="flex items-center justify-between border border-[#DDDDDD] max-w-[430px] mx-auto rounded-[5px] py-3 md:py-[14px] sm:pl-7 md:pe-6 px-3 hover:shadow-lg transition-all duration-300">
        <input
          className="ff_Merriweather text-[#5F5F5F] placeholder:text-[#5F5F5F] text-base sm:text-lg outline-none w-full pe-1"
          placeholder="Search for articles"
          type="text"
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-[#DDDDDD] cursor-pointer" />
      </div>
    </div>
  );
};

export default MyHero;
