
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header(){
    const [isToggleBtn , setIsToggleBtn] = useState(false);

    function clickEvent(){
        setIsToggleBtn(!isToggleBtn);
    }


    return (
        <>
        <header>
            
            <Link className='company-logo-box' onClick={()=>{setIsToggleBtn(false)}} to="/" ><img className="company-logo" src="https://pillup.com/assets/logo.svg" alt="company logo" /> </Link>
            <div className={!isToggleBtn?"nav-links-container":"nav-links-container-active"} >
            <Link onClick={()=>{setIsToggleBtn(false)}} className="nav-links"  to="/WhyUs">Why Us</Link>
            <Link onClick={()=>{setIsToggleBtn(false)}} className="nav-links" to="/HowItWorks">How It Works</Link>
            <Link onClick={()=>{setIsToggleBtn(false)}} className="nav-links" to="/Blogs">Blogs</Link>
            <Link onClick={()=>{setIsToggleBtn(false)}} className="nav-links" to="/BrandStory">Brand Story</Link>
            <Link onClick={()=>{setIsToggleBtn(false)}} className="nav-links" to="AboutUs">About Us</Link>
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
                <a href='tel:+918920878094'>
                    <img src='https://pillup.com/assets/callIcon.svg' alt='call icon'/>
                </a>
            <button className='navbar-toggle-btn' onClick={()=>{clickEvent()}} ><MenuIcon /></button>
            </div>

        </header>  
        </> 
    )
}

export default Header;