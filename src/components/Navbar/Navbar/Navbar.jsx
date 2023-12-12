// import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-scroll";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("NavBar");
    if (window.scrollY > 0) {
      navbar.classList.add("bg-white");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-white");
      navbar.classList.add("bg-transparent");
    }
  });

  const navLinks = (
    <>
      <Link to="projects" smooth={true} duration={500}>
        Projects
      </Link>
      <Link to="skills" smooth={true} duration={500}>
        Skills
      </Link>
      <Link to="work" smooth={true} duration={500}>
        What I Do
      </Link>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        Contact
      </Link>
    </>
  );

  return (
    <div
      id="NavBar"
      className="w-full bg-transparent fixed top-0 left-0 z-50 py-4 transition-all"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-secondary font-semibold text-4xl uppercase">
            DevShihab
          </h2>
        </div>
        <div className="flex gap-6 font-medium cursor-pointer">{navLinks}</div>
      </div>
    </div>
  );
};

export default Navbar;
