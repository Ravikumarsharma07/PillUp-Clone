import { motion } from "framer-motion";

const StepHIW = ({
  imageSRC,
  heading,
  details,
  styleText,
  reverseAnimation,
}) => {
  const animationForTabScreenIMG = reverseAnimation ? "20px" : "-20px";
  const animationForLaptopScreenIMG = reverseAnimation ? "80px" : "-80px";

  const animationForTabScreenTXT = reverseAnimation ? "-20px" : "20px";
  const animationForLaptopScreenTXT = reverseAnimation ? "-80px" : "80px";

  return (
    <div className="w-full h-[70%] my-16  flex justify-center md:gap-10 lg:gap-20 xl:gap-16 odd:flex-row-reverse even:flex-row overflow-visible">
      <motion.div
        className="relative transition-all duration-400 ease-linear h-max w-max"
        initial={{
          opacity: 0,
          translateX:
            window.innerWidth > 1200
              ? animationForLaptopScreenIMG
              : animationForTabScreenIMG,
        }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
        }}
        viewport={{
          margin: "-390px",
          once: true,
        }}
      >
        <img
          className="md:w-[230px] lg:w-[400px] xl:w-[480px] xl:odd:mx-10"
          src={imageSRC}
          alt="steps 'how it works'"
        />
      </motion.div>
      <motion.div
        className="md:w-[300px] lg:w-[450px] xl:w-[600px] sm:px-2 xl:px-10 flex flex-col justify-center box-border transition-all duration-400 ease-linear "
        initial={{
          opacity: 0,
          translateX:
            window.innerWidth > 1200
              ? animationForLaptopScreenTXT
              : animationForTabScreenTXT,
        }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
        }}
        viewport={{
          margin: "-360px",
          once: true,
        }}
      >
        <h3
          className={`${styleText} md:text-[24px] lg:text-4xl mb-5 font-semibold text-[#2d2768]`}
        >
          {heading}
        </h3>
        <p className={`${styleText} md:text-[17px]  lg:text-lg font-serif`}>
          {details}
        </p>
      </motion.div>
    </div>
  );
};





export const StepHIW_SmallScreen = ({imageSRC, heading, details}) => {
  return (
    <div className="w-full  my-14  flex justify-center items-center md:gap-10 lg:gap-20 xl:gap-16 flex-col overflow-visible">
      <div className="relative transition-all duration-400 ease-linear h-max w-max">
        <img
          className="w-[260px] md:w-[230px] lg:w-[400px] xl:w-[480px] xl:odd:mx-10"
          src={imageSRC}
          alt="steps 'how it works'"
        />
      </div>
      <div className="w-full md:w-[300px] lg:w-[450px] xl:w-[600px] px-6 sm:px-2 xl:px-10 flex flex-col justify-center box-border transition-all duration-400 ease-linear ">
        <h3
          className={`text-[22px] text-center lg:text-4xl my-2 sm:mb-5 font-semibold text-[#2d2768]`}
        >
          {heading}
        </h3>
        <p className={`text-[16px] text-center lg:text-lg font-serif`}>
          {details}
        </p>
      </div>
    </div>
  );
};

export default StepHIW;
