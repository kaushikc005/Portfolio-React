import React from 'react'
import css from '../styles/Card.module.scss'
import experience from '../utils/data'

const Card = () => { 
    
    console.log(typeof experience[0].icon)
   return (
       <div className={`${css.cardWrapper}`}>
           {experience.map((item,key)=> (
               <div className={`${css.cardContainer} flex paddings`}>
                   <div className={css.leftCardSection}>
                     <item.icon  style={{background:item.bg,fontSize:'20px',borderRadius:'50%',color:'#fff',padding:'0.5rem'}}/>
                   </div>
                   <div className={css.rightCardSection}>
                    <p className={css.cardPrimaryText}>{item.name}</p>
                    
                   </div>
               </div>

            
           ))

           }
       </div>
   )
}

export default Card