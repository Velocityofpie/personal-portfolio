import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>©2022 | Designed & coded by Joshua Hernandez</p>
      <a  href='https://www.dropbox.com/s/ltexsozhekxy75b/June%202022%20Resume.docx?dl=0' title="cv" target="_blank" rel='noopener noreferrer'>
        "Cv link"
    </a>
      
    </div>
  );
}

export default Footer;