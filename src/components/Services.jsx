import React from "react";
import css from "../styles/Services.module.scss";
import Card from "./Card";
import { motion } from "framer-motion";
import { fadeIn, textAnimate } from "../utils/motion";
const Services = () => {
  console.log(Card);

  return (
    <motion.article className={`${css.servicesWrapper} paddings`}>
      <a className="anchor" id="services"></a>
      <main className={`${css.servicesContainer} flexCenter`}>
        <motion.section className={css.leftSection}>
          <Card />
        </motion.section>
        <motion.section
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className={css.rightSection}
        >
          <p className="primary-text">What do i do?</p>
          <p className="secondary-text">
            Develop highly interactive Front end / User Interfaces for your web
            and mobile applications.
            <br />A passionate frontend developer focused on creating
            interactive, accessible, and responsive websites.
          </p>
        </motion.section>
      </main>
    </motion.article>
  );
};

export default Services;
