import React from 'react'

const FormPageThree = (props) => {
  return (
    <div>
      <div className="form-extra-info">
        <h5 className='long-form-steps'>Step 3 of 3</h5>
        <div className='previous-container'>
          <button id='previous' onClick={props.last}>Start Over</button>
        </div>
        <br />

        <label htmlFor="credit">Credit Score</label>
        <br />
        <select name="credit" id="credit">
          <option value="Superior">Superior</option>
          <option value="Excellent">Excellent</option>
          <option value="Average">Average</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
          <option value="Unsure">Unsure</option>
        </select>
        <br />
        <br />

        <div>
          <label htmlFor="tobacco">Are You A Smoker?</label>
          <br />
          <select name="tobacco" id="tobacco">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="alcoholic">Are You An Alcoholic?</label>
          <br />
          <select name="alcoholic" id="alcoholic">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="house-size">Household Size</label>
          <br />
          <select type="number" name="house-size" id="house-size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
          </select>
          <br />
          <br />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="income">Household Income</label>
          <br />
          <input type="number" name="income" id="income" placeholder='Household Income' />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="pregnant">Are you pregnant?</label>
          <br />
          <select name="pregnant" id="pregnant">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="hospitalized">Recently Hospitalized?</label>
          <br />
          <select name="hospitalized" id="hospitalized">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <br />
          <br />
        </div>

        <p className='consent'>By clicking “Yes” I provide my signature expressly consenting to contact from axrate.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy</p>
        <br />

        {/* <button onClick={props.last}>Previous</button> */}
        <button onClick={() => props.longFormSubmit(
          document.getElementById('credit').value,
          document.getElementById('tobacco').value,
          document.getElementById('alcoholic').value,
          document.getElementById('house-size').value,
          document.getElementById('income').value,
          document.getElementById('pregnant').value,
          document.getElementById('hospitalized').value,
        )} className='form-btn'>Submit</button>
      </div>
      <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>
    </div>
  )
}

export default FormPageThree