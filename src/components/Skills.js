import React from "react";
import {FaJsSquare,FaReact,FaHtml5,FaGitAlt,FaGithub, FaJava, FaPython, FaCss3,} from "react-icons/fa";
import {SiFirebase,SiMysql,} from "react-icons/si";
import { DiEclipse,DiLinux } from "react-icons/di";
import "../styles/skills.css";


const Skills = () => {
  return (
    <section className="section skills">

      <div className="section-title">SKILLS&TOOLS</div>    
            
      <div className="section-content section-icons">
        <div>
          <FaJava className="icon-hover" />
          <p className="icon-name">Java</p>
        </div>
        <div>
          <FaPython className="icon-hover" />
          <p className="icon-name">Python</p>
        </div>
        <div>
          <FaHtml5 className="icon-hover" />
          <p className="icon-name">Html</p>
        </div>
        <div>
          <SiMysql className="icon-hover" />
          <p className="icon-name">Mysql</p>
        </div>
        <div>
          <FaCss3 className="icon-hover" />
          <p className="icon-name">Css</p>
        </div>
        <div>
        <FaJsSquare className="icon-hover" />
          <p className="icon-name">Java Script</p>
        </div>
        <div>
        <FaReact className="icon-hover" />
          <p className="icon-name">React</p>
        </div>
        <div>
        <DiLinux className="icon-hover" /> 
          <p className="icon-name">Linux</p>
        </div>
        <div>
        <DiEclipse className="icon-hover" />
          <p className="icon-name">Eclipse</p>
        </div>
        
        <div>
        <SiFirebase className="icon-hover" />  
          <p className="icon-name">Firebase</p>
        </div>
        <div>
        <FaGitAlt className="icon-hover" />  
          <p className="icon-name">Git</p>
        </div>
        <div>
        <FaGithub className="icon-hover" />  
          <p className="icon-name">Github</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;