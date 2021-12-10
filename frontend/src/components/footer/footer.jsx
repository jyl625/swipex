import React from 'react';
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom"


import '../stylings/footer.css'

const Footer = () => {
  return (
      <footer>
        <div className="footer-wrapper">
          <div>
            <div className="footer-copyright">
              Copyright &copy; 2021 SwipeX
            </div>
          </div>
        </div>
      <div className="footer-links-wrapper">
          <div className="footer-links">
            <a 
              href={"https://github.com/jyl625/swipex"} 
              target="_blank"
              className="footer-github"
            >
              <FaGithubAlt 
                size={36} 
                color="#B5F2B3"
                onMouseOver={({ target }) => target.style.color = "#F28705"}
                onMouseOut={({target}) => target.style.color = "#B5F2B3"}/>
            </a>
            <Link to="/meet-the-team">
              <span>Meet the Team</span>
            </Link>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;