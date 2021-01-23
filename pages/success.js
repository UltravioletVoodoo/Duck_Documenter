import Background from "../components/background";

export default function Success() {

    return (
        <>
            <Background />
            <p className='surveyComplete'>Survey Submitted Successfully</p>
            <style jsx>{`
                .surveyComplete {
                    position: fixed;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 100%;
                    text-align: center;
                    z-index: 2;
                    font-size: 18px;
                    color: white;
                }
            `}</style>
        </>
    )
}