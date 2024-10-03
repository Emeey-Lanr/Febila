import mongoose from "mongoose"

const realEstateSchema = new mongoose.Schema({
    username:{type:String, required:true},
    img: { type: String, required: true },
    price: { type: String, required: true },
    unit: { type: Number },
    title: { type: String, required: true },
    description:{type:String, required:true}
})

export  const realEstateModel = mongoose.model('real_estate', realEstateSchema)