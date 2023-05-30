import React from 'react'
import css from '../styles/Services.module.scss'
import Card from './Card'
import { motion } from 'framer-motion'
import { fadeIn, textAnimate } from '../utils/motion'
const Services = () => {
    console.log(Card)

    
  return (
    <motion.div className={`${css.servicesWrapper} paddings`}>
      <a className='anchor' id="services"></a>
        <div className={`${css.servicesContainer} flexCenter`}>
          <motion.div
          
          className={css.leftSection}>
              <Card />
          </motion.div>
          <motion.div
          variants={textAnimate}
          initial='hidden'
          whileInView='show' 
          className={css.rightSection}>
              <p className='primary-text'>What do i do?</p>
              <p className='secondary-text'>I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.
              I use process design to create digital products. Besides that also help their business</p>
          </motion.div>
        </div>
    </motion.div>
  )
}

export default Services