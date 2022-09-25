import React from 'react';
import "./navbar.css";


function Navbar() {
  return (
    <nav className='navbar__whole'>
        <div className='image__placement'>
            <img className="logo__image"
                src='https://assets.website-files.com/6001a28cf379946916779185/6005bd7e02dde7568843e93c_logo.svg'
                alt='logo'>
             </img>
        </div>
        <ul className='navbar__list'>
            <li>Shop Cars</li>
            <li>Sell or Trade</li>
            <li>Financing</li>
            <li>Car Finder</li>
            <li>How Shift works?</li>
            <li>ADD MORE TAB</li>
            <div className='search__area'>
                <input className="search__box" type="text" placeholder="Search by Make, Model, or Keyword"></input>
            </div>
        </ul>
    
    </nav>
  )
}

export default Navbar