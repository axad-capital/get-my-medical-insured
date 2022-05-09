import React, { useState } from 'react';
import './longForm.css'
import Logo from '../HomeComp/nav-logo.png';
import { v4 as uuidv4 } from 'uuid';
import FormPageOne from './FormPageOne';
import FormPageTwo from './FormPageTwo';
import FormPageThree from './FormPageThree';
import LongFormImg from './long-form-img.jpg'

const LongForm = () => {

    const [showForm, setShowForm] = useState(1)
    const [formError, setFormError] = useState("")

    function getAge(birth) {
        var today = new Date();
        var birthDate = new Date(birth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    let storage = JSON.parse(localStorage.getItem('getmymed-long-form-data'))
    if (storage === null) {
        storage = []
    }

    function nextForm1(zip, homeowner, insured) {

        if (zip === "") {
            setFormError("Missing fields.")
            return
        }

        setFormError("")
        setShowForm(showForm + 1)
        storage.push(zip, homeowner, insured)
        localStorage.setItem('getmymed-long-form-data', JSON.stringify(storage))
    }

    function nextForm2(first, last, email, phone, address, state, gender, birth, married) {
        let age = getAge(birth)

        if (age < 18) {
            setFormError("You must be 18 years of age or older.")
            return
        }

        if (first === "" || last === "" || email === "" || phone === "" || address === "" || state === "" || isNaN(age)) {
            setFormError("Missing fields.")
            return
        }

        setFormError("")
        setShowForm(showForm + 1)
        storage.push(first, last, email, phone, address, state, gender, birth, married)
        localStorage.setItem('getmymed-long-form-data', JSON.stringify(storage))

    }

    function previousForm() {
        setFormError("")
        setShowForm(1)
        localStorage.clear()
    }

    function longFormSubmit(credit, tobacco, alcoholic, houseSize, income, pregnant, hospitalized) {

        if (credit === "" || tobacco === "" || alcoholic === "" || houseSize === "" || income === "" || pregnant === "" || hospitalized === "") {
            setFormError("Missing fields.")
            return
        }

        setFormError("")
        storage.push(credit, tobacco, alcoholic, houseSize, income, pregnant, hospitalized)
        localStorage.setItem('getmymed-long-form-data', JSON.stringify(storage))
        sendToPipeDream()

    }

    function sendToPipeDream() {

        let storage = JSON.parse(localStorage.getItem('getmymed-long-form-data'))

        let userData = {
            apiId: "1D39A9E077D948B1B578206F918FF5C0",
            apiPassword: "a61268163",
            tcpa: "yes",
            tcpaLanguage: "By clicking “Yes” I provide my signature expressly consenting to contact from axrate.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy",
            currentlyInsured: storage[2],
            firstName: storage[3],
            lastName: storage[4],
            zip: storage[0],
            email: storage[5],
            phone: storage[6],
            address: storage[7],
            state: storage[8],
            driver1rFirstName: storage[3],
            driver1LastName: storage[4],
            driver1Gender: storage[9],
            driver1Dob: storage[10],
            driver1MaritalStatus: storage[11],
            credit: storage[12],
            tobacco: storage[13],
            alcoholic: storage[14],
            houseSize: storage[15],
            income: storage[16],
            pregnant: storage[17],
            hospitalized: storage[18]
        }

        console.log(userData)
        fetch('https://enthj13sjga32xa.m.pipedream.net/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        console.log(userData)

        let formData = {
            zip: storage[0],
            id: uuidv4()
        }

        localStorage.setItem('medicareInsure', JSON.stringify(formData))
        window.location.href = '/thanks'



    }

    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
            </div>

            <h1 className='long-form-form-title'>3-Step</h1>
            <div className='long-form-container'>
                <div className="long-form-img-container">
                    <img className='long-form-img' src={LongFormImg} alt="Pharm" />
                </div>
                <div className='long-form-form-container'>
                    {showForm === 3 ? <FormPageThree errorText={formError} longFormSubmit={longFormSubmit} last={previousForm} /> : showForm === 2 ? <FormPageTwo errorText={formError} next={nextForm2} last={previousForm} /> : <FormPageOne next={nextForm1} errorText={formError} />}
                </div>
            </div>
        </div>
    )
}

export default LongForm