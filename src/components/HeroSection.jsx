import React from 'react'
import css from '../styles/HeroSection.module.scss'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
const HeroSection = () => {

   
  return (
    <motion.div 
    initial='hidden'
    whileInView='show' 
    className={`${css.heroWrapper} paddings`}>
        <motion.div className={`${css.topSection} flexSpaceBetween`}>
            <motion.p 
            variants={fadeIn("left","tween",0.3,1)}
            className={` primary-text`}>
            Hey There,<br/>I'm Kaushik.
            </motion.p>
            <motion.p 
            variants={fadeIn("right","tween",0.3,1)}
            initial='hidden'
            whileInView='show'
            className={`secondary-text`}>
                I'm a frontend developer,<br/>
                who loves to make creative <br/> 
                and fruitful designs come true.<br />  
            </motion.p>
        </motion.div>
         <motion.div 
         
         className={`${css.heroSectionImg} flexCenter`}>
            <motion.img
            variants={fadeIn("up","tween",0.4,1)}
            src='person.png'/>
         </motion.div>
        <motion.div 
        variants={fadeIn("down","tween",0.3,1)}
        initial='hidden'
        whileInView='show'
        className={`${css.bottomSection} flexSpaceBetween`}>
            <a href="mailto:kaushikc005@gmail.com"
            className='link'>kaushikc005@gmail.com</a> 
            <p className='secondary-text'></p>
        </motion.div>
        
    </motion.div>
  )
}

export default HeroSection