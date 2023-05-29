import React, { useEffect, useState } from 'react'
import css from '../styles/Navbar.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {RiCloseFill} from 'react-icons/ri'

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

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  
  const showButton=()=> {
    console.log(window.innerWidth)
       if(window.innerWidth >=768)
         setButton(false);
      else
         setButton(true);
        
    }

    useEffect(()=> {
      window.addEventListener("resize", showButton);
      showButton();
     },[])
   console.log(window.innerWidth)
   const handleClick=()=> {
    setClick(prev => !prev)
    if(click)
    document.getElementById('#menuToggle').classList.remove(css.navShowMenu)
    else
    document.getElementById('#menuToggle').classList.add(css.navShowMenu) 
   }

  return (
    <div className={`${css.navbarWrapper} paddings`}>
      
        <div className={`flexSpaceBetween ${css.navbarContainer}`} >
             <div className={css.navbarTitle}>
             <p>Kaushik &nbsp;Chhetri</p>
             </div>

             <ul id="#menuToggle"
             className={`${button?css.navMobileMenu:css.navMobile} flexCenter`}>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#">Print CV</a></li>
             </ul>

             {
             button &&
             <div className={css.navMenuBtn} onClick={handleClick}>
              {click ?<RiCloseFill />:<BiMenuAltRight />}
              </div>
             }
              {/* !button ?<ul className='flexCenter'>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#">Print CV</a></li>
             </ul> */}
             
        </div>
        
    </div>
  )
}

export default Navbar