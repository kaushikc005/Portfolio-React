import React, { useEffect, useState } from "react";
import css from "../styles/Navbar.module.scss";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import useHeaderShadow from "../hooks/useHeaderShadow";
import { bounce, getMenuStyles } from "../utils/motion";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const showButton = () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) setButton(false);
    else setButton(true);
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);
    showButton();
  }, []);

  const handleClick = () => {
    setClick((prev) => !prev);
    if (click)
      document.getElementById("#menuToggle").classList.remove(css.navShowMenu);
    else document.getElementById("#menuToggle").classList.add(css.navShowMenu);
  };
   
  return (
    <motion.article
      variants={bounce}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${css.navbarWrapper} paddings`}
      style={{ boxShadow: useHeaderShadow() }}
    >
      <nav className={`flexSpaceBetween ${css.navbarContainer}`}>
        <div className={css.navbarTitle}>
          <p>Kaushik &nbsp;Chhetri</p>
        </div>

        <ul
          id="#menuToggle"
          style={getMenuStyles(click)}
          className={`${button ? css.navMobileMenu : css.navMobile} flexCenter`}
        >
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1kxen9HkTZAuVIaXp4wCOV64aE108fB8r/view?usp=sharing" download>Download Resume</a>
          </li>
        </ul>

        {button && (
          <aside className={css.navMenuBtn} onClick={handleClick}>
            {click ? <RiCloseFill /> : <BiMenuAltRight />}
          </aside>
        )}
      </nav>
    </motion.article>
  );
};

export default Navbar;
