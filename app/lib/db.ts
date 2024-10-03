import mongoose from "mongoose";
const URI = process.env.NEXT_PUBLIC_URI
export const connectToDb = async () => {
    try {
        const connect = await mongoose.connect(`${URI}`)
console.log('db connected')
    } catch (error:any) {
       console.log("An error occured", error.message)
    }
}