import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl my-10"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-10">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 "
            >
              <img
                width={230}
                height={170}
                className="mb-6 rounded"
                src={project.image}
                alt="image"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl "
            >
              <h3 className="mb-2">{project.title}</h3>
              <p className="text-neutral-400 mb-4 ">{project.description}</p>
              <div className="flex flex-wrap mb-2">
                {" "}
                {/* Apply flex-wrap here */}
                {project.technologies.map((technique, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-800 text-purple-500 text-sm font-medium px-2 py-1 sm:text-xs"
                    /* Added margin-bottom for spacing between rows, and adjusted text size for smaller screens */
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
