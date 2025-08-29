import React from 'react'
import './Browse.css'
import { menu_list } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Browse = () => {
  
  return (
    <div className='browse-menu' id='browse-menu'>
    <h1>Browse Our Menu</h1>
    <p className='browse-menu-text'>Choose from a diverse menu featuring a delectable array</p>
    <div className="browse-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div key={index} className='browse-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>  
      <Link to="/menu" onClick={() => window.scrollTo(0, 0)}><button>Explore Menu</button></Link>
    </div>
  )
}

export default Browse


