import { footerLinks } from "./Helper";

const Footer = () => {

  return (
    <>
      <div className="bg-[#F5F5F5] py-9" id="footer">
        <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0">
          <div className="flex gap-4 sm:gap-6 justify-center container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                className="ff_Merriweather text-[#544B44] text-sm hover:underline hover:underline-offset-4 transition-all duration-300"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="ff_Merriweather text-[#3E3E3E] text-sm text-center font-bold pt-[26px] leading-[160%]">
            Copyright © {new Date().getFullYear()} Food Ninja Blog. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
