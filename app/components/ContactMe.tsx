import React from 'react'
import { MdOutlineMail, MdOutlinePhoneEnabled} from "react-icons/md";

const ContactMe = () => {
  return (
    <>
     <section id="ContactMe" className='bg-white px-10 py-8 lg:px-20 lg:py-20 flex flex-col items-center md:items-start gap-4'>
        <h2>Contact Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14'>
          <div className=''>
            <p className=''>Please don’t hesitate to reach out  via email or phone. I’m always excited to connect and answer any questions you might have. Feel free to get in touch – I’d love to hear from you and discuss potential opportunities!</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <a href="mailto:anniina.pitka@gmail.com">
            <p className="flex items-center hover:scale-110 transition-all duration-300 ease-in-out">
              <MdOutlineMail className="mr-12" />
              anniina.pitka@gmail.com
            </p>
            </a>
            <p className="flex items-center">
              <MdOutlinePhoneEnabled className="mr-12" />
              +358 40 5088593
            </p>

            </div>
          </div>

        </div>
    </section>
    </>
  )
}

export default ContactMe