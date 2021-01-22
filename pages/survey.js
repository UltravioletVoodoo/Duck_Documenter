import { useState } from 'react'
import Router from 'next/router'


export default function Survey() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10)) // Setting the default value to todays date
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [duckNumber, setDuckNumber] = useState(0)
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
        if (duckNumber < 1) errors.push('At least 1 duck must have been fed')
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

    return (
        <>
            <div>
                <input value={date} onChange={handleDateChange} type='date'></input>
                <input value={time} onChange={handleTimeChange} type='time'></input>
                <input value={location} onChange={handleLocationChange}></input>
                <input value={duckNumber} onChange={handleDuckNumberChange} type='number'></input>
                <input value={foodType} onChange={handleFoodTypeChange}></input>
                <input value={foodAmount} onChange={handleFoodAmountChange}></input>
                <input value={comments} onChange={handleCommentsChange}></input>

                <button onClick={submitHandler}>Submit Survey</button>
            </div>
        </>
    )
}