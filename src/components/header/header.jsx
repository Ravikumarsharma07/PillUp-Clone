import { NavLink } from 'react-router-dom';
import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header(){
    const [toggleBtn , setToggleBtn] = useState(false);

    function clickEvent(){
        setToggleBtn(!toggleBtn);
    }


    return (
        <>
        <header>
            
            <NavLink className='company-logo-box' onClick={()=>{setToggleBtn(false)}} to="/" ><img className="company-logo" src="https://pillup.com/assets/logo.svg" alt="company logo" /> </NavLink>
            <div className={!toggleBtn?"nav-links-container":"nav-links-container-active"} >
            <NavLink onClick={()=>{setToggleBtn(false)}} className={({isActive}) => `nav-links ${isActive ? "opacity-80 border-b-[3px] border-black" : ""}`}  to="/WhyUs">Why Us</NavLink>
            <NavLink onClick={()=>{setToggleBtn(false)}} className={({isActive}) => `nav-links ${isActive ? "opacity-80 border-b-[3px] border-black" : ""}`} to="/HowItWorks">How It Works</NavLink>
            <NavLink onClick={()=>{setToggleBtn(false)}} className={({isActive}) => `nav-links ${isActive ? "opacity-80 border-b-[3px] border-black" : ""}`} to="/Blogs">Blogs</NavLink>
            <NavLink onClick={()=>{setToggleBtn(false)}} className={({isActive}) => `nav-links ${isActive ? "opacity-80 border-b-[3px] border-black" : ""}`} to="/BrandStory">Brand Story</NavLink>
            <NavLink onClick={()=>{setToggleBtn(false)}} className={({isActive}) => `nav-links ${isActive ? "opacity-80 border-b-[3px] border-black" : ""}`} to="AboutUs">About Us</NavLink>
            </div>

            <div className="download-btns">
                <div>
                    <a className='android-logo' href="https://play.google.com/store/apps/details?id=com.pillup" target='_blank' rel="noopener noreferrer">
                        <img src='https://pillup.com/assets/android.svg' alt='android-logo'/>
                    </a>
                    <a href="https://apps.apple.com/app/id6447748859" target='_blank'>
                        <img src='https://pillup.com/assets/ios.svg' alt='ios-logo'/>
                    </a>
                </div>
                <a href='tel:+918920878094' className='call-icon'>
                    <img src='https://pillup.com/assets/callIcon.svg' alt='call icon'/>
                </a>
            <button className='navbar-toggle-btn' onClick={()=>{clickEvent()}} ><MenuIcon /></button>
            </div>

        </header>  
        </> 
    )
}

export default Header;