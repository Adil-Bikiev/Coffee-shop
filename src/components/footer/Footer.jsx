import React from 'react'
import logo from '../../assets/logo.png'
import { FaRegEnvelope, FaCaretRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__grid container grid">
            <div className="footer__content">
                <a href="/" className="footer__logo">
                    <img src={logo} alt="" className='footer__logo-img' />
                </a>

                <p className="footer__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt voluptatem cumque ipsum ut dolor placeat, dignissimos eum laborum magni.
                </p>

                <ul className="footer__contact">
                    <li className="footer__contact-item">
                        <AiOutlinePhone className='icon'/> +9 999 999 999
                    </li>

                    <li className="footer__contact-item">
                        <MdOutlineLocationOn className='icon'/> 25 Micro IS I
                    </li>

                    <li className="footer__contact-item">
                        <FaRegEnvelope className='icon'/> info@example.com
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Quick Links</h3>

                <ul className="footer__links">
                    <li><a className='footer__link' href="#about"><FaCaretRight className='icon'/> About us</a></li>
                    <li><a className='footer__link' href="#menu"><FaCaretRight className='icon'/> Menu</a></li>
                    <li><a className='footer__link' href="#features"><FaCaretRight className='icon'/> Features</a></li>
                    <li><a className='footer__link' href="#gallery"><FaCaretRight className='icon'/> Gallery</a></li>
                    <li><a className='footer__link' href="#team"><FaCaretRight className='icon'/> Team</a></li>
                    <li><a className='footer__link' href="#reservation"><FaCaretRight className='icon'/> Reservation</a></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">
                    Opening Hours
                </h3>

                <div className="footer__opening-hour">
                    <ul className="opening__hour-list">
                        <li className="opening__hour-item">
                            <span>Saturday:</span>
                            <span>09AM - 06PM</span>
                        </li>

                        <li className="opening__hout-item">
                            <span>Monday:</span>
                            <span>09AM - 06PM</span>
                        </li>

                        <li className="opening__hout-item">
                            <span>Tuesday:</span>
                            <span>09AM - 06PM</span>
                        </li>

                        <li className="opening__hout-item">
                            <span>Wednesday:</span>
                            <span>09AM - 06PM</span>
                        </li>

                        <li className="opening__hout-item">
                            <span>Thursday:</span>
                            <span>09AM - 06PM</span>
                        </li>

                        <li className="opening__hout-item">
                            <span>Friday:</span>
                            <span>09AM - 06PM</span>
                        </li>

                        <li className="opening__hout-item">
                            <span>Sunday:</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Newletter</h3>

                <p className="footer__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, expedita.
                </p>

                <form action="" className="subscribe__form">
                    <input type="email" placeholder='Your Email' className="form__input subscribe__input" />
                    <button className="btn btn--flex subscribe__btn">
                        <FaRegEnvelope/> Subscribe Now
                    </button>
                </form>

                <div className="footer__socials">
                    <h3 className="footer__social-follow">Follow us:</h3>

                    <div className="footer__social-links">
                        <a href="/" className="footer__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="/" className="footer__social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="footer__social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="/" className="footer__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <p className="copyright__text">
            &copy; Copyright 2025 <span>Coffero</span> All Right Reserved.
        </p>
    </footer>
  )
}

export default Footer
