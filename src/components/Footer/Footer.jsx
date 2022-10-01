import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Logo />

            <div className='footerItemContainer'>
                <div className="footerItem">
                    <FontAwesomeIcon icon={faWhatsapp} className='footerIcon' />
                    <p>+54 11 1234567</p>
                </div>
                <div className="footerItem">
                    <FontAwesomeIcon icon={faEnvelope} className='footerIcon' />
                    <p>info.prepagas@blink.com</p>
                </div>
                <div className="footerItem">
                    <FontAwesomeIcon icon={faLocationDot} className='footerIcon' />
                    <p>CABA, Argentina</p>
                </div>
                <div className="footerItem">
                    <FontAwesomeIcon icon={faInstagram} className='footerIcon' />
                    <p>comparador.blink</p>
                </div>
            </div>
        </div>
    )
}

export default Footer