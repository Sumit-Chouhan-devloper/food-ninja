const Footer = () => {
  return (
    <>
    <div className="bg-[#F5F5F5] py-9">
        <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0">
          <div className="flex gap-4 sm:gap-6 justify-center container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0">
              <a className="ff_Merriweather text-[#544B44] text-sm" href="#">About</a>
              <a className="ff_Merriweather text-[#544B44] text-sm" href="#">Privacy Policy</a>
              <a className="ff_Merriweather text-[#544B44] text-sm" href="#">Contact</a>
          </div>
          <p className="ff_Merriweather text-[#3E3E3E] text-center font-bold pt-[26px]">Copyright © 2021 Food Ninja Blog. All Rights Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer