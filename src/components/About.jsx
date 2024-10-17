import { motion } from "framer-motion";
import aboutPic from "../assets/about.png";
import { ABOUT_TEXT, ABOUT_TEXT2, ABOUT_TEXT3 } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <div className="my-20 text-center text-4xl ">
        About
        <span className="text-neutral-500"> Me</span>
        <div className="flex flex-wrap lg:mt-20 mt-10 ">
          <div className="w-full lg:w-1/2 lg:p-8  ">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex mx-auto items-center justify-center overflow-hidden rounded-lg lg:w-[80%] w-[50%] "
            >
              <img src={aboutPic} alt="About" />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="lg:text-2xl text-sm mt-10 text-start ">
                {ABOUT_TEXT}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
