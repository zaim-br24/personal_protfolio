import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {styles} from '../styles'


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
            <p className={styles.sectionSubText}>Tech Stack</p>
            <h2 className={`${styles.sectionHeadText} font-custom mb-5`}>Technologies.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
     
        <motion.div key={technology.name} variants={fadeIn("", "", 0.2, 1.3)} >
            <div className='w-28 h-28' key={technology.name}>
            <img src={technology.icon} alt={technology.name}/>
            </div>
        </motion.div>
        
      ))}
    </div>
    </>
  );
};


export default SectionWrapper(Tech, "");