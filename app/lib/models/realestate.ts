import mongoose from "mongoose"

const realEstateSchema = new mongoose.Schema({
    username:{type:String, required:true},
    img: { type: String, required: true },
    price: { type: String, required: true },
    type: { type: String},
    title: { type: String, required: true },
    location:{type:String, required:true}
})

export  const realEstateModel = mongoose.models.real_estate || mongoose.model('real_estates', realEstateSchema)