import { keepReadingItem } from "./common/Helper";
import man_img from "../assets/images/png/keep_reading_men.png"
type KeepReadingProps = {
  KeepReadingItems: keepReadingItem[];
};

const KeepReading: React.FC<KeepReadingProps> = ({ KeepReadingItems }) => {
  // const KeepReading = () => {
  return (
    <div className="container lg:max-w-[800px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 pt-8 md:pt-10 lg:pt-12 mb-12 lg:mb-0">
      <h2 className="ff_Merriweather text-[#303030] font-bold text-[32px] sm:text-3xl">
        Keep reading
      </h2>
      {KeepReadingItems.map((item, id) => (
        <a href="#"
          key={id}
          className="flex flex-wrap justify-center group items-center mt-8 md:mt-[30px]"
        >
          <div className="md:w-4/12 sm:w-10/12 w-full md:pr-4">
            <div className="overflow-hidden rounded">
              <img
                height={177}
                width={266}
                className="w-full img_shadow rounded group-hover:scale-105 transition-all duration-300"
                src={item.Image}
                alt="keep reading"
              />
            </div>
          </div>
          <div className="md:w-8/12 md:pl-[18px] pt-4">
            <h3 className="ff_Merriweather text-[#303030] group-hover:underline-offset-4 group-hover:underline text-[22px] sm:text-2xl font-bold leading-[160%] transition-all duration-300">
              {item.Heading}
            </h3>
            <p className="ff_roboto text-[#4F4F4F] text-base sm:text-lg leading-[160%] md:pt-2 group-hover:underline-offset-4 group-hover:underline transition-all duration-300">
              {item.para}
            </p>
          </div>
        </a>
      ))}
      <div className="flex flex-wrap justify-center bg-[#F5F5F5] items-center rounded border hover:shadow-lg transition-all duration-300 border-[#DDD] sm:py-8 md:py-11 sm:px-5 md:px-8 px-4 py-5 lg:mt-12 mt-8">
        <div className="sm:w-3/12"><img height={150} width={150} className="w-full" src={man_img} alt="man" /></div>
        <div className="sm:w-9/12 w-full sm:pl-7">
          <h3 className="ff_Merriweather text-black text-center sm:text-start text-[22px] sm:text-2xl leading-[160%] pt-3 sm:pt-0">Written by George Costanza</h3>
          <p className="ff_roboto text-black text-base text-center sm:text-start sm:text-lg leading-[160%] sm:pt-1 md:pt-3">
            Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices
            molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,
            elementum. Nunc potenti lectus in erat ligula cras. Eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeepReading;
