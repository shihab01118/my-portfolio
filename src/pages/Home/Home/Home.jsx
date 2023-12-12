import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import WhatIDo from "../WhatIDo/WhatIDo";

const Home = () => {
  return (
    <div>
      <Banner />
      <div id="about">
        <AboutMe />
      </div>
      <div id="work">
        <WhatIDo />
      </div>
      <Education />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
