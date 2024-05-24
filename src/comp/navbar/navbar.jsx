import React, {useState} from "react";
import "./navbarVg.css"
import SearchIcon from "../icons/search/icon";
import GoIcon from "../icons/go/icon"
import CloseIcon from "../icons/close/icon"
import BurgerIcon from "../icons/burger/icon"

function NavbarVg({}){

    const [isOpen, setIsOpen] = useState(false);

    function vgDeploy(){

        setIsOpen(!isOpen);

        setOn(false)
    
    }

    const [mbIsOn, setOn] = useState(false);

    function vgMobileOn(){
        setOn(!mbIsOn)
        setIsOpen(false)
    }

    return<>
    
        <div className="vg-nav">
        <div className="vg-nav-0">
            <h2 className="vg-nav-tl">Tu nombre</h2>
            <span className="vg-nav-i-mb" onClick={vgMobileOn}>{mbIsOn ? <CloseIcon /> : <BurgerIcon className={`vg-search-icon`} />}</span>
        </div>
        <div className="vg-nav-1">
            <ul className="vg-nav-ul">
                <li className="vg-nav-li">Home</li>
                <li className="vg-nav-li">Services</li>
                <li className="vg-nav-li">Information</li>
                <li className="vg-nav-li">Contact</li>
                <li className="vg-nav-li" onClick={vgDeploy}>{isOpen ? <CloseIcon /> : <SearchIcon className={`vg-search-icon`} />}</li>
            </ul>
        </div>
        <div className="vg-nav-1-mb">
            <ul className="vg-nav-ul-mb">
                <li className="vg-nav-li-mb" onClick={vgDeploy}>{isOpen ? <CloseIcon /> : <SearchIcon className={`vg-search-icon`} />}</li>
            </ul>
        </div>
        </div>
        
        <div className={`vg-nav-mb ${mbIsOn ? 'active' : ''}`}>
            <ul className="vg-nav-ul-t-mb">
                <li className="vg-nav-li-t-mb">Home</li>
                <li className="vg-nav-li-t-mb">Services</li>
                <li className="vg-nav-li-t-mb">Information</li>
                <li className="vg-nav-li-t-mb">Contact</li>
            </ul>
        </div>

        <div className={`vg-search-cont ${isOpen ? 'active' : ''}`}>
            <div className="vg-search">
                <input type="text" className="vg-search-bar" placeholder="Search..."/>
                <button type="button" className="vg-search-btn">Go <GoIcon /></button>
            </div>
        </div>
        
    
    </>

}

export default NavbarVg;