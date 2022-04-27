import React from 'react'
import './homeComp.css'
import Logo from './nav-logo.png'

const HomeComp = () => {
  return (
    <div>
        <div className="nav">
            <img className='logo' src={Logo} alt="logo" />
            <div className="nav-num">
                <p>Have a specific question? Ask a licensed insurance agent:</p>
                <h5>Call For Quotes : (877) 930-2113</h5>
                <h5>TTY Users: 711</h5>
                <p>A+ Rating More than 3 million customers served since 2013.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeComp