import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="grid gap-20 grid-cols-1 lg:grid-cols-2  justify-between items-center px-10 py-16 lg:px-20 lg:py-28"
      >
        <div className="flex justify-center lg:justify-start items-center">
          <img
            className={styles.heroImage}
            src="/images/IMG_4404.jpg"
            alt="hero image"
          />
        </div>
        <div className="flex flex-col justify-center gap-6  ">
          <div className="flex flex-col justify-start items-center lg:items-start gap-2">
            <p className={styles.heroSubTitle}>Software engineering student</p>
            <h1 className={styles.heroTitle}>
              Hello, my name <br /> is Anniina Pitkä{" "}
            </h1>
            <p className="max-w-[500px] sm:w-[400px] xl:w-[500px]">
              I’m a passionate Software Engineering student focused on solving
              complex problems through technology. Always eager to learn and
              stay updated on the latest trends, I aim to build impactful
              software solutions that make a difference.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://github.com/anniinap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white font-normal py-2 px-4 border-transparent rounded mr-2">
                Visit My GitHub
              </button>
            </a>
            <a href="#AboutMe">
              <button className="bg-transparent font-normal hover:text-white py-2 px-4 ml-2 hover:border-transparent rounded">
                About Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
