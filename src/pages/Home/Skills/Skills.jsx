const Skills = () => {
  return (
    <div className="my-24 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold text-secondary mb-10">My Skills</h3>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>Web Design</p>
            <p>80%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[80%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>HTML/CSS</p>
            <p>90%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[90%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>Tailwind CSS</p>
            <p>90%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[90%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>JavaScript</p>
            <p>75%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[75%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>React JS</p>
            <p>80%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[80%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>Express JS</p>
            <p>65%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[65%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>MongoDB</p>
            <p>80%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[80%] bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium text-secondary mb-2">
            <p>Next JS</p>
            <p>50%</p>
          </div>
          <div className="relative">
            <div className="h-2 w-full bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 h-2 w-[50%] bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="mt-14 w-fit mx-auto">
        <a
          href="https://drive.google.com/file/d/10IQoIESWp8ZOZDhws3Gqslec5hNHoUXL/view?usp=drive_link"
          className="py-3 px-7 border-2 border-secondary font-medium transition duration-500 bg-white capitalize text-lg hover:text-white hover:bg-secondary"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Skills;
