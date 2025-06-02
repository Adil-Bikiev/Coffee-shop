import React from 'react'
import { FiCheck } from "react-icons/fi";
import './about.css'

const About = () => {
  return (
    <section className="about section" id='about'>
        <div className="about__grid container grid">
            <div className="about__img-wrapper">

            </div>
            <div className="about__content">
                <h2 className="section__title" data-title='About Us'>
                    Fresh Quality And Organic Tasty Coffee House For You
                </h2>
                <p className="about__description">
                    There are many vartiations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatem! Lorem ipsum dolor sit amet.
                </p>
                <div className="about__details grid">
                    <p className="about__details-description">
                        <FiCheck className='about__details-icon' />
                        At vero eos et accusamus et iusto odio
                    </p>

                    <p className="about__details-description">
                        <FiCheck className='about__details-icon'/>
                        Established fact that a reader will be distracted
                    </p>

                    <p className="about__details-description">
                        <FiCheck className='about__details-icon'/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <p className="about__details-description">
                        <FiCheck className='about__details-icon'/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                </div>

                <a href="#team" className="btn">
                    Our experts
                </a>
            </div>
        </div>
    </section>
    )
}

export default About
