export default function Background() {
    return (
        <>
            <div className='background'></div>
            <style jsx>{`
                .background {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    background-image: linear-gradient(to bottom right, purple, yellow);
                }
            `}</style>
        </>
    )
}