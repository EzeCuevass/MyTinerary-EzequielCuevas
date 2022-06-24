const Router = require("express").Router();

const citiesControllers = require("../controllers/citiescontrollers");
const {getCities, getOneCity, addCity, updateCity, removeCity} = citiesControllers
const itinerariesControllers = require("../controllers/itinerariesControllers")
const {getItineraries, getOneItinerary, addItinerary, updateItinerary, removeItinerary, findTinFromCity} = itinerariesControllers
Router.route("/cities")
.get(getCities)
.post(addCity)

Router.route("/cities/:id")
.delete(removeCity)
.put(updateCity)
.get(getOneCity)

Router.route("/itineraries")
.get(getItineraries)
.post(addItinerary)

Router.route("/itineraries/:id")
.delete(removeItinerary)
.put(updateItinerary)
.get(getOneItinerary)

Router.route("/itineraries/cities/:id")
.get(findTinFromCity)
module.exports = Router