import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Skills from "../components/Skills";
import Background from "../components/Background";
import ProjectHome from "../components/ProjectHome";


function Home() {
  return (
    <div className="home">
      <section className="iYHCMn">
      <div className="about">
        <div className="title">
          
          <h2 className="top-text kuqsKO"> 
            <div>Hi,</div>
            <div>I'm </div>
            <div>Joshua </div>
            <div>|</div>
            <div className="highlight">
              <div>Software </div>
              </div>
            <div className="highlight">
              <div> developer</div>
            </div>
          
          </h2>
        </div>
        <div className="prompt">
          <div>
            <p className="fIYglH top-text-about">A software developer with a passion for learning and creating.</p>
          </div>
          <div>
            <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/joshua-hernandez-7a825b197/'>
              <LinkedInIcon  />
            </a>
            <a target="blank" rel='noreferrer' href='mailto:joshua.21bsc@gmail.com'>
              <EmailIcon />
            </a>
            <a target="blank" rel='noreferrer' href='https://github.com/Velocityofpie'>
              <GithubIcon />
            </a>
          </div>
          
        </div>
        
      </div>
      </section>
      <div>
        <Background/>
        <Skills/>
        <ProjectHome/>
      </div>
    </div>
  );
}

export default Home;