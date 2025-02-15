"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

import React from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full">
        <div className="flex flex-row items-center justify-between bg-white w-full px-10 py-2 lg:px-20 relative z-20">
          {/* Logo */}
          <div>
            <h3 className={styles.navHeader}>anniina pitkä</h3>
          </div>

          {/* Desktop menu */}
          <ul className="lg:flex space-x-8 xl:space-x-20 hidden">
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

          <div className="hidden lg:flex">
            <Link
              to="ContactMe"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="bg-transparent font-normal hover:text-white py-2 px-4 hover:border-transparent rounded">
                Contact Me
              </button>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex flex-row justify-center items-center">
            <button
              onClick={toggleMenu}
              className="text-black bg-white border-none text-xl hover:bg-white shadow-none"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 1, y: -400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -400 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col gap-6 py-4 items-center bg-white relative z-0"
            >
              <li>
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={toggleMenu}
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
                  onClick={toggleMenu}
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
                  onClick={toggleMenu}
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
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="ContactMe"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contact Me
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
