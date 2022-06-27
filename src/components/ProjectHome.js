import React from 'react'
import "../styles/ProjectHome.css";


function ProjectHome() {
  return (
    <section id='projects' className='components_Section_Project bPXgTb ijglZJ'>
      <div className='dcyapr'>
      <h1>
        <div className='highlight'>
          <div>Projects</div>
        </div>
      </h1>
      <div className=' bqPGIV latest '>
        Full Stack developer
      </div>
      <h1>
        <div className='pjname bqPGIV' >Chaudr placeholder</div>
        <div> </div>
      </h1>
      <ul className='fIXXpZ'>
        <li>Vue</li>
        <li>goLang</li>
      </ul>
      <p className='jYkdj'>
      This program will be deployed as a web app, so it can be accessed on the browser. We found this to be the lowest cost 
      solution to reach as many devices as possible. However as the server communicates through a normal HTTPS REST API and 
      WebSocket, clients could be written in any form, from terminal apps to native OS apps
      </p>
      <div>
        <a target="blank" rel='noreferrer' href='/project/0'>
            View project
        </a>
        <a target="blank" rel='noreferrer' href='/project/0'>

        </a>
        
        <img src="Screenshot_from_2022-06-25_15-45-445654.png" alt="project img"/>
        <div className='imageFluidContainer'>
          
          <a href='/project/0'>
            <div>
              <image src="1.png"  alt="projectimg">

              </image>
            </div>
          </a>
        </div>
      </div>
      <div>
        
      </div>
      </div>
    </section>
  )
}

export default ProjectHome