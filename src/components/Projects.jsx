import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { projectNavLink, projectsItems } from "../utils/projects";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  index,
  title,
  description,
  githubLink,
  demo,
  tags,
  snapshot,
}) => {
  const tagColor = ["#044B7F", "#FE5D26", "#D80032", "#47E5BC"];
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className=" cursor-pointer w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px]  min-h-[280px] flex items-center flex-col"
        >
          <img
            src={snapshot}
            alt={title}
            className="w-full h-full object-contain rounded-tl-[20px] rounded-tr-[20px]"
          />
          <div className="w-full px-3 mt-3 mb-3">
            <h3 className="text-white text-[16px] font-bold  ">{title}</h3>

            <p className="text-[13px] mt-1">{description}</p>
            <ul className="flex gap-1 flex-wrap text-[12px] mt-2">
              {tags.map((tag, idx) => (
                <li style={{ color: tagColor[idx] }}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute top-5 right-5">
          <Link to={githubLink}>
            <div className="w-7 h-7 flex items-center justify-center bg-tertiary rounded-full">
              <FaGithub />
            </div>
          </Link>
          <Link to={demo}>
            <div className="w-7 h-7 flex items-center justify-center  bg-tertiary rounded-full mt-2">
              <FaLaptopCode />
            </div>
          </Link>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Projects = () => {
  const [tag, setTag] = useState("html&css");
  const [projectsData, setProjectData] = useState({});
  const [projectAvailable, setProjectAvailable] = useState(true);

  const handleProjectNavClick = (title) => {
    setTag(title);
  };
  useEffect(() => {
    console.log(tag, projectsData);
    const projectItem = projectsItems.find((item) => item.id === tag);

    if (projectItem) {
      setProjectData(projectItem);
      setProjectAvailable(true);
    } else {
      setProjectData(null);
      setProjectAvailable(false);
    }
  }, [tag, projectsItems, handleProjectNavClick]);

  return (
    <div className={`${styles.paddingX} mt-20`}>
      <motion.div>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="Project_container mt-10 flex sm:flex-row flex-col sm:gap-20 gap-10">
        <div className="left_container sm:max-w-[240px]">
          <ul className="flex  flex-row flex-wrap gap-3 justify-center">
            {projectNavLink.map((nav, index) => (
              <li
                key={nav.id}
                className="border-2 border-[#915eff] p-2 px-3 rounded-3xl  cursor-pointer hover:text-[#915eff] font-bold sm:text-[16px] text-[13px] "
                onClick={() => handleProjectNavClick(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="right_container w-full h-full flex gap-9 flex-wrap justify-evenly">
          {projectsData &&
            projectsData.projects &&
            projectsData.projects.map((val, idx) => (
              <ProjectCard
                id={val.p_id}
                title={val.p_title}
                description={val.p_description}
                githubLink={val.git_link}
                demo={val.demo_code}
                tags={val.p_tags}
                snapshot={val.snapshot}
                index={idx}
              />
            ))}

          {projectAvailable === false && <p>Not available</p>}
        </div>
      </div>
    </div>
  );
};

export default Projects;
