import React from 'react'
import "../styles/ProjectHome.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ProjectItem from "../components/ProjectItem";

function ProjectHome() {
  const navigate = useNavigate();

  return (
    <section id='projects' className='components_Section_Project bPXgTb ijglZJ'>
      <div >
        <h1>
          <div className='highlight'>
            <div>Projects</div>
          </div>
        </h1>
        {/* first proj */}
        <div className='dcyapr'>
        <div className=' bqPGIV latest top  '>
          Full Stack 
        </div>
        <h1>
          <div className='pjname title'  >Chaudr</div>
          <div> </div>
        </h1>
        <ul className='fIXXpZ tags'>
        
          <li>Vue</li>
          <li>goLang</li>
          <li>JavaScript</li>
          <li>Html</li>
          <li>Docker</li>
          <li>Css</li>
         
        </ul>
        <p className='jYkdj prjpar text'>
          This program will be deployed as a web app, so it can be accessed on the browser. We found this to be the lowest cost 
          solution to reach as many devices as possible. However as the server communicates through a normal HTTPS REST API and 
          WebSocket, clients could be written in any form, from terminal apps to native OS apps
        </p>
        <div>
          
          <div className='imageFluidContainer 'onClick={() => {navigate("/project/" + 0);}}>
            
              <div>
                <img src="/static/media/Screenshot_from_2022-06-25_15-45-445654.ffd3ab71ce0722252620.png" alt="1"/>
              </div>
           
          </div>
          <div onClick={() => {navigate("/project/" + 0);}}>
              <button className='bttn'>VIEW PROJECT</button>
          </div>
          
            
          </div>
        <div>
        {/* seond break */}
        </div>
        {/* second project goes here */}
        </div>
        <div className='containbutton'>
            <a target="blank" rel='noreferrer' href='/projects'>
              <Link to="/projects"> <button className='projbttn'>VIEW MORE PROJECTS</button> </Link>
              
            </a>
          </div>
      </div>
    </section>
  )
}

export default ProjectHome