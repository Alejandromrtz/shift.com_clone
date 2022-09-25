import React from 'react'
import './footer.css';

function Footer() {
  return (
    <footer className='footer__section'>
      <div className='footer__internals'>
        <div className='footer__logo'>
        <img className=""
                src='https://assets.website-files.com/6001a28cf379946916779185/6005bd7e02dde7568843e93c_logo.svg'
                alt='logo'>
             </img>
             <p className='Footer__para'>
              Shift copy&;2022
             </p>
        </div>
        <div className='footer__list'>
          <ul className='footer__links'>
            <h3>Car Shopping</h3>
            <li>How it works</li>
            <li>Shop cars</li>
            <li>Shift certified</li>
          </ul>
        </div>
        <div className='footer__list'>
          <ul className='footer__links'>
            <h3>Car selling</h3>
            <li>How it works</li>
            <li>Sell or Trade</li>
          </ul>
        </div>
        <div className='footer__list'>
          <ul className='footer__links'>
            <h3>Financing</h3>
            <li>Shift financing</li>
            <li>Prequalification</li>
            <li>Car loan calculator</li>
            <li>Protection Plans</li>
          </ul>
        </div>
        <div className='footer__list'>
          <ul className='footer_links'>
            <h3>Company</h3>
            <li>About Shift</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Articles</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='footer__list'>
          <ul className='footer__links'>
            <h3>Support</h3>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Terms and Privacy</li>
            <li>CA Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer