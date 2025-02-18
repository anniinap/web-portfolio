import React from 'react'
import data from "../../data/skills.json"
import styles from "./MySkills.module.css"


interface Skill {
    id: number;
    title: string;
    description: string
}
const MySkills = () => {
    const skills: Skill[] = data.skills;
  return (
   <>
   <section id='MySkills'  className={` ${styles.section} flex flex-col gap-8 items-center xl:items-center px-10 py-16 lg:px-20 lg:py-14`}>
        {/* Title */}
        <div>
            <h2 className='text-center'>My Skills</h2>
        </div>
        {/* Skill cards*/}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5 '>
            {skills.map((item) => (
                <div key={item.id} className={`${styles.skillBox} flex flex-col gap-4  rounded-md min-h-[300px] max-w-[400px] items-center`}>
                    <div className={` ${styles.skillHeaderDiv} flex justify-center items-center w-full h-[70px] p-2 rounded-tl rounded-tr`}>
                        <h4 className={styles.skillHeader}>{item.title}</h4>
                    </div>
                    <div className='px-4'>
                        <p className={styles.skillBody}>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        {/* Qualification */}
        <div className='grid gap-5 grid-cols-1 xl:grid-cols-2 justify-start items-center'>
            <h2 className='text-center xl:text-left' >Qualification</h2>
            <div className={` max-w-[700px] py-6 rounded-lg`}>
                <h4>Information and Communication Technology, Bachelor of Engineering</h4>
                <h5 className={styles.schoolHeader}>JYVÄSKYLÄ UNIVERSITY OF APPLIED SCIENCES</h5>
                <p>Sep 2021 — Current</p>
                <p>Currently studying to become an IT engineer with a specialization in software development. Through the studies, a strong foundation has been built in coding principles, as well as both front-end and back-end development basics.</p>
            </div>
        </div>
   </section>
   </>
  )
}

export default MySkills