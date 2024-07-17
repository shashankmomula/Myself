import { Projectitems} from "../utils/ProjectData";
import ProjectCard from "./ProjectCard";
const Projects=()=>{
    return(
        <div>
            {Projectitems.map((item) => (
        <ProjectCard key={item.id} Title={item.Title} image={item.image} description={item.description} />
      ))}
        </div>
    );
};

export default Projects;