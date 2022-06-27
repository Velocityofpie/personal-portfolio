import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="project_description">
        <p>
          {project.description}
        </p>
      </div>
      <div className="project_details">
        <div className="column">
          <h3>type</h3>
          <div>Financial services</div>
        </div>
        
        <div className="column">
          <h3>code</h3>
          <div>
            <a href="https://github.com/Velocityofpie/chaudr" target="blank">
              <a href="https://github.com/Velocityofpie/chaudr">
                Live Site  
              </a>
            </a>
          </div>
          <div>
            <a href={project.codesite} target="blank">
              <a href={project.codesite} >
                Code  
              </a>
            </a>
          </div>
        </div>
      </div>
      <img src={project.image} alt="nice"/>
      <p>
        <b>Stack:</b> {project.skills}
      </p>
      
      <p>
        <b>Project Purpose and Goal:</b> 
        <p>{project.PurposenGoal}</p>
      </p>
      <p>
        <b>Problems and Thought Process:</b> 
        <p>{project.ProblemsnThought}</p>
      </p>
    </div>
  );
}

export default ProjectDisplay;