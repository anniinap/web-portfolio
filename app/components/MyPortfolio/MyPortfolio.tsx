"use client";
import React, { useEffect, useState } from "react";
import data from "../../data/projects.json";
import styles from "./MyPortfolio.module.css";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";

const iconMap: Record<string, JSX.Element> = {
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiBootstrap: <SiBootstrap />,
  SiSass: <SiSass />,
  SiReact: <SiReact />,
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiNextdotjs: <SiNextdotjs />,
  SiVite: <SiVite />,
};

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: Technology[];
  category: string;
  url: string;
}

interface Technology {
  name: string;
  icon: string;
}
const MyPortfolio = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [allSelectedProjects, setAllSelectedProjects] = useState<Project[]>([]);
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    setAllProjects(data.projects);
  }, []);

  const SelectAll = () => {
    setAllSelectedProjects(allProjects);
    setActiveButton(1);
  };

  const SelectWebDesign = () => {
    const webDesignProjects = allProjects.filter(
      (project) => project.category === "web design"
    );
    setAllSelectedProjects(webDesignProjects);
    setActiveButton(2);
  };

  const SelectFrontEnd = () => {
    const frontEndProjects = allProjects.filter(
      (project) => project.category === "front end"
    );
    setAllSelectedProjects(frontEndProjects);
    setActiveButton(3);
  };

  return (
    <>
      <section
        id="MyProjects"
        className="flex flex-col px-10 py-16 lg:px-20 lg:py-16 gap-8 items-center"
      >
        {/* Title */}
        <h2 className="m-0 text-center">My Projects</h2>
        {/* Select buttons */}
        <div className="flex justify-center gap-5">
          <button
            onClick={() => SelectAll()}
            className={`${
              activeButton === 1 && styles.activeButton
            } bg-transparent font-normal hover:text-white py-2 px-4 hover:border-transparent rounded`}
          >
            All
          </button>
          <button
            onClick={() => SelectWebDesign()}
            className={`${
              activeButton === 2 && styles.activeButton
            } bg-transparent font-normal hover:text-white py-2 px-4 hover:border-transparent rounded`}
          >
            Web Design
          </button>
          <button
            onClick={() => SelectFrontEnd()}
            className={`${
              activeButton === 3 && styles.activeButton
            } bg-transparent font-normal hover:text-white py-2 px-4 hover:border-transparent rounded`}
          >
            Front-End
          </button>
        </div>
        {/* Project card */}
        <div className="flex flex-col xl:flex-row gap-8 justify-between">
          {(allSelectedProjects.length > 0
            ? allSelectedProjects
            : allProjects
          ).map((project) => (
            <div className={styles.card} key={project.id}>
              <h4 className="text-center ">{project.name}</h4>
              <p className={styles.description}> {project.description}</p>
              <h5 className="text-center text-xl">Technologies used:</h5>
              <div className="flex justify-center gap-4">
                {project.technologies.map((tech) => (
                  <div key={tech.name}>
                    <span className={`${styles[tech.name]}`}>
                      {iconMap[tech.icon]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-5">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-transparent font-normal hover:text-white py-2 px-4 ml-2 hover:border-transparent rounded">
                    See on GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyPortfolio;
