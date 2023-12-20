import { useEffect, useState } from "react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:mt-9 sm:mt-6 mt-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="ff_Merriweather text-[#000638] font-black text-2xl"
            >
              Food Ninja
            </Link>
            <div className="hidden sm:block">
              <div className="gap-5 flex items-center">
                <Link
                  className="ff_roboto text-[#605C59] text-lg hover:text-[#283A61] transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-[#283A61] before:left-[50%] before:content-['']"
                  to="/Blog"
                >
                  Blog
                </Link>
                <Link
                  className="ff_roboto text-[#605C59] text-lg hover:text-[#283A61] transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-[#283A61] before:left-[50%] before:content-['']"
                  to="/About"
                >
                  About
                </Link>
                <Link
                  className="ff_roboto text-[#605C59] text-lg hover:text-[#283A61] transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-[#283A61] before:left-[50%] before:content-['']"
                  to="/Contact"
                >
                  Contact
                </Link>
                <button className="ff_roboto text-white bg-[#283A61] text-lg rounded-[29px] py-1 px-4 hover:bg-transparent hover:text-[#283A61] border hover:border-[#283A61] transition-all duration-300">
                  Log in
                </button>
              </div>
            </div>

            <div className="flex sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="relative z-10"
              >
                {!isOpen ? (
                  <Bars3CenterLeftIcon className="h-8 w-8 text-[#283A61]" />
                ) : (
                  <XMarkIcon className="h-8 w-8 text-[#283A61]" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:opacity-0 transition-all duration-300  fixed bg-[#F5F5F5] h-screen w-screen z-0  top-0 ${
            isOpen ? " translate-x-0" : "translate-x-[-100%]"
          }`}
          id="mobile-menu"
        >
          <div className="gap-5 flex items-center flex-col justify-center h-full">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="ff_roboto text-[#605C59] text-lg hover:text-[#283A61] transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-[#283A61] before:left-[50%] before:content-['']"
              to="/Blog"
            >
              Blog
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="ff_roboto text-[#605C59] text-lg hover:text-[#283A61] transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-[#283A61] before:left-[50%] before:content-['']"
              to="/Blog"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="ff_roboto text-[#605C59] text-lg hover:text-[#283A61] transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-[#283A61] before:left-[50%] before:content-['']"
              to="/Blog"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ff_roboto text-white bg-[#283A61] text-lg rounded-[29px] py-1 px-4 hover:bg-transparent hover:text-[#283A61] border hover:border-[#283A61] transition-all duration-300"
            >
              Log in
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
