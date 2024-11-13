
import BrandStoryHero from "./components/BrandStoryHero";
import FunFactsBS from "./components/FunFactsBS";
import JoinTodayBS from "./components/JoinTodayBS";
import OurMissionBS from "./components/OurMissionBS";
import OurVisionBS from "./components/OurVisionBS";
import WhoWeAreBS from "./components/WhoWeAreBS";
import WhyWeDoItBS from "./components/WhyWeDoItBS";
import OurTeamBS from "./components/OurTeamBS";
import { useEffect } from "react";


const BrandStory = () => {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"instant"})
    },[])

    return (
        <>
        <BrandStoryHero />
        <OurMissionBS />
        <OurVisionBS />
        <FunFactsBS />
        <WhyWeDoItBS />
        <WhoWeAreBS />
        <OurTeamBS />
        <JoinTodayBS />
        </>
    )
}


export default BrandStory;