import Background from "../components/background";
import StartButton from "../components/startButton";

export default function Index() {

    return (
        <>
            <div className='title'>Duck Documenter</div>
            <Background />
            <div className='indexContainer'>
                <div className='duckContainer'>
                    <img className='duck' src='/duck.png'></img>
                </div>
                <div className='buttonContainer'>
                    <StartButton />
                </div>
            </div>
            <style jsx>{`
                .title {
                    position: absolute;
                    font-size: 32px;
                    color: white;
                    left: 50%;
                    top: 15%;
                    transform: translate(-50%, -50%);
                    z-index: 2;

                }
                .indexContainer {
                    position: fixed;
                    width: 300px;
                    height: 300px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                .duckContainer {
                    width: 100%;
                    height: 100%;
                }
                .duck {
                    width: 100%;
                    height: 100%;
                }
                .buttonContainer {
                    position: absolute;
                    width: 150px;
                    height: 100px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </>
    )
}