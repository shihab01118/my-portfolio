import { FaPhone } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('NavBar');
    if (window.scrollY > 0) {
      navbar.classList.add('bg-white');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-white');
      navbar.classList.add('bg-transparent');
    }
  });

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
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <FaPhone size={18} />
            <p className="text-lg font-medium">+880 1752 818 764</p>
          </div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
