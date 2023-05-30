import React from 'react'
import css from '../styles/Footer.Module.scss'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { bounce, fadeIn } from '../utils/motion'
const Footer = () => {
    
  return (
     <motion.footer
     initial='hidden'
     whileInView='show' 
     className={`${css.footerWrapper} paddingsLarge`}>
        <motion.section 
        
        variants={bounce}
        className={`${css.footerContainer} flexSpaceBetween`}>
               <section className={css.footerLeftSection}>
                   <header className='flexColumn'>
                    <p className='primary-text'>Let's make something <br/>
                    amazing together.</p>
                    <p className='primary-text'>Start by <a href="mailto:kaushikc005@gmail.com"
                    className='link'>saying Hi</a></p>
                    
                    </header>
               </section>
               <section className={css.footerRightSection}> 
               <h4>Social Handles</h4>
                   <ul className='menu flexColumn'>
                    <li><a href='https://www.linkedin.com/in/kaushik-chhetri-7b17641a2/'><BsLinkedin /></a></li>
                    <li><a href="https://github.com/kaushikc005">
                        <BsGithub /></a></li>
                    {/* <li><p>Notes</p></li>
                    <li><p>Experience</p></li> */}
                   </ul>
               </section>
        </motion.section>
     </motion.footer>
  )
}

export default Footer