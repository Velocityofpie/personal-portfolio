import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";
import { FaFile } from "react-icons/fa";

function Footer() {
  return (
    <footer className="kqzVat">

    
<div className="socialMediaT ">
        
          Where to find me 
        
      </div>
    
    <div className="footer">
      
      <div className="socialMedia boxsizing">
        <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/joshua-hernandez-7a825b197/'>
            
            <LinkedInIcon  />
            {/* <p>Linkedin</p> */}
        </a>
        <a target="blank" rel='noreferrer' href='mailto:joshua.21bsc@gmail.com'>
            <EmailIcon />
            {/* <p>Email</p> */}
        </a>
        <a target="blank" rel='noreferrer' href='https://github.com/Velocityofpie'>
            
            <GithubIcon />
            {/* <p>Github</p> */}
            
        </a>
        <a target="blank" rel='noreferrer'  title="cv" href='https://www.dropbox.com/s/6pmfjfu8wgtocv4/September%202022%20Resume%20edits.docx?dl=0'> 
          <FaFile/>
          {/* <p>Resume</p> */}
          
        </a>
        
      
      </div>
     
        
        
      
      </div>
      <div className="socialMediaT ">
        
      <p className="endnote">©2022 | Designed & coded by Joshua Hernandez</p> 
        
      </div>
    </footer>
    
  );
}

export default Footer;