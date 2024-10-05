import { Projectitems} from "../utils/ProjectData";
import ProjectCard from "./ProjectCard";
import {GITHUB} from "../utils/Constants";

const Projects=()=>{
    return(
        <div>
            {Projectitems.map((item) => (
        <ProjectCard key={item.id} Title={item.Title} image={item.image} description={item.description} URL={item.url} />
      ))}

      
        </div>
        
    );
};

export default Projects;