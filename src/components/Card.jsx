import React from 'react'
import css from '../styles/Card.module.scss'
import experience from '../utils/data'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Card = () => { 
    
   return (
       <motion.div 
       initial="hidden"
       whileInView="show"
       className={`${css.cardWrapper}`}>
           {experience.map((item,key)=> (
               <motion.div
               variants={fadeIn("left","tween",(key)*0.3,1)}    
               className={`${css.cardContainer} flex paddings`}>
                   <div className={css.leftCardSection}>
                     <item.icon  style={{background:item.bg,fontSize:'20px',borderRadius:'50%',color:'#fff',padding:'0.5rem'}}/>
                   </div>
                   <div className={css.rightCardSection}>
                    <p className={css.cardPrimaryText}>{item.name}</p>
                   </div>
               </motion.div>
           ))}
       </motion.div>
   )
}

export default Card