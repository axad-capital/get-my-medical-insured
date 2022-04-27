import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <br />
        <p>2020 GetMyMedicareInsured.com. All other trademarks and copyrights are the property of their respective holders. GetMyMedicareInsured.com is a privately owned website and is not associated with any state or Federal government, the Centers for Medicare & Medicaid, healthcare.gov or the Department of Health and Human Services and is not an insurer or licensed agency.</p>
        <br />
        <br />
        <br />
        <div className='terms'>
          <Link to='/privacy-policy'><h6>Privacy Policy</h6></Link>
          <Link to='/terms'><h6>Terms and Conditions</h6></Link>
          <Link to='/disclaimer'><h6>Disclaimer</h6></Link>
          <Link to='/partners'><h6>Partners</h6></Link>
        </div>
        <br />
        <p>&copy; 2020-22 Get My Medicare Insured. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer