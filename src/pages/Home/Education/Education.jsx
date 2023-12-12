import Title from "../../../components/Title/Title";
import Image from "../../../assets/Capture.png";

const Education = () => {
  return (
    <div className="my-24 max-w-6xl mx-5 md:mx-10 lg:mx-auto">
      <Title heading="A Summary of My Education" subHeading="Education" />
      <div className="mt-10 flex flex-col-reverse lg:flex-row md:items-center gap-10 lg:gap-0">
        <div className="px-5 py-3 border-transparent border-2 border-l-primary lg:w-1/2">
          <div>
            <h3 className="text-2xl font-medium text-secondary mb-2">
              BSc in Computer Science & Engineering
            </h3>
            <p className="text-lg text-secondary mb-4">
              Prime University / 2020 - Present
            </p>
            <p className="font-medium text-[#757575] leading-8">
              Currently immersing in CSE, fostering skills in MERN stack
              development for future innovations.
            </p>
          </div>
          <hr className="my-5 border-gray-300" />
          <div>
            <h3 className="text-2xl font-medium text-secondary mb-2">
              Higher Secondary Certificate
            </h3>
            <p className="text-lg text-secondary mb-4">
              Cantt Public School & College / 2016 - 2018
            </p>
            <p className="font-medium text-[#757575] leading-8">
              Explored science foundations, shaping a curiosity-driven journey
              toward technology and innovation.
            </p>
          </div>
          <hr className="my-5 border-gray-300" />
          <div>
            <h3 className="text-2xl font-medium text-secondary mb-2">
              Secondary Shcool  Certificate
            </h3>
            <p className="text-lg text-secondary mb-4">
              R.B. Govt High School / 2011 - 2016
            </p>
            <p className="font-medium text-[#757575] leading-8">
              Laid groundwork in science, sparking an early interest in
              technology and problem-solving.
            </p>
          </div>
          <hr className="mt-5 border-gray-300" />
        </div>
        <div className="lg:w-1/2">
          <img src={Image} alt="Books" className="block mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Education;
