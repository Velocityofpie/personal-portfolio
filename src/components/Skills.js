import React from "react";
import {FaJsSquare,FaReact,FaHtml5,FaGitAlt,FaGithub, FaJava, FaPython, FaCss3,} from "react-icons/fa";
import {SiFirebase,SiMysql,} from "react-icons/si";
import { DiEclipse,DiLinux } from "react-icons/di";
import "../styles/skills.css";


const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">SKILLS & TOOLS</div>    
      <h3>
      The skills, tools and technologies I use to bring your products to life:
      </h3>     
      <div className="section-icons">
        <div>
          <FaJava className="icon-hover" />
          <p>Java</p>
        </div>
        <div>
          <FaPython className="icon-hover" />
          <p>Python</p>
        </div>
        <div>
          <FaHtml5 className="icon-hover" />
          <p>Html</p>
        </div>
        <div>
          <SiMysql className="icon-hover" />
          <p>Mysql</p>
        </div>
        <div>
          <FaCss3 className="icon-hover" />
          <p>Css</p>
        </div>
        <div>
        <FaJsSquare className="icon-hover" />
          <p>Java Script</p>
        </div>
        <div>
        <FaReact className="icon-hover" />
          <p>React</p>
        </div>
        <div>
        <DiLinux className="icon-hover" /> 
          <p>Linux</p>
        </div>
        <div>
        <DiEclipse className="icon-hover" />
          <p>Eclipse</p>
        </div>
        <div>
        <SiFirebase className="icon-hover" />  
          <p>Firebase</p>
        </div>
        <div>
        <FaGitAlt className="icon-hover" />  
          <p>Git</p>
        </div>
        <div>
        <FaGithub className="icon-hover" />  
          <p>Github</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;