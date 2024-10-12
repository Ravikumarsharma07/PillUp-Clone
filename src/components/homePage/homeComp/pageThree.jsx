import { useEffect, useRef, useState } from "react";
import {  motion, useScroll, useTransform } from "framer-motion";
import "./styles/pageThree.css";
import EastIcon from "@mui/icons-material/East";


function PageThree() { 

  const [width , setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      setWidth(window.innerWidth);
    })
    return ()=>{
      window.removeEventListener("resize", ()=>{});
    }    
  },[width]);

  return (  
    <>
    {width < 576 ? <MainContentForMobile /> : <MainContentForBigScreen />}  
    </>    
  );
}


function MainContentForBigScreen(){
  const divContainer = useRef();
const { scrollYProgress } = useScroll({ target: divContainer });
const x = useTransform(scrollYProgress, [0, 0.9], ["33.3%", "-33.3%"]);

  return (
    <section className="box-container" ref={divContainer}>
    <div className="inner-div">
      <motion.div className="horizontal-slides" style={{ x, transition:"all 200ms ease"}}>
        <section className="slide-1">
          <div className="slide-1-medicine-image">
            <img
              src="https://pillup.com/assets/HorizontalSlider/1.png"
              alt="medicine"
            />
          </div>
          <div className="how-it-works-01">
            <p>How it Works</p>
            <p>01</p>
            <h3>Pre-sorted Medicine Doses</h3>
            <p>
              You get your medicines pre-sorted by time and date in ready to
              take pouches as (per your prescription plan). Time to throw away
              those ugly boxes.
            </p>
            <p>
              Scroll
              <EastIcon className="arrow-icon" />
            </p>
          </div>
        </section>

        <section className="slide-1">
          <div
            className="slide-1-medicine-image"
            style={{ backgroundColor: "#c9e4c5" }}
          >
            <img
              style={{ height: "450px" }}
              src="https://pillup.com/assets/HorizontalSlider/2.png"
              alt="medicine"
            />
          </div>
          <div className="how-it-works-01">
            <p>How it Works</p>
            <p>02</p>
            <h3>Medicine Reminders</h3>
            <p>
              You get timely reminders from us to take your medicines on
              Whatsapp, PillUp app, etc. Need more?
            </p>
            <p>
              Scroll
              <EastIcon className="arrow-icon" />
            </p>
          </div>
        </section>

        <section className="slide-1">
          <div
            className="slide-1-medicine-image"
            style={{ backgroundColor: "#ffd6a1" }}
          >
            <img
              style={{ height: "400px" }}
              src="https://pillup.com/assets/HorizontalSlider/3.png"
              alt="medicine"
            />
          </div>
          <div className="how-it-works-01">
            <p>How it Works</p>
            <p>03</p>
            <h3>Easy to read prescription</h3>
            <p>
              No need of a fancy medical degree to understand your medicine
              schedule
            </p>
            <p>
              
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  </section>
  )
}

function MainContentForMobile(){
  return (
    <div className="section-3-container-mobile-version">
    <section className="slide-1">
    <div className="slide-1-medicine-image">
      <img
        src="https://pillup.com/assets/HorizontalSlider/1.png"
        alt="medicine"
      />
    </div>
    <div className="how-it-works-01">
      <p>How it Works</p>
      <p>01</p>
      <h3>Pre-sorted Medicine Doses</h3>
      <p>
        You get your medicines pre-sorted by time and date in ready to
        take pouches as (per your prescription plan). Time to throw away
        those ugly boxes.
      </p>
      <p>
        Scroll
        <EastIcon className="arrow-icon" />
      </p>
    </div>
  </section>

  <section className="slide-1">
    <div
      className="slide-1-medicine-image"
      style={{ backgroundColor: "#c9e4c5",height:"max-content",padding:"50px 0px" }}
    >
      <img
        style={{ height: "340px",width:"330px"  }}
        src="https://pillup.com/assets/HorizontalSlider/2.png"
        alt="medicine"
      />
    </div>
    <div className="how-it-works-01">
      <p>How it Works</p>
      <p>02</p>
      <h3>Medicine Reminders</h3>
      <p>
        You get timely reminders from us to take your medicines on
        Whatsapp, PillUp app, etc. Need more?
      </p>
      <p>
        Scroll
        <EastIcon className="arrow-icon" />
      </p>
    </div>
  </section>

  <section className="slide-1">
    <div
      className="slide-1-medicine-image"
      style={{ backgroundColor: "#ffd6a1" }}
    >
      <img
        style={{ height: "350px", width:"330px" }}
        src="https://pillup.com/assets/HorizontalSlider/3.png"
        alt="medicine"
      />
    </div>
    <div className="how-it-works-01">
      <p>How it Works</p>
      <p>03</p>
      <h3>Easy to read prescription</h3>
      <p>
        No need of a fancy medical degree to understand your medicine
        schedule
      </p>

    </div>
  </section>
  </div>
  )
}

export default PageThree;
