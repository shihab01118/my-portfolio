import Title from "../../../components/Title/Title";
import Project from "../../../components/Project/Project";
import project1 from "../../../assets/Screenshot (14).png";
import project2 from "../../../assets/Screenshot (17).png";
import project3 from "../../../assets/Screenshot (18).png";

const Projects = () => {
  return (
    <div className="my-24 max-w-6xl mx-auto">
      <Title heading="Some of my most recent projects" subHeading="Portfolio" />
      <div className="mt-10 grid grid-cols-3 gap-6">
        <Project
          img={project1}
          title="Online Forum"
          description="A MERN Stack Web Application to foster engaging discussions,
                  share insightful posts, and empower users to connect through
                  meaningful conversations."
          liveLink="https://online-forum-f9255.web.app"
          githubLink="https://github.com/shihab01118/online-forum-client"
        />
        <Project
          img={project2}
          title="Assignment Master"
          description="A MERN Stack Web Application for creating, submitting, and grading assignments. It features Firebase authentication for secure user management."
          liveLink="https://study-group-83e71.web.app"
          githubLink="https://github.com/shihab01118/group-study-client-react"
        />
        <Project
          img={project3}
          title="Gadget Shop"
          description="A MERN Stack Web Application to add new products, buy products, update or delete products with secure user management."
          liveLink="https://gadget-geek.web.app"
          githubLink="https://github.com/shihab01118/gadget-geek-client-react"
        />
      </div>
    </div>
  );
};

export default Projects;
