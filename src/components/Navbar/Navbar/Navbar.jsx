import { FaPhone } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-700 bg-opacity-40 fixed py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-secondary font-semibold text-3xl uppercase">
            ShihabDev
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
