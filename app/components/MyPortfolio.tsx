import React from 'react'
import data from "../data/projects.json"

interface Project {
        id: number;
        name: string;
        description: string;
        technologies: string[];
}
const MyPortfolio = () => {
        const projects: Project[] = data.projects;
  return (
    <>
    <section id="MyProjects"className='flex flex-col px-10 py-8 lg:px-20 lg:py-14 gap-8 items-center'>
        <h2 className='m-0 text-center'>My Projects</h2>
        <div className='flex justify-center'>
                <button className="bg-transparent font-normal hover:text-white py-2 px-4 hover:border-transparent rounded">
                        All
                </button>
                <button className="bg-transparent font-normal hover:text-white py-2 px-4 ml-4 hover:border-transparent rounded">
                        Web Design
                </button>
                <button className="bg-transparent font-normal hover:text-white py-2 px-4 ml-4 hover:border-transparent rounded">
                        Front-End
                </button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12'>
                {projects.map((project) => (
                        <div className="p-4 bg-white flex flex-col gap-3 rounded-lg max-w-[450px]" key={project.id}>
                        <h3 className='text-center'>{project.name}</h3>
                        <p>{project.description}</p>
                        <h5 className='text-center'>Technologies used</h5>
                        <div className='flex justify-center mt-5'>
                        <button className="bg-transparent font-normal hover:text-white py-2 px-4 ml-2 hover:border-transparent rounded">
                                See on GitHub
                        </button>

                        </div>
                        </div>
                ))}

        </div>
    </section>
    </>
  )
}

export default MyPortfolio