import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import WhatIDo from "../WhatIDo/WhatIDo";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <WhatIDo />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
