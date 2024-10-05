import PageOne from "./homeComp/pageOne";
import Chatbtn from "./homeComp/smallComponents/chatbtn";
import PageTwo from "./homeComp/pageTwo";
import PageThree from "./homeComp/pageThree";
import PageFour from "./homeComp/pageFour";
import PageFive from "./homeComp/pageFive";
import PageSix from "./homeComp/pageSix";


function HomePage(){
    
    return(
        <>
        <PageOne />
        <Chatbtn />
        <PageTwo />
        <PageThree />  
        <PageFour />
        <PageFive />
        <PageSix />
        </>
    )
}
export default HomePage;