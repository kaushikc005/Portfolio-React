import React from "react";
import css from "../styles/PortfolioSection.module.scss";
import { motion } from "framer-motion";
import { fadeIn, textAnimate } from "../utils/motion";
const PortfolioSection = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
      className={`${css.portfolioWrapper} paddings`}
    >
      <a className="anchor" id="portfolio"></a>
      <motion.header 
      initial="hidden"
      whileInView="show"
      className="flexSpaceBetween">
        <motion.p className="primary-text" 
        variants={textAnimate(0.5)}>
          My Latest Works
        </motion.p>
        <motion.a
          variants={textAnimate(0.3)}
          href="https://github.com/kaushikc005?tab=repositories"
          className="link"
          target="_blank"
        >
          Explore more on Github
          
        </motion.a>
      </motion.header>
      <figure className={`${css.portfolioContainer} flexStart`}>
        <main className={css.portfolioImg}>
          <motion.img
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            src="showCase1.png"
          />
          <div className={css.overlay}></div>
          <nav className={css.portfolioBtn}>
            <a
              className={css.demoBtn}
              href="https://react-youtube-clone1.vercel.app/"
              target="_blank"
            >
              Demo
            </a>
            <a
              className={css.codeBtn}
              href="https://github.com/kaushikc005/react-youtube-clone"
              target="_blank"
            >
              Code
            </a>
          </nav>
        </main>

        <main className={css.portfolioImg}>
          <motion.img
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            src="showCase2.png"
          />
          <div className={css.overlay}></div>
          <nav className={css.portfolioBtn}>
          <a
              className={css.demoBtn}
              href="https://exercise-app-react0.netlify.app/"
              target="_blank"
            >
              Demo
            </a>
            <a
              className={css.codeBtn}
              href="https://github.com/kaushikc005/react-fitness-app"
              target="_blank"
            >
              Code
            </a>
          </nav>
        </main>

        <main className={css.portfolioImg}>
          <motion.img
            variants={fadeIn("up", "tween", 0.6, 0.8)}
            src="showCase3.png"
          />
          <div className={css.overlay}></div>
          <nav className={css.portfolioBtn}>
          <a
              className={css.demoBtn}
              href="https://notes-webapp1.netlify.app/"
              target="_blank"
            >
              Demo
            </a>
            <a
              className={css.codeBtn}
              href="https://github.com/kaushikc005/react-notes-app"
              target="_blank"
            >
              Code
            </a>
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
  );
};

export default PortfolioSection;
