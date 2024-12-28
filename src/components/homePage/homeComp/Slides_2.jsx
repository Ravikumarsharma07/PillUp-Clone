import {  useRef } from "react";
import Slide from "./smallComponents/homeSlide.jsx";
import { useScroll, useTransform, motion } from "framer-motion";

function Slides2_howItWorks() {
  return(
    <>
      {window.innerWidth < 1026 ? <ForMobile />: <ForBigScreen />}
    </>
  )
}


function ForBigScreen(){
  const slides = useRef();
  const { scrollYProgress } = useScroll({target:slides});
  const x = useTransform(scrollYProgress, [0,0.9], ["0%","-75%"])

  return (
    <section ref={slides} className="page-5-container">
    <div className="page-5-container-div">
    <motion.div style={{translateX:x,display:"flex", transition:"all 150ms ease"}}>
        <Slide
        bgColor="#D2DBFE"
        num="01"
        heading="You complete a simple sign-up process"
        text="We then verify the information you share while keeping it 100% confidential"
        bgColorImg="white"
        image="https://pillup.com/assets/login.png"
        alt="app ui"
      />
      <Slide
        bgColor="#FFD6A1"
        num="02"
        heading="Receive Confirmation Call"
        text="Receive Confirmation Call from our Pharmacist. They monitor the entire process end-to-end right from examining prescription to preparing your medicine sachets."
        bgColorImg="white"
        scale="scale-[2]"
        scaleForSmall="scale-[2.5]"
        position="relative"
        imgPosition="absolute"
        image="https://pillup.com/assets/HowItWorks/phonecall.png"
        alt="app ui"
      />
      <Slide
        bgColor="#CCE5EC"
        num="03"
        heading="We sort your & pack you medicines using our gold-standard machines"
        text="Your medicines are then packed in your personalised pouches labelled with your name, medicine name, and quantity, along with the time and date"
        scale="scale-[2.4]"
        scaleForSmall="scale-[2.4]"
        image="https://pillup.com/assets/sachet.png"
        alt="app ui"
      />
        <Slide
        bgColor="#FFC1A6"
        num="04"
        heading="We then dispatch your PillUp boxes to your doorstep."
        text="We even arrange automatic refills of your next delivery to ensure that you never run out of medication."
        bgColorImg="#CCE5EC"
        image="https://pillup.com/assets/HowItWorks/timeline3.png"
        alt="app ui"
        scale="scale-[1.6]"
        scaleForSmall="scale-[2]"
      />
    </motion.div>
    </div>
    </section>
  );
}



function ForMobile(){
  return (
    <div className="page-5-container-div">
        <Slide
        bgColor="#D2DBFE"
        num="01"
        heading="You complete a simple sign-up process"
        text="We then verify the information you share while keeping it 100% confidential"
        bgColorImg="white"
        image="https://pillup.com/assets/login.png"
        alt="app ui"
      />
      <Slide
        bgColor="#FFD6A1"
        num="02"
        heading="Receive Confirmation Call"
        text="Receive Confirmation Call from our Pharmacist. They monitor the entire process end-to-end right from examining prescription to preparing your medicine sachets."
        bgColorImg="white"
        imgSize="290px"
        position="relative"
        scaleForSmall='scale-[2.3]'
        imgPosition="absolute"
        image="https://pillup.com/assets/HowItWorks/phonecall.png"
        alt="app ui"
      />
      <Slide
        bgColor="#CCE5EC"
        num="03"
        heading="We sort your & pack you medicines using our gold-standard machines"
        text="Your medicines are then packed in your personalised pouches labelled with your name, medicine name, and quantity, along with the time and date"
        bgColorImg="transparent"
        image="https://pillup.com/assets/sachet.png"
        scaleForSmall='scale-[2.3]'
        imgSize="270px"
        alt="app ui"
      />
        <Slide
        bgColor="#FFC1A6"
        num="04"
        heading="We then dispatch your PillUp boxes to your doorstep."
        text="We even arrange automatic refills of your next delivery to ensure that you never run out of medication."
        bgColorImg="#CCE5EC"
        image="https://pillup.com/assets/HowItWorks/timeline3.png"
        alt="app ui"
        scaleForSmall='scale-[1.8]'
        imgSize="200px"
      />  
    </div>
  );
}

export default Slides2_howItWorks;
