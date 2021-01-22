import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(error => console.log(error))

    mongoose.connection.on('error', err => {
        console.log(err)
    })

    connection.isConnected = db.connections[0].readyState
}

export default dbConnect