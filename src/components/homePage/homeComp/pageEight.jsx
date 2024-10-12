import "./styles/pageEight.css";
import {useState} from "react";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

function PageEight() {

  return (
    <section className="page-8-container">
      <div className="upper-curved-div"></div>

      <div className="page-8-main-contnent">
        <h2>Why PillUp is needed in every Indian house</h2>
        <div className="anchor-tags-container">
            <AnimateBox icon={<IconEmojiWink className="svg-animation-box" />} text="Automatically fill your next dose" />
            <AnimateBox icon={<AccessibilityIcon className="svg-animation-box"/>} text="Helps elders become more independent" />
            <AnimateBox icon={<AccessAlarmsIcon className="svg-animation-box" />}  text="Ensures medicines are taken on time" />
            <AnimateBox icon={<AttachMoneyIcon className="svg-animation-box" />} text="Offers discounts on order and delivery" />
            <AnimateBox icon={<AccessAlarmsIcon className="svg-animation-box" />}  text="Avoids over or under dosage of medicines" />
        </div>
        <img src="https://pillup.com/assets/Benefits/bgElement.svg" height="130px" alt="" />
        <img src="https://pillup.com/assets/Benefits/bgElement.svg" height="130px" alt="" />
        
      </div>

      <img
        src="https://pillup.com/assets/benefitElement2.svg"
        alt="section-8 design"
      />
    </section>
  );
}

function AnimateBox(props){

  const [isVisible, setvisible] = useState(true);

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 5520 ){
      setvisible(false);
    }
    if(window.innerWidth < 800){
      if(window.scrollY < 500){
        setvisible(false);
      }
    }
  })

  if(window.innerWidth < 576){
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 8420 ){
        setvisible(false);
      }
    })
  }else{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 5520 ){
        setvisible(false);
      }
    })
  }

    return(
        <a href="#">
          <div className={isVisible ? "section-8-animation" : "section-8-animation-visible"}>
             <div>{props.icon}</div>
             <h3>{props.text}</h3>
          </div>         
        </a>
    )
}

export default PageEight;


function IconEmojiWink(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
      <path d="M4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 01.68.194.934.934 0 00.813.493c.339 0 .645-.19.813-.493a.5.5 0 11.874.486A1.934 1.934 0 0110.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 01.194-.68z" />
    </svg>
  );
}


