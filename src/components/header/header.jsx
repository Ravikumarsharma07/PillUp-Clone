import { NavLink } from "react-router-dom";
// import "./header.css"
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Header() {
  const [toggleBtn, setToggleBtn] = useState(false);

  function clickEvent() {
    setToggleBtn(!toggleBtn);
  }

  // const NavLinks = [
  //   "WhyUs",
  //   "HowItWorks",
  //   "Blogs",
  //   "BrandStory",
  //   "AboutUs",
  // ];

  const NavLinks = [
    {link:"Why Us", path:"/whyus"},
    {link:"How It Works", path:"/HowItWorks"},
    {link:"Blogs", path:"/Blogs"},
    {link:"Brand Story", path:"/BrandStory"},
    {link:"About Us", path:"https://www.tatvacare.in/about/"},
  ]

  return (
    <>
      <header className="h-[110px] w-full flex gap-2 justify-between items-center px-4 md:px-6 lg:px-16 xl:px-12 2xl:px-20 z-50">
        <NavLink
          onClick={() => {
            setToggleBtn(false);
          }}
          to="/"
        >
          <img
            className="w-36 md:w-44"
            src="https://pillup.com/assets/logo.svg"
            alt="company logo"
          />{" "}
        </NavLink>
          {/* for small screens */}
        <div
          className={`${toggleBtn ? "h-max visible":"h-0 hidden"} z-50 md:hidden bg-blue-300 absolute top-0 left-0 flex flex-col gap-4 py-4 w-screen justify-between items-center`}
        >
          <div onClick={()=>setToggleBtn(false)} className="absolute cursor-pointer top-2 right-6 rotate-45 text-4xl">+</div>
          {NavLinks.map((link, index) => {
            return (
              <NavLink
                onClick={() => {
                  setToggleBtn(false);
                }}
                className={({ isActive }) =>
                  `${isActive ? "opacity-80 border-b-[3px] border-black" : ""} text-center h-max font-semibold text-lg md:text-xl`
                }
                key={index}
                to={`${link.path}`}
              >
                {link.link}
              </NavLink>
            );
          })}
        </div>


        <div
          className={`max-md:hidden flex gap-4 w-full justify-between xl:justify-center xl:gap-12 px-6 lg:px-12 mb-2`}
        >
          {NavLinks.map((link, index) => {
            return (
              <NavLink
                onClick={() => {
                  setToggleBtn(false);
                }}
                className={({ isActive }) =>
                  `${isActive ? "opacity-80 border-b-[3px] border-black" : "border-b-[0px]"} text-center h-max font-semibold text-lg md:text-xl`
                }
                key={index}
                to={`${link.path}`}
              >
                {link.link}
              </NavLink>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4 ">
          <div className="grid grid-cols-2 items-center w-[180px] h-10 md:w-[230px] md:h-12 border-[2px] border-black rounded-full">
            <a
              className="w-full flex justify-center "
              href="https://play.google.com/store/apps/details?id=com.pillup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:rotate-[10deg]"
                width={26}
                src="https://pillup.com/assets/android.svg"
                alt="android-logo"
              />
            </a>
            <a
              className="w-full flex justify-center border-l-2 border-black h-full"
              href="https://apps.apple.com/app/id6447748859"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="hover:rotate-[10deg]"
                width={26}
                src="https://pillup.com/assets/ios.svg"
                alt="ios-logo"
              />
            </a>
          </div>
          <a href="tel:+918920878094" className="call-icon">
            <img
                
              className="w-8 sm:w-10 hover:rotate-[10deg]"
              src="https://pillup.com/assets/callIcon.svg"
              alt="call icon"
            />
          </a>
        <button
          className="md:hidden z-0"
          onClick={() => {
            clickEvent();
          }}
        >
          <MenuIcon className="scale-125" />
        </button>
            </div>
      </header>
    </>
  );
}

export default Header;
