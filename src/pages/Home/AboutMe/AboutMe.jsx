import Title from "../../../components/Title/Title";

const AboutMe = () => {
  return (
    <div className="my-24 max-w-6xl mx-5 md:mx-10 lg:mx-auto">
      <Title heading="Know Me More" subHeading="About Me" />
      <div className="mt-8 flex flex-col lg:flex-row justify-between gap-16">
        <div className="text-secondary flex-1">
          <p className="text-2xl font-medium">
            {`Hi, I'm`}{" "}
            <span className="border-4 border-transparent font-bold border-b-primary">
              Shahed Al Amin Shihab
            </span>
          </p>
          <p className="leading-8 text-xl mt-5">
            {`I'm a full-stack developer specialised in frontend and backend development for scalable web apps. I enjoy developing simple, clean and slick websites that provide real value to the end user. I'm very serious about my goal and looking forward to work in new projects. Customer's satisfaction also get's priority as well.`}
          </p>
        </div>
        <div className="text-secondary px-5">
          <div className="relative">
            <div className="w-32 h-32 bg-primary rounded-full mx-auto"></div>
            <p className="text-8xl w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              6
            </p>
          </div>
          <p className="text-center text-2xl font-medium mt-3">
            Months of <span className="font-bold">Experience</span>
          </p>
        </div>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="font-medium text-[#757575] text-lg">Name:</p>
          <p className="text-secondary font-semibold text-lg mt-2">
            Shahed Al Amin Shihab
          </p>
        </div>
        <div>
          <p className="font-medium text-[#757575] text-lg">Email:</p>
          <p className="text-secondary font-semibold text-lg mt-2">
            <a href="">shahed.shihab.0@gmail.com</a>
          </p>
        </div>
        <div>
          <p className="font-medium text-[#757575] text-lg">Date of Birth:</p>
          <p className="text-secondary font-semibold text-lg mt-2">
            December 29, 2000
          </p>
        </div>
        <div>
          <p className="font-medium text-[#757575] text-lg">From:</p>
          <p className="text-secondary font-semibold text-lg mt-2">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
