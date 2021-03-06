import React from 'react'
import Logo from '../HomeComp/nav-logo.png'

const Thanks = () => {
    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
                <div className="nav-num">
                    <p>Have a specific question? Ask a licensed insurance agent:</p>
                    <h4>Call For Quotes : (877) 930-2113</h4>
                    <h5>TTY Users: 711</h5>
                    <p>A+ Rating More than 3 million customers served since 2013.</p>
                </div>
            </div>

            <h1 style={{ textAlign: "center" }}>Check Out Your Life Insurance Quotes</h1>
            <br />

            <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=1105&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
        </div>
    )
}

export default Thanks