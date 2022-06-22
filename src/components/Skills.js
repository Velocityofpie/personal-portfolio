import React from "react";
import {FaJsSquare,FaReact,FaHtml5,FaCss3,FaGitAlt,FaGithub, FaJava, FaPython,} from "react-icons/fa";
import {SiFirebase} from "react-icons/si";
import "../styles/skills.css";


const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">SKILLS</div>
      <div className="section-content section-icons">
        <FaJava className="icon-hover" />
        <FaJava className="icon-hover" >
          <span className="caption">Java</span>
        </FaJava>
        <FaPython className="icon-hover" />
        <FaHtml5 className="icon-hover" />
        <FaCss3 className="icon-hover" />
        <FaJsSquare className="icon-hover" />
        <FaReact className="icon-hover" />
        <SiFirebase className="icon-hover" />      
        <FaGitAlt className="icon-hover" />
        <FaGithub className="icon-hover" />
      </div>
    </section>
  );
};

export default Skills;