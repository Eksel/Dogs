import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

export default function Footer() {
  return (
    <footer>
      <div className="left">
        <h2>Możesz nas odwiedzić też:</h2>
        <ul>
          <a href="https://www.olx.pl/">
            <li>
              <img src={logo1} alt="" />
              OLX
            </li>
          </a> 
          <a href="https://www.facebook.com/">
            <li>
              <img src={logo3} alt="" />
              Facebook
            </li>
          </a> 
          <a href="https://www.instagram.com/">
            <li>
              <img src={logo2} alt="" />
              Instagram
            </li>
          </a> 
          <a href="https://twitter.com/?lang=pl">
            <li>
              <img src={logo4} alt="" />
              X
            </li>
          </a>
        </ul>
      </div>
      <div className='right'>
      <h2>Stronę opracował:</h2>
      <ul>
        <li>
          <a href="https://github.com/Eksel">Krzysztof Heksel </a> 
        </li>
      </ul>
      </div>
    </footer>
  )
}
