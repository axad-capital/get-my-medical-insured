import React, { useState, useEffect } from 'react'
import './callCenterWebformComp.css'
import Logo from '../HomeComp/nav-logo.png'
import CallCenterImg from './call-center-img.png'

const CallCenterWebformComp = () => {

    const [error, setError] = useState('')
    const [agents, setAgents] = useState()

    useEffect(() => {
      fetch('https://en4g4rm12xb1dw2.m.pipedream.net')
      .then(res => res.json())
      .then(data => {
        setAgents(data.agents_available)
      })
    }, [])
    

    function handleFormSubmit() {

        let formData = {
            first: document.getElementById('first').value,
            last: document.getElementById('last').value,
            phone: document.getElementById('phone').value,
            birth: document.getElementById('birth').value
        }

        if (formData.first === "" || formData.last === '' || formData.phone === '' || formData.birth === '') {
            setError('All Fields Are Required*')
            return
        }

        setError('')

        fetch('https://enn4t4qlytmn828.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        window.location.href = '/call-center-thanks'

    }

    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
            </div>
            <div className="call-center-form-container">
                <div className="call-center-form">
                    <h1 className='call-center-title'>Call Center</h1>
                    <label htmlFor="first">First Name <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <input type="text" name="first" id="first" placeholder='First Name' />
                    <br />
                    <br />

                    <label htmlFor="last">Last Name <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <input type="text" name="last" id="last" placeholder='Last Name' />
                    <br />
                    <br />

                    <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <input type="number" name="phone" id="phone" placeholder='Phone Number' />
                    <br />
                    <br />

                    <label htmlFor="birth">Date of Birth <span style={{ color: 'red' }}>*</span></label>
                    <br />
                    <input type="date" name="birth" id="birth" placeholder='Date of Birth' />
                    <br />
                    <br />
                    <div className="call-center-btn">
                        <button onClick={handleFormSubmit}>Submit</button>
                    </div>
                    <p style={{ color: 'red', textAlign: 'center', fontWeight: '500', fontSize: '25px' }}>Agents Available: {agents}</p>
                    <br />
                    <p style={{ color: 'red', textAlign: 'center', fontWeight: '700' }}>{error}</p>
                    <div className="call-img-container">

                        <img className='call-center-img' src={CallCenterImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallCenterWebformComp