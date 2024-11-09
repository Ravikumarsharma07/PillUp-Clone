import { useState } from "react";

const WhyUs_WithPillUp = () => {
  const [switcher, setSwitcher] = useState(false);

  const handleClick = () => {
    setSwitcher(!switcher);
  };

  return (
    <section className=" sm:h-screen bg-gray-200 relative flex flex-col items-center py-10 max-sm:py-16 overflow-hidden">
      {/* div for background color */}
      <div
        className={`h-full sm:h-screen z-10 absolute left-0 top-0 transition-all ease-linear max-sm:duration-500 duration-[800ms]  ${
          switcher ? "w-0" : "w-full"
        } bg-[#dbcece]`}
      ></div>

      <div
        onClick={handleClick}
        className="cursor-pointer relative flex justify-around items-center z-50 h-[50px] w-[300px] sm:h-[60px] sm:w-[460px] rounded-full border border-white "
      >
        <div
          className={`transition-all ease-linear max-sm:duration-150 duration-300 absolute  ${
            switcher ? "left-0" : "left-[50%]"
          } h-[100%] rounded-full w-2/4 bg-white z-10`}
        ></div>
        <p
          className={`relative z-20 text-xl font-semibold w-16 ${
            switcher && "text-[#036666]"
          } `}
        >
          Without PillUp
        </p>
        <p
          className={`relative z-20 text-xl font-semibold w-16 ${
            !switcher && "text-[#036666]"
          } `}
        >
          With PillUp
        </p>
      </div>

      <img
        className="relative sm:bottom-10 top-[30px] z-40 scale-125 w-[320px] sm:w-[800px]"
        src={
          switcher
            ? "https://pillup.com/assets/Why%20Us/gif1.gif"
            : "https://pillup.com/assets/Why%20Us/gif2.gif"
        }
        alt="designs"
      />
    </section>
  );
};

export default WhyUs_WithPillUp;
