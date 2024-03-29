import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        {/* <Link to="/about"> About </Link> */}
        {/* <Link to="/blog"> Blog </Link> */}
        <Link to="/projects"> Projects </Link>
        <a target="blank" rel='noreferrer'  title="cv" href='https://www.dropbox.com/s/6pmfjfu8wgtocv4/September%202022%20Resume%20edits.docx?dl=0'>
          Resume
            
        </a>
        
        
      </div>
    </div>
  );
}

export default Navbar;