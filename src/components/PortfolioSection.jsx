import React from 'react'
import css from '../styles/PortfolioSection.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, textAnimate } from '../utils/motion'
const PortfolioSection = () => {
  return (
    <motion.section 
    initial='hidden'
    whileInView='show'
    className={`${css.portfolioWrapper} paddings`}>
        <a className='anchor' id="portfolio"></a>
            <motion.header 
            variants={textAnimate}
            className='flexSpaceBetween'>
                <p className='primary-text'>My Latest Works</p>
                <a href="https://github.com/kaushikc005?tab=repositories" className='link' target="_blank">Explore more on Github</a>
            </motion.header>
            <figure className={`${css.portfolioContainer} flexStart`}>
            <main className={css.portfolioImg}>
                <motion.img
                variants={fadeIn("up","tween",0.2,0.8)} 
                src='showCase1.png'/>
                <div className={css.overlay}></div>
                <nav className={css.portfolioBtn}>
                  <button className={css.demoBtn}>Demo</button>
                  <button className={css.codeBtn}>Code</button>
                </nav>
              </main>

              <main className={css.portfolioImg}>
                <motion.img
                variants={fadeIn("up","tween",0.4,0.8)} 
                src='showCase2.png'
                />
                <div className={css.overlay}></div>
                <nav className={css.portfolioBtn}>
                  <button className={css.demoBtn}>Demo</button>
                  <button className={css.codeBtn}>Code</button>
                </nav>
              </main>

              <main className={css.portfolioImg}>
                <motion.img
                variants={fadeIn("up","tween",0.6,0.8)} 
                src='showCase3.png'/>
                <div className={css.overlay}></div>
                <nav className={css.portfolioBtn}>
                  <button className={css.demoBtn}>Demo</button>
                  <button className={css.codeBtn}>Code</button>
                </nav>
              </main>
              
              
              {/* <motion.img
              variants={fadeIn("up","tween",0.4,0.8)} 
              src='showCase2.png'/>
              <motion.img
              variants={fadeIn("up","tween",0.6,0.8)} 
              src='showCase3.png'/> */}

            </figure>
    </motion.section>
  )
}

export default PortfolioSection