import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='header'>
      <div className="header-contents">
        <h1>Are You Hungry?</h1>
        <h2>BEST OPTION OF THE DAY IN YOUR TOWN</h2>
        <p>Order your favourite food here</p>
        <Link to="/menu" onClick={() => window.scrollTo(0, 0)}><button>Order Now</button></Link>
        <div className="phone-wrapper">
          <img src={assets.phone_icon} alt="" className="phone_icon" />
          <span className="phone-no">098-564-577</span>
        </div>
      </div>
    </div>
  )
}

export default Header
