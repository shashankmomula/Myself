import { Projectitems } from "../utils/ProjectData";
import ProjectCard from "./ProjectCard";
import { GITHUB } from "../utils/Constants";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {Projectitems.map((item) => (
        <ProjectCard
          key={item.id}
          Title={item.Title}
          image={item.image}
          description={item.description}
          GIT_URL={item.git_url}
          HOST_URL={item.host_url}
        />
      ))}
    </div>
  );
};

export default Projects;
