import React from 'react'
import './homeComp.css'
import Logo from './nav-logo.png'
import HowTo from './howto.png'
import Plans from './plans.png'
import { v4 as uuidv4 } from 'uuid';


const HomeComp = () => {

    function handleFormSub() {
        let formData = {
            zip: document.getElementById('zip').value,
            state: document.getElementById('state').value,
            enrolled: document.getElementById('enrolled').value,
            military: document.getElementById('military').value,
            gender: document.getElementById('gender').value,
            conditions: document.getElementById('conditions').value,
            tabacco: document.getElementById('tabacco').value,
            id: uuidv4()
        }

        localStorage.setItem('medicareInsure', JSON.stringify(formData))
        window.location.href = '/thanks'
    }

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
                    <select name="condition" id="conditions" placeholder='condition'>
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
                    <button onClick={handleFormSub} className='form-btn'>Submit</button>
                </div>
            </div>

            <div className="steps-container">
                <h1 className="steps-title">Follow Simple Steps & Get Insured</h1>
                <p>It can be puzzling to choose Medicare plans. But since all Medicare plans have been standardized and have time-tested benefits, your insurance is an easy puzzle to solve. Once you know the benefit pieces that make up these plans, you can assemble the coverage that matters most to you.</p>
                <img className='how-to-img' src={HowTo} alt="how to" />
                <div className='get-btn'>
                    <a href="#form">Get Medicare Quote Now</a>
                </div>
                <div className="steps">
                    <div className="step">
                        <h5>Fast, Easy & Quick Phone Call</h5>
                    </div>
                    <div className="step">
                        <h5>Additional Benefts Included</h5>
                    </div>
                    <div className="step">
                        <h5>Brands that you can trust</h5>
                    </div>
                    <div className="step">
                        <h5>Pricing & Newest Plans</h5>
                    </div>
                    <div className="step">
                        <h5>Get The Right Policy for you</h5>
                    </div>
                </div>
            </div>

            <div className="how-much-container">
                <div className="how-much">
                    <h3>How Much Do Medicare Plans Cost?</h3>
                    <div className="line"></div>
                    <h6>Private insurance companies are required to offer the same benefits on each plan outlined above. However, they do control the premium they are able to charge for these plans. This is why it is important to shop around or speak with a licensed insurance agent that represents multiple insurance companies.</h6>
                </div>
                <div className="how-much">
                    <h3>What is Medicare Supplemental Insurance?</h3>
                    <div className="line"></div>
                    <h6>Overall, Medicare Supplemental Insurance is a type of insurance that provides supplemental insurance on Original Medicare, which is the government program that provides health insurance benefits to seniors.</h6>
                </div>
            </div>

            <div className="plans-container">
                <h1>What Are Medicare Plans?</h1>
                <br />
                <p>That depends on your specific health care needs and budget. You'll get these additions to your Original Medicare benefits no matter which Medicare plan you join. Note that Plan F is no longer available to new Medicare enrollees.</p>
                <br />
                <img className='chart' src={Plans} alt="chart" />
            </div>

            <div className="why-use-container">
                <div className="why-use">
                    <h1>Why use GetMyMedicareInsured.com to Find a Medicare supplement plan?</h1>
                    <br />
                    <h2>We help you compare plans from trusted brands to save time & money, get the health insurance plan for you! if you have any questions or would like assistance to find a plan. Call us! We are here to help you!</h2>
                    <br />
                    <br />
                    <div className='get-btn'>
                        <a href="#form">Get Medicare Quote Now</a>
                    </div>
                    <br />
                    <p>**licensed insurance agent are available to speak with you.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeComp