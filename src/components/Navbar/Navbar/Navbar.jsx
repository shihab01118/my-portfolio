import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-[#212529] font-bold text-3xl">
            Shihab<span className="text-[#00FE9C]">WebDev</span>
          </h2>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <FaPhone size={20} />
            <p className="text-xl font-semibold">+880 1752 818 764</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
