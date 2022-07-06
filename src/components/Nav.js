import React from 'react'
import 'flowbite';
import logo from '../assets/logo.jpeg'
import { Navbar } from 'flowbite-react';
export default function Nav() {
  return (
    <div>
     <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://shreeram-website.vercel.app/">
    <img
      src={logo} 
      className="mr-2 h-20 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Shreeram
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/about">
      About
    </Navbar.Link>
    <Navbar.Link href="/service">
      Services
    </Navbar.Link>
    <Navbar.Link href="/construction">
     Construction
    </Navbar.Link>
    <Navbar.Link href="/contact">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

{/* <img src={logo} className="mr-2 h-20 sm:h-9" alt="Flowbite Logo" /> */}
// https://shreeram-website.vercel.app/"