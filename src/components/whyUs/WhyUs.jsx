import LifeWithPillUp from "./components/LifeWithPillUp";
import WhyUS_Offerings from "./components/WhyUs_Offerings";
import WhyUs_Quality from "./components/WhyUs_Quality";
import WhyUs_AboutPillUp from "./components/WhyUs_AboutPillUp";
import WhyUs_WithPillUp from "./components/WhyUs_WithPillUp";
import WhyUSBenifits from "./components/WhyUsBenifits";
import WhyUsHero from "./components/WhyUsHero";


const WhyUs = () => {
    return (
        <>
        <WhyUsHero />
        <WhyUSBenifits />
        <WhyUs_AboutPillUp />
        <WhyUs_WithPillUp />
        <WhyUs_Quality />
        <LifeWithPillUp />
        <WhyUS_Offerings />
        </>
    )
}

export default WhyUs;