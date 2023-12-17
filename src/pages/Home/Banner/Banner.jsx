import { TypeAnimation } from "react-type-animation";
import ProfileImg from "../../../assets/profile-pic (1.0).png";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="min-h-screen bg-[#00FE9C]  md:pt-0">
      <div className="max-w-6xl mx-5 md:mx-10 lg:mx-auto flex flex-col-reverse lg:flex-row justify-between md:items-center min-h-screen gap-8 lg:gap-0 py-20 lg:py-0">
        <div className="text-secondary md:w-[550px] lg:w-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl uppercase font-light">
            Hi, I{"'"}M shahed al amin
          </p>
          <div className="my-3 md:my-5">
            <TypeAnimation
              preRenderFirstString={true}
              speed={35}
              sequence={["Web Designer", 2000, "Web Developer", 2000]}
              className="text-[42px] md:text-6xl lg:text-7xl font-semibold uppercase"
              repeat={Infinity}
            />
          </div>
          <p className="md:text-xl">based in Dhaka, Bangladesh.</p>
          <div className="flex flex-col md:flex-row mt-8 gap-6 items-center">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="py-3 px-7 rounded-none capitalize text-lg text-white bg-secondary border-none hover:bg-[#424649] cursor-pointer"
            >
              View My Works
            </Link>
            <a
              href="https://drive.google.com/file/d/10IQoIESWp8ZOZDhws3Gqslec5hNHoUXL/view?usp=drive_link"
              className="py-[10px] px-7 border-2 border-secondary transition duration-500 bg-transparent capitalize text-lg hover:text-white hover:bg-secondary flex items-center gap-2"
            >
              Download CV <FaArrowDown size={18} />
            </a>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: .6,
          }}
          className="rounded-full w-[350px] mx-auto md:mx-0 md:w-[400px] border-[10px] border-white"
        >
          <img src={ProfileImg} alt="Profile Image" title="I'm Shihab" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
