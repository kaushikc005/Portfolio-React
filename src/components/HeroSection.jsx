import React from 'react'
import css from '../styles/HeroSection.module.scss'
const HeroSection = () => {
  return (
    <div className={`${css.heroWrapper} paddings`}>
        <div className={`${css.topSection} flexSpaceBetween`}>
            <p className={` primary-text`}>
            Hey There,<br/>I'm Kaushik.
            </p>
            <p className={`secondary-text`}>
                I'm a frontend developer,<br/>
                who loves to make creative <br/> 
                and fruitful designs come true.<br />  
            </p>
        </div>
         <div className={`${css.heroSectionImg} flexCenter`}>
            <img src='person.png'/>
         </div>
        <div className={`${css.bottomSection} flexSpaceBetween`}>
            <a href="mailto:kaushikc005@gmail.com"
            className='link'>kaushikc005@gmail.com</a> 
            <p className='secondary-text'></p>
        </div>
        
    </div>
  )
}

export default HeroSection