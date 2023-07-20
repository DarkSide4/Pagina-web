import { useState } from "react"
import { close, arcaLogo, menu } from '../assets'
import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      <img src={arcaLogo} alt="ArcaLogo" className="w-[65px] h-[75px]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[18px] text-black p-5`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar