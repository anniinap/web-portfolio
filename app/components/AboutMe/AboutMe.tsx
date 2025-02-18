import { FaLinkedin } from "react-icons/fa";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <section
        id="AboutMe"
        className={` ${styles.section} px-10 py-16 lg:px-20 lg:py-14 flex flex-col gap-8`}
      >
        <div className="flex justify-center">
          <h2>About me</h2>
        </div>
        {/* About Info */}
        <div className="grid justify-center grid-cols-1 xl:grid-cols-2 items-star gap-14">
          <div className="flex flex-col items-start gap-3">
            <h4>
              I am a software development student based in Finland and I have
              background in customer service.
            </h4>
            <p className="flex flex-col gap-2">
              I focus on front-end development with technologies like
              JavaScript, React, and TypeScript, while also exploring back-end
              development with Express.js, Node.js, and MongoDB. My academic
              projects have given me a solid foundation in programming
              principles and problem-solving, with experience in Git for version
              control.
              <br />
              With my customer service background, I’ve developed strong
              communication, teamwork, and problem-solving skills, which are
              valuable in software development.
              <br />
              In my free time, I travel across Europe in a camper van, surf, and
              explore new places. I’m passionate about learning, growing, and
              contributing to innovative tech projects.
            </p>
            {/* Buttons */}
            <div className="flex gap-5">
              <a
                href="https://drive.google.com/uc?export=download&id=1sO8TUdorDUVpabDjq5RS3qIIXWDrMdCU"
                download
              >
                <button className="bg-white font-normal hover:text-white py-2 px-4 hover:border-transparent rounded mt-5">
                  Download resume
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/anniinapitka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white font-normal hover:text-white p-3 hover:border-transparent rounded-full mt-5">
                  <FaLinkedin />
                </button>
              </a>
            </div>
          </div>
          {/* About image */}
          <div className="flex justify-center items-center">
            <img
              className="max-h-[600px] rounded-3xl"
              src="/images/about_me.jpg"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
