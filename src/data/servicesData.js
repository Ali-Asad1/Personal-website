import { MdOutlinePageview, MdOutlineDesignServices } from "react-icons/md";
import {FaReact , FaHtml5} from 'react-icons/fa'

const services = [
  {
    title: "Front-end",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <FaHtml5 />,
    borderBottom : false 
  },
  {
    title: "Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <MdOutlineDesignServices />,
    borderBottom : false 
  },
  {
    title: "Responsive ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <MdOutlinePageview />,
    borderBottom : false 
  },
  {
    title: "React",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <FaReact />,
    borderBottom : false 
  },
];

export { services };
