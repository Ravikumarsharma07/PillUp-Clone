import { useState } from "react"

function PlansPage(){

    const [isAnimating, setIsAnimating] = useState(false);

        if(window.innerWidth < 576){
            window.addEventListener("scroll", ()=>{
                if(window.scrollY > 450){
                    setIsAnimating(true);
                }
            })
        }else{
            window.addEventListener("scroll", ()=>{
                if(window.scrollY > 480){
                    setIsAnimating(true)
                }else{
                    setIsAnimating(false)
                }
            })
        }


    return (
        <div className=" bg-blue-200 h-max p-12 max-md:pt-24 md:p-16 xl:px-24 gap-10 flex max-md:flex-col-reverse justify-between items-center">
            <div className="md:w-2/5 max relative">
                <h2 className="text-2xl max-md:text-center md:text-[1.5rem] lg:text-[1.9rem] leading-[56px] lg:leading-[64px]">Free dose wise pouches, medicine reminders and delivery for First three months, you only pay for your medicines.</h2>
                <p className="max-md:text-center text-lg mt-4 md:mt-6">Only Rs.99/ month afterwards.</p>
            </div>
            
            <div className="relative md:right-10">
                <img className="w-44 md:w-72 relative z-50" src="https://pillup.com/assets/sachet%202.png" alt="medicine-pack" />
                <img className={`${isAnimating ? "top-[-38px] left-[-60px] md:left-[-70px] rotate-[-25deg]" : "rotate-0"} z-0  transition-all duration-200 ease-in w-44 md:w-72 absolute top-0 left-0`} src="https://pillup.com/assets/sachet%202.png" alt="medicine-pack" />
                <img className={`${isAnimating ? "top-[-38px] left-[60px] md:left-[70px] rotate-[25deg]" : "rotate-0"} z-0 transition-all duration-200 ease-in w-44 md:w-72 absolute top-0 left-0`} src="https://pillup.com/assets/sachet%202.png" alt="medicine-pack" />
            </div>
        </div>
    )
}


export default PlansPage