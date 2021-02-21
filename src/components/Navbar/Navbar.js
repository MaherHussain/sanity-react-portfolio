import React,{useState} from 'react'
import './Nabar.css'
import {NavLink}  from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
export default function Navbar() {
    const [expanded, isExpanded] = useState(false);
    
    const openMenu = () => {
     const LinksCon = document.querySelector(".links-con"); 
      LinksCon.style.width="200px";
      LinksCon.style.display="block"
      LinksCon.style.paddingLeft = "50px";
      isExpanded(!expanded);
    }
    
    const closeMenu = () => {
      const LinksCon = document.querySelector(".links-con");
      LinksCon.style.width = "0px";
      LinksCon.style.display = "none";
      LinksCon.style.paddingLeft = "0px";
      isExpanded(!expanded);
    };
  
   return (
     <div className="position-fixed d-block h-100" id="sticky-sidebar">
       <div className="wrapper">
         <div className="side-wrapper">
           <div className="bars">
             {!expanded ? (
               <FaIcons.FaBars onClick={openMenu} />
             ) : (
               <AiIcons.AiOutlineClose onClick={closeMenu} />
             )}
           </div>
           <div className="icons-con">
             <div className="nav-icon">
               <NavLink to="/" exact>
                 <span className="icon">
                   <AiIcons.AiFillHome />
                 </span>
               </NavLink>
               <div className="nav-icon">
                 <NavLink to="/about">
                   <span className="icon">
                     <BsIcons.BsInfo />
                   </span>
                 </NavLink>
               </div>
               <div className="nav-icon">
                 <NavLink to="/skills">
                   <span className="icon">
                     <GiIcons.GiSkills />
                   </span>
                 </NavLink>
               </div>
               <div className="nav-icon">
                 <NavLink  to="/portfolio">
                   <span className="icon">
                     <AiIcons.AiOutlineFundProjectionScreen />
                   </span>
                 </NavLink>
               </div>
               <div className="nav-icon">
                 <NavLink to="/contact">
                   <span className="icon">
                     <IoIcons.IoIosAt />
                   </span>
                 </NavLink>
               </div>
             </div>
           </div>
         </div>
         <div className="links-wrapper">
           <div className="links-con" onClick={closeMenu}>
             <div className="nav-Item">
               <NavLink to="/" exact>
                 <span className="linkTitle">Home</span>
               </NavLink>
             </div>
             <div className="nav-Item">
               <NavLink to="/about">
                 <span className="linkTitle">About Me</span>
               </NavLink>
             </div>
             <div className="nav-Item">
               <NavLink to="/skills">
                 <span className="linkTitle">Skills</span>
               </NavLink>
             </div>
             <div className="nav-Item">
               <NavLink to="/portfolio/all">
                 <span className="linkTitle">Portfolio</span>
               </NavLink>
             </div>
             <div className="nav-Item">
               <NavLink to="/contact">
                 <span className="linkTitle">Contact</span>
               </NavLink>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}
