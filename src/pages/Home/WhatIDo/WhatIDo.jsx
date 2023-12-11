import Title from "../../../components/Title/Title";
import { FaCode, FaDesktop } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

const WhatIDo = () => {
  return (
    <div className="my-24 max-w-6xl mx-auto">
      <Title
        heading="How I can help your next project"
        subHeading="What I Do?"
      />
      <div className="mt-14 grid grid-cols-3 gap-10">
        <div className="text-center">
          <FaDesktop size={60} className="text-primary w-fit mx-auto" />
          <h2 className="text-2xl font-semibold text-secondary mt-4 mb-3">
            Web Design
          </h2>
          <p className="text-lg font-medium leading-8 text-[#757575]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>
        <div className="text-center">
          <FaCode size={60} className="text-primary w-fit mx-auto" />
          <h2 className="text-2xl font-semibold text-secondary mt-4 mb-3">
            Web Development
          </h2>
          <p className="text-lg font-medium leading-8 text-[#757575]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>
        <div className="text-center">
          <IoMdColorPalette size={60} className="text-primary w-fit mx-auto" />
          <h2 className="text-2xl font-semibold text-secondary mt-4 mb-3">
            Graphics Design
          </h2>
          <p className="text-lg font-medium leading-8 text-[#757575]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
