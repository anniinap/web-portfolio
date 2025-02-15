import React from 'react'
import styles from "./Footer.module.css"
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <footer className={` ${styles.footer} flex flex-col items-center px-10 py-8 gap-8`}>
      <h3>Anniina Pitkä</h3>
      <div className='flex justify-around space-x-6'>
        <a href="https://www.linkedin.com/in/anniinapitka/" target="_blank" rel="noopener noreferrer">
        <button className="bg-white font-normal hover:text-white p-3 hover:border-transparent rounded-full mt-5">
              <FaLinkedin />
          </button> 
          </a>
          <a href="https://github.com/anniinap" target="_blank" rel="noopener noreferrer">
          <button className="bg-white font-normal hover:text-white p-3 hover:border-transparent rounded-full mt-5">
              <FaGithub />
          </button> 
          </a>
          <a href="mailto:anniina.pitka@gmail.com">
          <button className="bg-white font-normal hover:text-white p-3 hover:border-transparent rounded-full mt-5">
            <MdOutlineMail />
          </button>
        </a>
      </div>
      <p>© 2025. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default Footer