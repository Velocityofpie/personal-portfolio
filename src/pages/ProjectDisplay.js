import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import {FaCheck,} from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const[isSitelive]= useState(project.livesitestat);
  const[isCodelive]= useState(project.codestat);
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
          <div>{project.type} </div>
        </div>
        
        <div className="column">
          <h3>code</h3>
          <div>
            <a href={project.Livesite} target="blank">
              <a href={project.Livesite}>
               {isSitelive ? <FaCheck className="status-Check-icon"  />: <FontAwesomeIcon icon={faXmark} className="status-X-icon" />}    
               
               
                Live Site  
              </a>
            </a>
          </div>
          <div>
            <a href={project.codesite} target="blank">
              <a href={project.codesite} >
                {isCodelive ? <FaCheck className="status-Check-icon" />: <FontAwesomeIcon icon={faXmark} className="status-X-icon"  />}    
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