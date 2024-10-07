import PageOne from "./homeComp/pageOne";
import Chatbtn from "./homeComp/smallComponents/chatbtn";
import PageTwo from "./homeComp/pageTwo";
import PageThree from "./homeComp/pageThree";
import PageFour from "./homeComp/pageFour";
import PageFive from "./homeComp/pageFive";
import PageSix from "./homeComp/pageSix";
import PageSeven from "./homeComp/pageSeven";
import PageEight from "./homeComp/pageEight";


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
        <PageSeven />
        <PageEight />
        </>
    )
}
export default HomePage;