import mongoose from 'mongoose'

const connecMongoDB = () => {
    const mongoUri: string = process.env.MONGODB_URI || 'mongodb://0.0.0.0:27018/';

    try {
        mongoose.connect(mongoUri)
        console.log('connected to mongo db')
    } catch (e) {
        console.log(e)
    }
}
export default connecMongoDB