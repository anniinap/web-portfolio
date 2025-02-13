"use client"
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css"


import React from 'react'

const NavBar = () => {
  return (
   <>
   <nav className="fixed top-0 left-0 w-full py-2 grid gap-14 grid-cols-3 p-20 items-center bg-white">
   <div className="flex justify-start space-x-20">
        <h3 className={styles.navHeader}>anniina pitkä</h3>
      </div>
      <ul className="flex justify-center space-x-20">
      <li>
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="MySkills"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="AboutMe"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="MyProjects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="flex justify-end space-x-20">
      <Link
            to="ContactMe"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            <button className="bg-transparent font-normal hover:text-white py-2 px-4 hover:border-transparent rounded">
                Contact Me
            </button>
          </Link>
      </div>
    </nav>
   </>
  )
}

export default NavBar