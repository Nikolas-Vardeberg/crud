import mongoose from "mongoose";

const connectMongoDB = () => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect correctly")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB
