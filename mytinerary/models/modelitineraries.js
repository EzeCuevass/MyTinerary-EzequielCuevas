const mongoose = require("mongoose")

const itinerariesSchema = new mongoose.Schema({
    itineraryName: {type:String, required:true},
    person: {type:String, required:true},
    personPhoto: {type:String, required:true},
    price: {type:Number, required:true},
    duration: {type:String, required:true},
    hashtags: {type:Array, required:true},
    likes: {type:Number, required:true},
    cities: {type: mongoose.Types.ObjectId, ref: "cities"}
})
const Itineraries = mongoose.model("itineraries", itinerariesSchema)
module.exports = Itineraries 