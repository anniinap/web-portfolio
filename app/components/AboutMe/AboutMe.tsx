import { FaLinkedin } from "react-icons/fa";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <section
        id="AboutMe"
        className={` ${styles.section} px-10 py-8 lg:px-20 lg:py-14 flex flex-col gap-8`}
      >
        <div className="flex justify-center">
          <h2>About me</h2>
        </div>
        <div className="grid justify-center grid-cols-1 xl:grid-cols-2 items-star gap-14">
          <div className="flex flex-col items-start gap-3">
            <h4>
              I am a front-end developer based in Sydney. Has Mechanical
              Engineering background.{" "}
            </h4>
            <p>
              I am a third-year IT engineering student specializing in software
              development. Passionate about coding and problem-solving, I have a
              strong foundation in programming and a keen interest in building
              scalable applications. Currently, I am traveling across Europe in
              a camper van while continuing to expand my skills and gain
              practical experience in the field. I am eager to apply my
              knowledge in a dynamic environment and contribute to innovative
              projects. I am traveling across Europe in a camper van while
              continuing to expand my skills and gain practical experience in
              the field. ile continuing to expand my skills and gain practical
              experience in the field
            </p>
            <div className="flex gap-5">
              <a href="/path/to/your-cv.pdf" download>
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
          <div className="flex justify-center items-center">
            <img
              className="max-h-[600px] rounded-lg"
              src="/images/IMG_4404.jpg"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
