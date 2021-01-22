export default function Admin({ surveys }) {

    return (
        <>
            <p>Admin page</p>
            <h1>Total Responses: {surveys.length}</h1>
            <h1>Responses:</h1>
            <p>{JSON.stringify(surveys)}</p>
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