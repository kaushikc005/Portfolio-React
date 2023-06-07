import React from "react";
import css from "../styles/Skills.module.scss";
import { skillArray } from "../utils/data";
import { motion } from "framer-motion";
import { fadeIn, textAnimate } from "../utils/motion";

const Skills = () => {
  const skillcard = skillArray.map((item, key) => {
    <section key={key}>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    </section>;
  });
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className={`${css.skillsWrapper} paddings flexColumn`}
    >
      <a className="anchor" id="skills"></a>
      <motion.header variants={textAnimate(0.4)}>
        <p className="primary-text">Technologies i have worked with</p>
      </motion.header>
      <section className={`${css.skillsContainer} paddings`}>
        {skillArray.map((item, key) => (
          <motion.section
            variants={fadeIn("up", "tween", (key + 1) * 0.1, 1)}
            key={key}
            className={css.skillCard}
            style={{ boxShadow: `3px 3px 8px ${item.color}` }}
          >
            <img src={item.src} className={css.skillImg} />
          </motion.section>
        ))}
      </section>
    </motion.section>
  );
};

export default Skills;
