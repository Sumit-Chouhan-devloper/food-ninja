import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loaderElement = document.getElementById("none");
      if (loaderElement) {
        loaderElement.classList.add("hidden");
        document.body.style.overflow = "unset";
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="none"
      className="fixed inset-0 flex flex-col justify-center items-center text-[#283A61] backdrop-blur-md text-2xl md:text-3xl font-semibold z-50 transition-opacity duration-500 ease-in-out"
    >
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
