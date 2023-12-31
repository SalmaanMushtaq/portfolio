import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TeamIcon from "@mui/icons-material/Diversity1Sharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import styles from "./Skills.module.css";

import Skill from "../components/Skill";

const techSkills = [
  { name: "HTML5", proficiency: "Intermediate", points: 5 },
  { name: "CSS3", proficiency: "Intermediate", points: 5 },
  { name: "Bootstrap", proficiency: "Professional", points: 8 },
  { name: "JQuery", proficiency: "Professional", points: 8 },
  { name: "JavaScript", proficiency: "Intermediate", points: 5 },
  { name: "React.js", proficiency: "Intermediate", points: 5 },
];
const languageSkills = [
  { name: "English", proficiency: "Intermediate", points: 5 },
  { name: "Urdu", proficiency: "Professional", points: 8 },
  { name: "Kashmiri", proficiency: "Professional", points: 10 },
  { name: "Hindi", proficiency: "Intermediate", points: 5 },
];

const softSkills = [
  { name: "Communication", proficiency: "Advanced", points: 7 },
  { name: "Teamwork", proficiency: "Expert", points: 10 },
  { name: "Problem Solving", proficiency: "Intermediate", points: 5 },
  { name: "Collaboration", proficiency: "Intermediate", points: 5 },
];

const Skills = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAnimationComplete(true);
    };

    fetchData();
  }, []);
  return (
    <>
      <Box className={styles.boxContainer}>
        <h2>
          <LaptopMacIcon className={styles.icons} /> Tech Skills
          <div className="customLine">
            <span className="insideCustomLine"></span>
          </div>
        </h2>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={8} md={10} mt={3}>
            <p className={styles.para}>
              &emsp; I specialize in front-end development, where I leverage the
              latest technologies and frameworks to build responsive,
              user-friendly websites. My toolkit includes HTML5, CSS3,
              Bootstrap, and JavaScript. I&apos;m particularly adept at
              harnessing the power of React.js to create seamless and
              interactive web applications.
            </p>
          </Grid>
          <Grid item xs={4} md={2}>
            <a
              href="./assets/cv/SalmaanMushtaq.pdf"
              className="downloadCvBtn"
              download="SalmaanMushtaq-Resume.pdf"
            >
              <i className="bi bi-download"></i> Download CV
            </a>
          </Grid>
        </Grid>
        <Skill skills={techSkills} animationComplete={animationComplete} />
      </Box>

      <Box className={styles.boxContainer}>
        <h2>
          <TeamIcon className={styles.icons} /> Soft Skills
          <div className="customLine">
            <span className="insideCustomLine"></span>
          </div>
        </h2>
        <p className={styles.para}>
          &emsp; My ability to communicate effectively, collaborate seamlessly,
          and solve problems efficiently contributes to my strong soft skills. I
          thrive in teamwork and consider myself an expert in fostering
          collaboration. With advanced communication skills, I excel in
          conveying ideas and concepts.
        </p>
        <Skill skills={softSkills} animationComplete={animationComplete} />
      </Box>
      <Box className={styles.boxContainer}>
        <h2>
          <LanguageSharpIcon className={styles.icons} /> Language Skills
          <div className="customLine">
            <span className="insideCustomLine"></span>
          </div>
        </h2>
        <p className={styles.para}>
          &emsp; Multilingual proficiency adds another dimension to my skills. I
          am proficient in English, Urdu, and Kashmiri. This enables me to
          effectively communicate and collaborate with diverse teams and
          stakeholders, facilitating a rich and inclusive work environment.
        </p>
        <Skill skills={languageSkills} animationComplete={animationComplete} />
      </Box>
    </>
  );
};

export default Skills;
