import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyPortfolio from "./components/MyPortfolio";
import NavBar from "./components/NavBar/NavBar";
import MySkills from "./components/Skills/MySkills";

export default function Home() {
  return (
    <>
    < NavBar />
    < Hero />
    < MySkills />
    < AboutMe />
    < MyPortfolio />
    < ContactMe />
    <Footer/>
    </>
  );
}
