import Link from 'next/link'

export default function StartButton() {

    return (
        <>
            <Link href='/survey'>
                <a className='startButton'>
                    <div className='startButtonText'>Start Survey</div>
                </a>
            </Link>
            <style jsx>{`
                .startButton {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    color: white;
                    background-color: gray;
                    transition: 0.4s;
                    text-align: center;
                    border-radius: 8px;
                    opacity: 0.7;
                }
                .startButton:hover {
                    opacity: 1;
                }
                .startButtonText {
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 24px;
                    font-family: helvetica;
                }
            `}</style>
        </>
    )
}