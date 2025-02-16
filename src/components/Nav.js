import { useState } from "react"
import "../Navbar.css"
import wp from "../assets/wp-button.png"
import logo from "../assets/logo2.PNG"

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation" >
        <img src={logo} alt="Logo" height={50} width={50} className="logo" />
        <h1 className="title">Uttara Construction</h1>
  
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a id="hoveer" href="/">Home</a>
          </li>
          <li>
            <a id="hoveer" href="/service">Services</a>
          </li>
          <li>
            <a id="hoveer" href="/construction">Construction</a>
          </li>
          <li>
            <a id="hoveer" href="/contact">Contact</a>
          </li>
      
           <button id="wpbut" ><a href="https://wa.me/918989614646" target={"_blank"} rel="noopener noreferrer"><img src={wp} alt="" height={150} width={120}/></a></button> 
       
        </ul>
      </div>
    </nav>
  );
}