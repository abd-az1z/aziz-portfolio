import { MY_CONTENT } from "../constants/index";
import profilePic from "../assets/My-Avatar.jpg";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <div className="border-b border-neutral-900 pb-4  lg:mb-36 ">
      <div className="flex flex-wrap mx-auto">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pb-8 text-6xl font-thin lg:mt-16 lg:text-8xl tracking-tight"
            >
              Abdul Aziz
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-transparent lg:text-4xl text-2xl  tracking-tight "
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="my-2 max-w-xl py-4 font-light tracking-tight "
            >
              {MY_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex overflow-hidden  m-auto rounded-xl lg:w-[65%] justify-center"
          >
            <img className="" src={profilePic} alt="Abdul Aziz" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
