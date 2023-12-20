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
        <div
          key={id}
          className="flex flex-wrap justify-center items-center pt-8 md:pt-[30px]"
        >
          <div className="md:w-4/12 sm:w-10/12 w-full">
            <img
              height={177}
              width={266}
              className="w-full img_shadow rounded"
              src={item.Image}
              alt="keep reading"
            />
          </div>
          <div className="md:w-8/12 md:pl-[34px] pt-4">
            <h3 className="ff_Merriweather text-[#303030] text-[22px] sm:text-2xl font-bold leading-[160%]">
              {item.Heading}
            </h3>
            <p className="ff_roboto text-[#4F4F4F] text-base sm:text-lg leading-[160%] md:pt-2">
              {item.para}
            </p>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap justify-center bg-[#F5F5F5] items-center rounded border border-[#DDD] sm:py-8 md:py-11 sm:px-5 md:px-8 px-4 py-5 lg:mt-12 mt-8">
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
