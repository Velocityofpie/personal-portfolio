import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Joshua</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/joshua-hernandez-7a825b197/'>
                    <LinkedInIcon  />
        </a>
        <EmailIcon />
        <a target="blank" rel='noreferrer' href='https://github.com/Velocityofpie'>
            <GithubIcon />
        </a>
        </div>
      </div>
      <div className="skills">
        <h1> My Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> I love building stuff </h2>
            <span>
              fill
            </span>
          </li>
          <li className="item">
            <h2>Featured</h2>
            <span>
              fill
            </span>
          </li>
          <li className="item">
            <h2>Projects</h2>
            <span>fill</span>
          </li>
          <li className="item">
            <h2>Contact me?</h2>
            <span>Here's my email</span>
          </li>
        </ol>
      </div>
      <section>
        <div className="section-title">SKILLS</div>
        <p>Bunch of awesome content</p>
      </section>
      <div>
        <h2>Heading</h2>
        <p>Bunch of awesome content</p>
      </div>
    </div>
  );
}

export default Home;