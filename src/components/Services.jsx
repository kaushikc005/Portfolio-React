import React from 'react'
import css from '../styles/Services.module.scss'
import Card from './Card'
const Services = () => {
    console.log(Card)
  return (
    <div className={`${css.servicesWrapper} paddings`}>
      <a className='anchor' id="services"></a>
        <div className={`${css.servicesContainer} flexCenter`}>
          <div className={css.leftSection}>
              <Card />
          </div>
          <div className={css.rightSection}>
              <p className='primary-text'>What do i do?</p>
              <p className='secondary-text'>I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.
              We use process design to create digital products. Besides that also help their business</p>
          </div>
        </div>
    </div>
  )
}

export default Services