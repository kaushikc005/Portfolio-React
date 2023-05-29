import React from 'react'
import css from '../styles/Footer.Module.scss'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
const Footer = () => {
    
  return (
     <footer className={`${css.footerWrapper}`}>
        <section className={`${css.footerContainer} flexSpaceBetween`}>
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
                    <li><p>Notes</p></li>
                    <li><p>Experience</p></li>
                   </ul>
               </section>
        </section>
     </footer>
  )
}

export default Footer