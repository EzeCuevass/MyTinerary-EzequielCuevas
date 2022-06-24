const Itineraries = require("../models/modelItineraries");

const itinerariesControllers = {
    getItineraries: async (req, res)=>{
        let itineraries 
        let error = null
        try {
            itineraries = await Itineraries.find()
            .populate("cities")
        } catch (err){
            error = err
        }
        res.json({
            response: error ? "Error" : {itineraries},
            success: error ? false : true,
            error: error
        })
    },
    getOneItinerary: async (req, res)=>{
        let id = req.params.id
        let itinerary
        let error = null
        try{
            itinerary = await Itineraries.findOne({_id:id})
        }catch (err){
            error = err
        }
        res.json({
            response: error ? "Error" : {itinerary},
            success: error ? false : true,
            error: error
        })
    },
    addItinerary: async (req, res)=>{
        const {itineraryName,person,personPhoto,price,duration,hashtags,likes, cities} = req.body
        let itinerary 
        let error = null
        try{
            itinerary = await new Itineraries({
                itineraryName: itineraryName,
                person: person,
                personPhoto: personPhoto,
                price: price,
                duration: duration,
                hashtags: hashtags,
                likes: likes,
                cities: cities
            }).save()
        } catch (err){
            error = err
        }
        res.json({
            response: error ? "Error" : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    updateItinerary: async (req, res)=>{
        const id = req.params.id
        const itinerary = req.body
        let itinerarydb
        let error = null
        try{
            citydb = await Itineraries.findOneAndUpdate({_id:id}, itinerary, {new:true})
        }catch (err){error=err}
        res.json({
            response: error ? "Error" : itinerarydb,
            success: error ? false : true,
            error: error
        })
    },
    removeItinerary: async (req, res)=>{
        const id = req.params.id
        let itinerary
        let error = null
        try{
            itinerary = await Itineraries.findByIdAndDelete({_id:id})
        }catch(err){error=err}
        res.json({
            response: error ? "Error" : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    findTinFromCity: async (req,res) => {
        let cityid = req.params.id
        let itineraries
        let error = null
        try{
            itineraries = await Itineraries.find({ cities:cityid })
            .populate("cities")
        }catch (err) { error = err }
        res.json({
            response : error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = itinerariesControllers