import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="px-10 pt-20 lg:px-20 lg:py-40 grid gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-2"
      > 
      {/* Hero info */}
        <div className="flex flex-col justify-center gap-6  ">
          <div className="flex flex-col justify-start items-center lg:items-start gap-2">
            <p className={styles.heroSubTitle}>Software engineering student</p>
            <h1 className={styles.heroTitle}>
              Hello, my name <br /> is Anniina Pitkä{" "}
            </h1>
            <p className="max-w-[550px] sm:w-[400px] xl:w-[550px]">
              I’m a software engineering student focused on front-end
              development, with hands-on experience in technologies such as
              JavaScript, React, TypeScript, Next.js, HTML and CSS. I’m excited
              to apply and grow these skills in a real-world setting.
            </p>
          </div>
          {/* Hero buttons */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://github.com/anniinap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`text-white font-normal py-2 px-4 border-transparent rounded mr-2 ${styles.github}`}
              >
                Visit My GitHub
              </button>
            </a>
            <a href="#AboutMe">
              <button className="bg-transparent font-normal hover:text-white py-2 px-4 ml-2 hover:border-transparent rounded ">
                About Me
              </button>
            </a>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex items-center justify-center max-w[500px]">
          <img
            className={styles.heroImage}
            src="/images/hero-image.jpg"
            alt="hero image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
