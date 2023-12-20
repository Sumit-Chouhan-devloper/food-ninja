const MyNewsLatter = () => {
    return (
      <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 mt-7 mb-10 lg:pt-20" id="Privacy">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="lg:w-4/12 md:w-10/12">
            <div className="bg-[#283A61] rounded md:px-12 px-6 lg:px-10 py-[38px]">
              <h3 className="ff_Merriweather text-white font-bold text-center leading-[160%] max-w-[182px] mx-auto text-[22px] sm:text-2xl">
                Subscribe To Our Newsletter
              </h3>
              <p className="ff_roboto text-[#DFE6FF] text-center max-w-[328px] mx-auto sm:text-lg text-base font-medium leading-[160%] pb-4 pt-3">
                Get weekly food news, articles, and videos delivered to your
                inbox.
              </p>
              <form>
                <div className="text-center">
                  <input required
                    className="ff_roboto w-full text-[#605C59] font-medium placeholder:text-[#605C59] text-base sm:text-lg px-3 py-2 rounded outline-none"
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <button className="ff_roboto text-white bg-[#000638] text-base sm:text-lg font-medium leading-[160%] mt-5 rounded px-3 py-2 hover:bg-[white] hover:text-[#283A61] transition-all duration-300">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-4/12 w-full md:w-6/12 pt-6 lg:pt-0 pr-4 lg:pr-0 lg:pl-[40px]">
            <h4 className="ff_roboto text-black font-medium text-sm  pb-2 md:pb-7">
              POPULAR POSTS
            </h4>
            <p className="ff_Merriweather text-black text-sm leading-[160%]">
              How To Have Your Cake and Eat It Too: The Way of The Chicken Man
            </p>
            <p className="ff_Merriweather text-black text-sm leading-[160%] py-3 md:py-[22px]">
              My Grandma’s 30-year-old Recipe
            </p>
            <p className="ff_Merriweather text-black text-sm leading-[160%]">
              What I learned about cooking from Ratatoulie
            </p>
          </div>
          <div className="lg:w-4/12 w-full md:w-6/12 pt-6 lg:pt-0 md:pl-4 lg:pl-[60px]">
            <h4 className="ff_roboto text-black font-medium text-sm  pb-2 md:pb-7">
            Recent Posts
            </h4>
            <p className="ff_Merriweather text-black text-sm leading-[160%]">
              How To Have Your Cake and Eat It Too: The Way of The Chicken Man
            </p>
            <p className="ff_Merriweather text-black text-sm leading-[160%] py-3 md:py-[22px]">
              My Grandma’s 30-year-old Recipe
            </p>
            <p className="ff_Merriweather text-black text-sm leading-[160%]">
              What I learned about cooking from Ratatoulie
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyNewsLatter;
  