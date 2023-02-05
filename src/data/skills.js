import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiMaterialui,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiGithub,
  SiGit,
  SiNpm,
} from "react-icons/si";

const skills = {
  coding: [
    { label: "Html/css", percent: 90 },
    { label: "Javascript", percent: 70 },
    { label: "React.js", percent: 70 },
    { label: "Node.js/Express", percent: 20 },
    { label: "MySql/MongoDB", percent: 20 },
  ],
  frontEnd: [
    { label: "Html", percent: 90, icon: <FaHtml5 color='#E44D26' /> },
    { label: "Css3", percent: 85, icon: <FaCss3Alt color='#264de4 ' /> },
    { label: "Bootstrap", percent: 75, icon: <BsFillBootstrapFill color='#563D7C' /> },
    { label: "Tailwind", percent: 50, icon: <SiTailwindcss color='#38B2AC' /> },
    { label: "Material UI", percent: 60, icon: <SiMaterialui color='#007FFF' /> },
    { label: "JavaScript", percent: 70, icon: <SiJavascript color='#F7DF1E' /> },
    { label: "React.js", percent: 70, icon: <FaReact color='#61DAFB' /> },
  ],
  backEnd: [
    { label: "Node.js", percent: 25, icon: <FaNodeJs color='#339933' /> },
    { label: "express.js", percent: 20, icon: <SiExpress color='#FFF' /> },
    { label: "MySql", percent: 10, icon: <SiMysql color='#005C84' /> },
    { label: "MongoDB", percent: 10, icon: <SiMongodb color='#4EA94B' /> },
  ],
  tools: [
    { label: "Postman", icon: <SiPostman color="#FF6C37"/> },
    { label: "Git", icon: <SiGit color="#E44C30"/> },
    { label: "GitHub", icon: <SiGithub color="#FFF"/> },
    { label: "NPM", icon: <SiNpm color="#CB3837"/> },
  ],
};

export { skills };
