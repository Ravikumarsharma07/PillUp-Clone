import AcUnitIcon from "@mui/icons-material/AcUnit";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useState } from "react";

const QuoteHIW = () => {
  return (
    <section className="bg-[#ffdfe4] h-max py-16 px-1 sm:px-16">
      <h2 className="text-3xl sm:text-5xl font-semibold text-center py-3">
        You are in good hands
      </h2>
      <div className="mt-24 flex flex-wrap justify-center gap-8 xl:gap-10 px-5">
        <QuoteCard
        style={{paddingBottom:"20px"}}
          svgIcon={<AcUnitIcon sx={{fontSize:"40px", margin:"0px 0px 10px 3px"}} />}
          heading="All in one"
          text="PillUp is a licensed pharmacy which also takes care of all your pharmacy needs including inhalers, vitamins, painkillers, and OTC medicines."
        />
        <QuoteCard
          svgIcon={<AutoModeIcon sx={{fontSize:"40px", margin:"0px 0px 10px 3px"}} />}
          heading="Clean and Automated"
          text="PillUp is a clean, hygienic, automated pharmacy, which packs your medicines under the supervision of pharmacists with minimal human interaction."
        />
        <QuoteCard
          svgIcon={<VerifiedUserIcon sx={{fontSize:"40px", margin:"0px 0px 10px 3px"}} />}
          heading="100% Safe "
          text="PillUp has established secure and stringent process with a team of pharmacists to ensure you have the right pills in the right pouches every time."
        />
      </div>
    </section>
  );
};




const QuoteCard = ({ svgIcon, heading, text }) => {
  const [cardHeight, setCardHeight] = useState(true)

  window.addEventListener("scroll", ()=>{
    if(window.innerWidth > 600){
    if(window.scrollY > 3900){
      setCardHeight(false)
    }
  }else{
    if(window.scrollY > 3150){
      setCardHeight(false)
    }
  }
  })

  return (
    <div
    className={`transition-all duration-300 ease-in bg-white shadow-xl ${cardHeight ? "h-[0px] overflow-hidden": "h-[260px] overflow-clip"} flex flex-col w-[300px] sm:w-[340px] p-4 sm:p-5 rounded-b-3xl`}>
      <div>{svgIcon}</div>
      <h3 className="opacity-80 text-lg sm:text-[23px] font-semibold py-1">{heading}</h3>
      <p className="opacity-70 sm:pt-2 font-serif text-[16px] sm:text-[18px]">{text}</p>
    </div>
  );
};



export default QuoteHIW;
