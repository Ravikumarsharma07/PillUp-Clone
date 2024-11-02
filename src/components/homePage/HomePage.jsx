import HeroSection from "./homeComp/heroSection";
import SlidesHowItWorks from "./homeComp/slidesHowItWorks";
import ContactPage from "./homeComp/contactPage";
import Slides2_howItWorks from "./homeComp/Slides_2";
import HomeBlogPage from "./homeComp/homeBlogPage";
import PlansPage from "./homeComp/PlansPage";
import Achievements from "./homeComp/Achievements";
import OurPartners from "./homeComp/OurPartners";
import BenefitsPage from "./homeComp/BenifitsPage";
import Testimonials from "./homeComp/testimonials";
import JoinToday from "./homeComp/JoinToday";




const  HomePage = () => {
    
    return(
        <>
        <HeroSection />
        <PlansPage />
        <SlidesHowItWorks />  
        <ContactPage />
        <Slides2_howItWorks />
        <Achievements />
        <OurPartners />
        <BenefitsPage />
        <Testimonials /> 
        <HomeBlogPage />
        <JoinToday />
        </>
    )
}
export default HomePage;