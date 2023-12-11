import { FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import PropTypes from "prop-types";

const Project = ({ img, title, description, liveLink, githubLink }) => {
  return (
    <div className="border bg-base-400 pb-4 shadow-lg rounded-md">
      <div className="relative overflow-hidden group">
        <img
          src={img}
          alt="Project-1"
          className="w-full h-auto group-hover:opacity-75 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 py-4 text-center transform translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 p-3">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center gap-2">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-secondary flex items-center gap-2 w-fit mx-auto"
        >
          <IoIosSend className="text-primary" size={20} />
          {title}
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-secondary flex items-center gap-2 w-fit mx-auto"
        >
          <FaGithub className="text-primary" size={20} />
          Project Github Link
        </a>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <p className="text-sm font-medium bg-[#757575] text-white px-2 py-[2px] rounded">
            React
          </p>
          <p className="text-sm font-medium bg-[#757575] text-white px-2 py-[2px] rounded">
            Node
          </p>
          <p className="text-sm font-medium bg-[#757575] text-white px-2 py-[2px] rounded">
            Express
          </p>
          <p className="text-sm font-medium bg-[#757575] text-white px-2 py-[2px] rounded">
            MongoDB
          </p>
          <p className="text-sm font-medium bg-[#757575] text-white px-2 py-[2px] rounded">
            Firebase
          </p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default Project;
