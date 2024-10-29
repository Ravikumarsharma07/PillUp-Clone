import HeroSection from "./homeComp/heroSection";
import Chatbtn from "./homeComp/smallComponents/chatbtn";
import SlidesHowItWorks from "./homeComp/slidesHowItWorks";
import ContactPage from "./homeComp/contactPage";
import Slides2_howItWorks from "./homeComp/Slides_2";
import HomeBlogPage from "./homeComp/homeBlogPage";
import PlansPage from "./homeComp/PlansPage";
import Achievements from "./homeComp/Achievements";
import OurPartners from "./homeComp/OurPartners";
import BenefitsPage from "./homeComp/BenifitsPage";
import Testimonials from "./homeComp/testimonials";




const  HomePage = () => {
    
    return(
        <>
        <HeroSection />
        <Chatbtn />
        <PlansPage />
        <SlidesHowItWorks />  
        <ContactPage />
        <Slides2_howItWorks />
        <Achievements />
        <OurPartners />
        <BenefitsPage />
        <Testimonials /> 
        <HomeBlogPage />
        </>
    )
}
export default HomePage;