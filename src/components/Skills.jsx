import React from 'react'
import css from '../styles/Skills.module.scss'
import { skillArray } from '../utils/data'


const Skills = () => {
   
    console.log(skillArray)
    const skillcard=skillArray.map((item,key) => {
        <section key={key}>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          
         </section>
            
      })
  return (
    <section className={`${css.skillsWrapper} paddingsLarge flexColumn`}>
        <a className='anchor' id="skills"></a>
        <header>
            <p className='primary-text'>The technologies i have worked with</p>
        </header>
        <section className={`${css.skillsContainer}`}>
        {skillArray.map((item,key) => (
           <section key={key} className={css.skillCard}
           style={{boxShadow:`0px 3px 8px ${item.color}`}}>  
            <img src={item.src} className={css.skillImg}/>
         </section>
            
           )
           )}
        </section>

    </section>
  )
}

export default Skills