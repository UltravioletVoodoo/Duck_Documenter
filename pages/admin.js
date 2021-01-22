import download from "../utils/download"


export default function Admin({ surveys }) {

    function downloadCSV() {
        let downloadableSurveys = []
        for (let survey of surveys) {
            downloadableSurveys.push({
                date: survey.date,
                time: survey.time,
                location: survey.location,
                duckNumber: survey.duckNumber,
                foodType: survey.foodType,
                foodAmount: survey.foodAmount,
                comments: survey.comments
            })
        }

        download(downloadableSurveys)
    }

    return (
        <>
            <p>Admin page</p>
            <h1>Total Responses: {surveys.length}</h1>
            <h1>Responses:</h1>
            <p>{JSON.stringify(surveys)}</p>
            <button onClick={downloadCSV}>Download</button>
        </>
    )
}

Admin.getInitialProps = async () => {
    let data = []
    try {
        const res = await fetch('http://localhost:3000/api/surveys', {
            method: 'GET',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'User-Agent': '*',
              },
        })
        data = await res.json()
        data = data.data
    } catch (error) {
        console.log(error)
    }
    return { surveys: data }
}