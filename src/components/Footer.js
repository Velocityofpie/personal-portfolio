import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFile } from "@fortawesome/free-solid-svg-icons";
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
        <a target="blank" rel='noreferrer'  title="cv" href='https://www.dropbox.com/s/5yqzya8f55ionbi/June%202022%20Resume.docx?dl=0'>
          <FontAwesomeIcon icon={faFile} className="status-X-icon" />
            
        </a>
        
      
      </div>
     
      <p>©2022 | Designed & coded by Joshua Hernandez</p>
        
      
    </div>
  );
}

export default Footer;