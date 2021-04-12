import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
    return<nav>
            <ul>
                <a href='Home'>HOME</a>
                <a href='#Works'>WORKS</a>
                <a href='#'>ABOUT</a>
                <a href='#'>CONTACT</a>
            </ul>
            <div className='links'>
                <a href='#'><FontAwesomeIcon icon={faGithub} className='github'/></a>
                <a href='#'><FontAwesomeIcon icon={faLinkedin} className='linkedin'/></a>
            </div>
        </nav>
} 