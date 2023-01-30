import { MdOutlinePageview, MdOutlineDesignServices } from "react-icons/md";
import {FaReact , FaHtml5} from 'react-icons/fa'

const services = [
  {
    title: "Front-end programming",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <FaHtml5 />,
  },
  {
    title: "Design website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <MdOutlineDesignServices />,
  },
  {
    title: "Responsive design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <MdOutlinePageview />,
  },
  {
    title: "React",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor laboriosam assumenda natus at iste.",
    icon: <FaReact />,
  },
];

export { services };
