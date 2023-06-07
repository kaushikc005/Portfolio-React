import React from "react";
import css from "../styles/HeroSection.module.scss";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      id="hero"
      className={`${css.heroWrapper} paddings`}
    >
      <motion.section className={`${css.topSection} flexSpaceBetween`}>
        <motion.p
          variants={fadeIn("left", "tween", 0.3, 1)}
          className={` primary-text`}
        >
          Hey There,
          <br />
          I'm Kaushik.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className={`secondary-text`}
        >
          I'm a frontend developer,
          <br />
          who loves to make creative <br />
          and fruitful designs come true.
          <br />
        </motion.p>
      </motion.section>
      <motion.section className={`${css.heroSectionImg} flexCenter`}>
        <motion.img
          variants={fadeIn("up", "tween", 0.4, 1)}
          src="person3.png"
        />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="show"
        className={`${css.bottomSection} flexSpaceBetween`}
      >
        <motion.aside
          className={`${css.bottomLeft}`}
          variants={fadeIn("down", "tween", 0.3, 1)}
        >
          <a href="mailto:kaushikc005@gmail.com" className="link">
            kaushikc005@gmail.com
          </a>
          <p className="secondary-text"></p>
        </motion.aside>
        <motion.aside
          className={`${css.bottomRight} flexSpaceBetween`}
          variants={fadeIn("down", "tween", 0.3, 1)}
        >
          <img src="certificate.png" alt="certificate" width="40px" />
          <p className="secondary-text">Front-end/UI Developer</p>
        </motion.aside>
      </motion.section>
    </motion.article>
  );
};

export default HeroSection;
