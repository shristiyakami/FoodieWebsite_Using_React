import React from 'react'
import './Services.css'
import { services_list } from '../../assets/assets'

const Services = () => {
  return (
    <div className="services">
        <h1>Unique services for your events</h1>

    <div className="services-list">
        {services_list.map((item,index)=>{
            return(
                <div key={index} className='services-list-item'>
                    <img src={item.service_image} alt="" />
                    <h3>{item.service_name}</h3>
                    <p>{item.service_subname}</p>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Services

