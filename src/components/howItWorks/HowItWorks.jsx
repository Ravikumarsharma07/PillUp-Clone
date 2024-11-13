import HowItWorks_Hero from "./components/HowItWorks_Hero";
import QuoteHIW from "./components/HowItWorksQuote";
import Procedure from "./components/Procedure";
import VideoHIW from "./components/Video_HIW";
import { useEffect } from "react";



const HowItWorks = () => {

    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"instant"})
    },[])
    return (
        <>
        <HowItWorks_Hero />
        <Procedure />
        <QuoteHIW />
        <VideoHIW />

        </>
    )
}

export default HowItWorks;