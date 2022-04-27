import React from 'react'
import './homeComp.css'
import Logo from './nav-logo.png'
import HowTo from './howto.png'

const HomeComp = () => {
    return (
        <div>
            <div className="nav">
                <img className='logo' src={Logo} alt="logo" />
                <div className="nav-num">
                    <p>Have a specific question? Ask a licensed insurance agent:</p>
                    <h4>Call For Quotes : (877) 930-2113</h4>
                    <h5>TTY Users: 711</h5>
                    <p>A+ Rating More than 3 million customers served since 2013.</p>
                </div>
            </div>

            <div className="form-bg">
                <div className="form">
                    <h1 className="form-title">Medicare Insurance Quotes</h1>
                    <div className="line"></div>
                    <h3 className="form-sub-title">Easily Find the Right Medicare Policy for you</h3>
                    <br />
                    <p className="check">✔️ Find plans to help cover most coinsurance and deductibles</p>
                    <p className="check">✔️ Could be eligible to get coverage for nursing facilities and long-term care</p>
                    <p className="check">✔️ No network restrictions</p>
                    <p className="check">✔️ You've worked hard for Medicare- Maximize your benefits!</p>
                    <br />

                    <label htmlFor="zip">Zipcode</label>
                    <br />
                    <input type="number" name="zip" id="zip" placeholder='zip' />
                    <br />
                    <br />

                    <label htmlFor="state">statecode</label>
                    <br />
                    <select name="state" id="state" placeholder='zip'>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="enrolled">Are You Currently Enrolled?</label>
                    <br />
                    <select name="enrolled" id="enrolled" placeholder='enrolled'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="military">Are You Or Your Spouse In The Military?</label>
                    <br />
                    <select name="military" id="military" placeholder='military'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="gender">What Is Your Gender</label>
                    <br />
                    <select name="gender" id="gender" placeholder='gender'>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="condition">Do You Have Any Pre-existing Conditions?</label>
                    <br />
                    <select name="condition" id="condition" placeholder='condition'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="tabacco">Do You Smoke/Use Tabacco?</label>
                    <br />
                    <select name="tabacco" id="tabacco" placeholder='tabacco'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />
                    <button className='form-btn'>Submit</button>
                </div>
            </div>

            <div className="steps-container">
                <h1 className="steps-title">Follow Simple Steps & Get Insured</h1>
                <p>It can be puzzling to choose Medicare plans. But since all Medicare plans have been standardized and have time-tested benefits, your insurance is an easy puzzle to solve. Once you know the benefit pieces that make up these plans, you can assemble the coverage that matters most to you.</p>
                <img className='how-to-img' src={HowTo} alt="how to" />
                <div className='get-btn'>
                    <a href="#form">Get Medicare Quote Now</a>
                </div>
            </div>
        </div>
    )
}

export default HomeComp