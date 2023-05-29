import React from 'react'
import css from '../styles/PortfolioSection.module.scss'
const PortfolioSection = () => {
  return (
    <section className={`${css.portfolioWrapper} paddings`}>
        <a className='anchor' id="portfolio"></a>
            <header className='flexSpaceBetween'>
                <p className='primary-text'>My Latest Works</p>
                <a href="https://github.com/kaushikc005?tab=repositories" className='link' target="_blank">Explore more on Github</a>
            </header>
            <figure className={`${css.portfolioContainer} flexStart`}>
              <main>
                <img src='showCase1.png'/>
                <nav className={css.portfolioBtn}>
                  <button>Demo</button>
                  <button>Code</button>
                </nav>
              </main>
              
              <img src='showCase2.png'/>
              <img src='showCase3.png'/>

            </figure>
    </section>
  )
}

export default PortfolioSection