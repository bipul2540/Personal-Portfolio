import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";

import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const KnowMoreAboutMe = () => {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-green-500">Know more about me.</h1>
      <IconContext.Provider value={{ size: 28 }}>
        <div className="icons flex gap-4 mt-2">
          <a
            href="https://auth.geeksforgeeks.org/user/bipulkumar2540"
            target="_blank"
          >
            <div className="border-[1px] p-2 rounded-full bg-[#b3b3b4] cursor-pointer">
              <SiGeeksforgeeks color="green" />
            </div>{" "}
          </a>

          <a href="https://www.linkedin.com/in/bipulkumar2540/" target="_blank">
            <div className="border-[1px] p-2 rounded-full bg-[#b3b3b4] cursor-pointer ">
              <FaLinkedin color="#247BA0" />
            </div>
          </a>

          <a href="https://leetcode.com/bipulkumar73520/" target="_blank">
            <div className="border-[1px] p-2 rounded-full bg-[#b3b3b4] cursor-pointer ">
              <SiLeetcode color="#F96E46" />
            </div>
          </a>

          <a
            href="https://github.com/bipul2540?tab=repositories"
            target="_blank"
          >
            <div className="border-[1px] p-2 rounded-full bg-[#b3b3b4] cursor-pointer ">
              <FaGithubAlt color="black" />
            </div>
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default KnowMoreAboutMe;
