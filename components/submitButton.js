export default function SubmitButton(props) {
    const { submitFunction } = props

    return (
        <>
            <button onClick={submitFunction} className='submitButton'>
                <div className='submitButtonText'>Submit Survey</div>
            </button>
            <style jsx>{`
                .submitButton {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 1em;
                    cursor: pointer;
                    background-color: white;
                }
                .submitButton:hover {
                    background-color: darkgray;
                }
                .submitButtonText {
                    font-size: 16px;
                }
            `}</style>
        </>
    )
}