import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

function Footer() {
    return (
        <div id="footer" className="footer">
        <h1>Contact Me</h1>
        <div className="socials">
          <div id="linkedin"> 
            <SocialIcon url="https://www.linkedin.com/in/michael-reidy88/" />
            </div> 
            <div id="github">
            <SocialIcon url="https://github.com/mreidy88" />
            </div>
            </div>
      </div>
    )
}

export default Footer
