import { useState } from "react";

const JoinTodayBS = () => {
  const [isTransition, setTransition] = useState(false);

  if (window.innerWidth < 576) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 7800) {
        setTransition(true);
      }
    });
  } else {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5100) {
        setTransition(true);
      }
    }); 
  }

  return (
    <section className="flex flex-col justify-center items-center bg-[#d7e8d5] h-[70vh] sm:p-24 px-2 py-6">
      <h3
        className={`text-[22px] sm:text-[35px] font-medium sm:font-semibold tracking-wide text-center px-1 sm:px-16 font-sans leading-10 sm:leading-[70px] `}
      >
        <span className={`custom-transition delay-0   ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}>Your</span>
        <span className={`custom-transition delay-100 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> online</span>
        <span className={`custom-transition delay-200 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> pharmacy</span>
        <span className={`custom-transition delay-300 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> that</span>
        <span className={`custom-transition delay-400 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> sorts,</span>
        <span className={`custom-transition delay-500 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> packs</span>
        <span className={`custom-transition delay-600 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> and</span>
        <span className={`custom-transition delay-700 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> delivers</span>
        <span className={`custom-transition delay-800 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> all</span>
        <span className={`custom-transition delay-900 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> your</span>
        <span className={`custom-transition delay-600 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> medicine &</span>
        <span className={`custom-transition delay-1000 ${ isTransition ? "opacity-100 top-[0px]" : "opacity-0 top-[30px]"} `}> supplements.</span>
      </h3>
      <p
        className={`transition-all duration-500 delay-1200 ease-in ${
          isTransition
            ? "opacity-100 translate-y-[-20px]"
            : "opacity-0 translate-y-[20px]"
        } mt-10 sm:mt-4 ml-1 text-2xl`}
      >
        Try for free : )
      </p>
      <a href="https://api.whatsapp.com/send/?phone=%2B918920878094&text=Hi+I+am+interested+in+ordering+from+PillUp&type=phone_number&app_absent=0">
        <button className="h-[55px] w-max px-10 text-white text-lg bg-[#005656] hover:bg-[#174444] rounded-full">
          Join Today
        </button>
      </a>
    </section>
  );
};

export default JoinTodayBS;
