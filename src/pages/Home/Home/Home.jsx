import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import WhatIDo from "../WhatIDo/WhatIDo";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <WhatIDo />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
