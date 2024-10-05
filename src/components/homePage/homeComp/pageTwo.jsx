import { useState } from "react"
import "./styles/pageTwo.css"

function PageTwo(){

    const [imageId, setId] = useState("");
    
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 620){
                setId("animate-image")
            }else{
                setId("")
            }
        })

    return (
        <div className="home-section-two">
            <div className="text-content-page2" >
                <img className={imageId+"-emoji"} src="https://pillup.com/assets/smileIcon.svg" alt="face-emoji" />
                <h2>Free dose wise pouches, medicine reminders and delivery for First three months, you only pay for your medicines.</h2>
                <p>Only Rs.99/ month afterwards.</p>
            </div>
            <div className="packet-images">
                <img id="animate-image-default" src="https://pillup.com/assets/sachet%202.png" alt="medicine-pack" />
                <img className="animate-image" id={imageId+1} src="https://pillup.com/assets/sachet%202.png" alt="medicine-pack" />
                <img className="animate-image" id={imageId+2} src="https://pillup.com/assets/sachet%202.png" alt="medicine-pack" />
            </div>
        </div>
    )
}


export default PageTwo