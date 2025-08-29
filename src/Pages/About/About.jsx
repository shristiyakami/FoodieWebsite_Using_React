import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
    return (
        <div className='AboutUs'>
            <img src={assets.AboutUs_1} alt="" className="AboutUs_1" />
            <img src={assets.AboutUs_2} alt="" className="AboutUs_2" />

            <div className="AboutUs-content">
                <h1>We provide healthy food for your family.</h1>
                <p className='AboutUs-text'>
                    At place, we believe that dining is not just about food, but also about the overall experience.
                    Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                </p>
            </div>
        </div>
    )
}

export default About
