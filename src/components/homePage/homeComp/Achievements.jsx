import { useEffect, useState } from "react";
import "./styles/pageSix.css"

function Achievements() {

    const [classForImg, setClassForImg] = useState("");
    const [percent, setPercent] = useState(0);
    const [pouches, setPouches] = useState(0);
    const [peoples, setPeoples] = useState(0);

    const [trigger , setTrigger] = useState(false);

    function toShowPercent(){
        if(trigger){
            let count1 = 0;
            const myInterval = setInterval(()=>{
              if(count1 < 80){
                setPercent((prev) =>{return prev+1})
                count1++;
              }else{
                clearInterval(myInterval)
              }
            }, 30)

            let count2 = 0 
            const intervalForPouches = setInterval(() => {
              if(count2 < 100000){
                setPouches(prev => prev+500) 
                count2 = count2 + 500                             
              }else{
                clearInterval(intervalForPouches);
              }
            }, 10);
              
            let count3 = 0;
            const intervalForProples = setInterval(()=>{
              if(count3 < 1000){
                setPeoples(prev => prev+5);
                count3 = count3 + 5
              }else{
                clearInterval(intervalForProples);
              }
                
            },15)

        }
    }
    
    useEffect(()=>{

        toShowPercent() 
    },[trigger])   



    if(window.innerWidth < 576){
      window.addEventListener("scroll", ()=>{
        if(window.scrollY > 6700){
            setClassForImg("show-image");
            setTrigger(true);
        }
    })
    }else{
      window.addEventListener("scroll", ()=>{
        if(window.scrollY > 4500){
            setClassForImg("show-image");
            setTrigger(true);
        }
    })
    }

  return (
    <section className="home-page-6">
      <h2>
        We are enabling thousands of people to live longer and better , one
        pouch at a time.
      </h2>
      <div>
        <div>
          <img className={classForImg} src="https://pillup.com/assets/achiev1.svg" alt="med kit" />
          <h3>{percent}%</h3>
          <p>Started taking medicines on time</p>
        </div>
        <div>
          <img className={classForImg} src="https://pillup.com/assets/accurate-icon.svg" alt="target" />
          <h3>0%</h3>
          <p>Error in taking medicines</p>
        </div>
        <div>
          <img className={classForImg} src="https://pillup.com/assets/achiev2.svg" alt="packets" />
          <h3>+{pouches.toLocaleString()}</h3>
          <p>Pouches packed</p>
        </div>
        <div>
          <img className={classForImg} src="https://pillup.com/assets/achiev3.svg" alt="customers" />
          <h3>+{peoples}</h3>
          <p>Happy customers</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
