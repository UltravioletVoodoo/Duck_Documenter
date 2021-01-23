import { useState } from 'react'
import Router from 'next/router'
import Background from '../components/background'
import SubmitButton from '../components/submitButton'


export default function Survey() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10)) // Setting the default value to todays date
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [duckNumber, setDuckNumber] = useState(undefined)
    const [foodType, setFoodType] = useState("")
    const [foodAmount, setFoodAmount] = useState("")
    const [comments, setComments] = useState("")


    function handleDateChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setDate(newValue)
    }

    function handleTimeChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setTime(newValue)
    }

    function handleLocationChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setLocation(newValue)
    }

    function handleDuckNumberChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setDuckNumber(newValue)
    }

    function handleFoodTypeChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setFoodType(newValue)
    }

    function handleFoodAmountChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setFoodAmount(newValue)
    }

    function handleCommentsChange(e) {
        const newValue = e.target.value ? e.target.value : ''
        setComments(newValue)
    }

    function submitHandler() {
        if (validate()) {
            submitSurvey()
        }
    }

    function validate() {
        let errors = []
        if (time.length < 1) errors.push('Time of day is required')
        if (location.length < 1) errors.push('Location is required')
        if (!duckNumber || duckNumber < 1) errors.push('At least 1 duck must have been fed')
        if (foodType.length < 1) errors.push('The type of food is required')
        if (foodAmount.length < 1) errors.push('The amount of food used is required')
        if (errors.length > 0) {
            alert(errors.join(' and '))
            return false
        }
        return true
    }

    async function submitSurvey() {
        try {
            const res = await fetch('http://localhost:3000/api/surveys', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    time: time,
                    date: date,
                    location: location,
                    duckNumber: duckNumber,
                    foodType: foodType,
                    foodAmount: foodAmount,
                    comments: comments
                })
            })
            Router.push('/success')
        } catch (error) {
            console.log(error)
        }
    }

    const dateDescription = 'What day did you feed the ducks?'
    const timeDescription = 'What time did you feed the ducks?'
    const locationDescription = 'Where did you feed the ducks?'
    const duckNumberDescription = 'How many ducks were present?'
    const foodTypeDescription = 'What did you feed the ducks?'
    const foodAmountDescription = 'How much did you feed the ducks?'
    const commentsDescription = 'Please feel free to add any additional information or comments in the box below.'

    return (
        <>
            <Background />
            <div className='formContainer'>
                <div className='inputContainer'>
                    <div className='inputTitle'>Date</div>
                    <div className='inputDescription'>{dateDescription}</div>
                    <input className='smallInput' value={date} onChange={handleDateChange} type='date'></input>
                </div>
                <div className='inputContainer'>
                    <div className='inputTitle'>Time</div>
                    <div className='inputDescription'>{timeDescription}</div>
                    <input className='smallInput' value={time} onChange={handleTimeChange} type='time'></input>
                </div>
                <div className='inputContainer'>
                    <div className='inputTitle'>Location</div>
                    <div className='inputDescription'>{locationDescription}</div>
                    <input className='smallInput' value={location} onChange={handleLocationChange}></input>
                </div>
                <div className='inputContainer'>
                    <div className='inputTitle'>Number of Ducks</div>
                    <div className='inputDescription'>{duckNumberDescription}</div>
                    <input className='smallInput' value={duckNumber} onChange={handleDuckNumberChange} type='number'></input>
                </div>
                <div className='inputContainer'>
                    <div className='inputTitle'>Type of Food</div>
                    <div className='inputDescription'>{foodTypeDescription}</div>
                    <input className='smallInput' value={foodType} onChange={handleFoodTypeChange}></input>
                </div>
                <div className='inputContainer'>
                    <div className='inputTitle'>Amount of Food</div>
                    <div className='inputDescription'>{foodAmountDescription}</div>
                    <input className='smallInput' value={foodAmount} onChange={handleFoodAmountChange}></input>
                </div>
                <div className='largeInputContainer'>
                    <div className='inputTitle'>Additional Comments</div>
                    <div className='inputDescription'>{commentsDescription}</div>
                    <textarea className='largeInput' value={comments} onChange={handleCommentsChange}></textarea>
                </div>
                <div className='submitButtonContainer'>
                    <SubmitButton submitFunction={submitHandler} />
                </div>
            </div>
            <style jsx>{`
                .formContainer {
                    position: absolute;
                    width: 60%;
                    left: 20%;
                    padding-top: 50px;
                    padding-bottom: 50px;
                }
                .inputContainer {
                    position: relative;
                    height: 100px;
                    width: 100%;
                    margin-bottom: 10px;
                    background-color: white;
                }
                .largeInputContainer {
                    position: relative;
                    width: 100%;
                    margin-bottom: 10px;
                    padding: 10px 0 10px 0;
                    background-color: white;
                }
                .inputTitle {
                    position: relative;
                    width: 100%;
                    text-align: center;
                    font-size: 18px;
                }
                .inputDescription {
                    position: relative;
                    width: 100%;
                    text-align: center;
                }
                .smallInput {
                    position: relative;
                    width: 80%;
                    left: 10%
                }
                .largeInput {
                    position: relative;
                    width: 80%;
                    height: 150px;
                    resize: none;
                    left: 10%;
                }
                .submitButtonContainer {
                    position: relative;
                    width: 100px;
                    height: 50px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            `}</style>
        </>
    )
}