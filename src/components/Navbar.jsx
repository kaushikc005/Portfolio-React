import React, { useState } from 'react'
import css from '../styles/Navbar.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
//   window.addEventListener('scroll',(e)=>{
//     const nav = document.getElementsByClassName('navbarWrapper');
//     console.log(nav)
//     if(window.scrollY>10){
//       nav.classList.add("add-shadow");
//     }else{
//       nav.classList.remove("add-shadow");
//     }

// });'

  const [menuHide, setMenuHide] = useState(false) 
  return (
    <div className={`${css.navbarWrapper} paddings`}>
      
        <div className={`flexSpaceBetween ${css.navbarContainer}`} >
             <div className={css.navbarTitle}>
             <p>Kaushik &nbsp;Chhetri</p>
             </div>
             <ul className='flexCenter'>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#">Print CV</a></li>
             </ul>
             
        </div>
        
    </div>
  )
}

export default Navbar