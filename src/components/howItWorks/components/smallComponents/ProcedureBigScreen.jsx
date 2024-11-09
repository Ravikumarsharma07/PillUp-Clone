import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import StepHIW from "./StepsHIW";
import { useState, useRef } from "react";

const ProcedureBigScreen = () =>{
    const verticalBar = useRef()
   
    const {scrollYProgress} = useScroll()
  
    const visibility = useTransform(scrollYProgress, [0,1], [105,-30])
  
    const [barHeight, setBarHeight] = useState(105)
  
    
    useMotionValueEvent(visibility, "change" ,
      (latest)=>{
        const number = Number(latest.toFixed(1))
          setBarHeight(number);
      }
    )
    return (
      <section className="relative bg-[#d0eaff] flex flex-col items-center py-16 overflow-hidden">
        {/* vertical animatied line which animates on scroll */}
        <div ref={verticalBar} className="absolute top-40 left-[49%] h-[84%] w-[6px] bg-[#2d2768] flex flex-col justify-between pt-[220px] box-border">
          <span className="relative right-[8.6px]  h-6 w-6 rounded-full bg-[#2d2768]"></span>
          <span className="relative right-[8.6px] top-[100px]  h-6 w-6 rounded-full bg-[#2d2768]"></span>
          <span className="relative right-[8.6px] top-[140px]  h-6 w-6 rounded-full bg-[#2d2768]"></span>
          <span className="relative right-[8.6px] top-[130px]  h-6 w-6 rounded-full bg-[#2d2768]"></span>
          <span className="relative right-[8.6px] top-[20px]  h-6 w-6 rounded-full bg-[#2d2768]"></span>
          <span className="relative right-[8.6px] top-[] h-6 w-6 rounded-full bg-[#2d2768]"></span>
        </div>
        <div style={{height:barHeight+"%"}} className={`transition-all duration-[10ms] ease-linear z-20 absolute bottom-[-50px] left-[47.6%] lg:left-[48.2%] w-[36px] bg-[#d0eaff] `}></div>
  
  
        <h2 className="text-3xl sm:text-5xl font-semibold relative z-50">How it Works</h2>
        <StepHIW
          imageSRC="https://pillup.com/assets/HowItWorks/timeline1.png"
          heading="Register & Upload your Prescription"
          details="Register now and upload prescription. Click here to know more about valid Prescription."
          />
        <StepHIW
          imageSRC="https://pillup.com/assets/HowItWorks/timeline2.png"
          heading="Confirmation Call from our Pharmacist "
          details="They monitor the entire process end-to-end right from examining prescription to preparing your medicine sachets."
          styleText="text-end"
          reverseAnimation={true}
        />
        <StepHIW
          imageSRC="https://pillup.com/assets/HowItWorks/timeline3.png"
          heading="Verify your PillUp Routine"
          details="Your personalised medicine schedule and invoice is prepared and sent to you."
        />
        <StepHIW
          imageSRC="https://pillup.com/assets/HowItWorks/timeline4.png"
          heading="Payment Confirmation"
          details="Once the payment is received, your medicine are organised in pre-sorted pouches with date and time mentioned"
          styleText="text-end"
          reverseAnimation={true}
       />
        <StepHIW
          imageSRC="https://pillup.com/assets/HowItWorks/timeline5.png"
          heading="Packed and Delivered"
          details="Dispenser is delivered at your doorstep with easy-to-read prescription."
        />
        <StepHIW
          imageSRC="https://pillup.com/assets/HowItWorks/timeline6.png"
          heading="Medicine Reminders"
          details="You start recieving app reminders as per your created PillUp Medicine schedule."
          styleText="text-end"
          reverseAnimation={true}
        />
      </section>
    );
}

export default ProcedureBigScreen