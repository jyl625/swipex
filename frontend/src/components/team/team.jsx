import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

import "../stylings/team.css"

const Team = () => {
  return(
    <div className="team-wrapper">
      <div>
        <div className="team-title">
          The SwipeX Team
        </div>
        <div className="teammates-container">
          <div className="teammate">
            <img src="images/Jean_Youn_Lee.jpg" alt="Jean" />
            <h2>Jean Youn Lee</h2>
            <h3>Team Lead</h3>
            <div className="teammate-links">
              <a href="https://github.com/jyl625" target="_blank">
                <FaGithub color="#09A603" size={50}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/jeanyounlee/" target="_blank">
                <FaLinkedin color="#09A603" size={50}></FaLinkedin>
              </a>
            </div>
          </div>
          

          <div className="teammate">
            <img src="images/James_Hong.jpg" alt="James" />
            <h2>James Hong</h2>
            <h3>Backend Lead</h3>
            <div className="teammate-links">
              <a href="https://github.com/jh177" target="_blank">
                <FaGithub color="#09A603" size={50}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/zjhong/" target="_blank">
                <FaLinkedin color="#09A603" size={50}></FaLinkedin>
              </a>
            </div>
          </div>

          <div className="teammate">
            <img src="images/Alan_Chiu.jpg" alt="Alan" />
            <h2>Alan Chiu</h2>
            <h3>Frontend Lead</h3>
            <div className="teammate-links">
              <a href="https://github.com/ms0372631" target="_blank">
                <FaGithub color="#09A603" size={50}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/alan-chiu-188ab6134/" target="_blank">
                <FaLinkedin color="#09A603" size={50}></FaLinkedin>
              </a>
            </div>
          </div>

          <div className="teammate">
            <img src="images/Shuang_Zheng.jpg" alt="Shuang" />
            <h2>Shuang Zheng</h2>
            <h3>Flex/Data Visualization Lead</h3>
            <div className="teammate-links">
              <a href="https://github.com/shuangzsy" target="_blank">
                <FaGithub color="#09A603" size={50}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/shuang-zheng-54a3109b/" target="_blank">
                <FaLinkedin color="#09A603" size={50}></FaLinkedin>
              </a>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Team;