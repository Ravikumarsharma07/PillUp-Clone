import { useEffect, useState } from "react";
import "./styles/pageSix.css"

function PageSix() {

    const [classForImg, setClassForImg] = useState("");
    const [percent, setPercent] = useState(0);
    const [pouches, setPouches] = useState(99997);
    const [peoples, setPeoples] = useState(982);

    const [trigger , setTrigger] = useState(false);

    function toShowPercent(){
        if(trigger){
            console.log("yes")
            console.log(trigger)

            let count = 0;
            const myInterval = setInterval(()=>{
              if(count < 80){
                setPercent((prev) =>{return prev+1})
                count++;
              }else{
                clearInterval(myInterval)
              }
            }, 10)

            const intervalForPouches = setInterval(() => {
                setPouches(prev => prev+1)                                
            }, 300);

            const intervalForProples = setInterval(()=>{
                setPeoples(prev => prev+1);
            },50)
            setTimeout(() => {
                // clearInterval(myInterval);
                clearInterval(intervalForPouches);
                clearInterval(intervalForProples);
            }, 900);

        }else{
            console.log("")
        }
    }
    useEffect(()=>{
        toShowPercent() 
    },[trigger])   

    window.addEventListener("scroll", ()=>{
        console.log(window.scrollY)
        if(window.scrollY > 4500){
            setClassForImg("show-image");
            setTrigger(true);
        }
    })

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

export default PageSix;
