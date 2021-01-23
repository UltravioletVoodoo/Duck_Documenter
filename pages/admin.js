import download from "../utils/download"
import Background from "../components/background";


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
            <Background />
            <div className='adminContainer'>
                <div className='adminText responsesHeader'>Total Responses:</div>
                <div className='adminText responsesNumber'>{surveys.length}</div>
                <div className='downloadButtonContainer'>
                    <button className='downloadButton' onClick={downloadCSV}>
                        <div className='downloadButtonText'>Download</div>
                    </button>
                </div>
            </div>
            <style jsx>{`
                .adminContainer {
                    position: fixed;
                    width: 500px;
                    height: 300px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    box-shadow: 0 0 50px 1px black;
                }
                .adminText {
                    font-family: helvetica;
                    font-weight: bold;
                    position: relative;
                    width: 100%;
                    text-align: center;
                    padding-top: 15px;
                }
                .responsesHeader {
                    font-size: 34px;
                }
                .responsesNumber {
                    font-size: 150px;
                }
                .downloadButtonContainer {
                    position: relative;
                    width: 100px;
                    height: 35px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .downloadButton {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    background-color: white;
                    transition: 0.2s;
                    cursor: pointer;
                }
                .downloadButton:hover {
                    background-color: darkgray;
                }
                .downloadButtonText {
                    font-size: 16px;
                    font-family: helvetica;
                    font-weight: bold;
                }
            `}</style>
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