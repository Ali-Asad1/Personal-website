import AboutMe from "../pages/AboutMe/AboutMe";
import ContactMe from "../pages/ContactMe/ContactMe";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";

const routes = [
  { path: "/", element: <AboutMe /> },
  { path: "/resume", element: <Resume /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <ContactMe /> },
];

export { routes };
