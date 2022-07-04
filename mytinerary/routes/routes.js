const Router = require("express").Router();

const citiesControllers = require("../controllers/citiescontrollers");
const {getCities, getOneCity, addCity, updateCity, removeCity} = citiesControllers
const itinerariesControllers = require("../controllers/itinerariesControllers");
const { signUpUsers, signInUser, verifyMail, verifyToken, signOutUser } = require("../controllers/userControllers");
const {getItineraries, getOneItinerary, addItinerary, updateItinerary, removeItinerary, findTinFromCity} = itinerariesControllers
const validator = require("../config/validator")
const passport = require("../config/passport")

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

Router.route("/auth/signUp")
.post(validator, signUpUsers)

Router.route("/auth/signIn")
.post(signInUser)

Router.route("/auth/signOut")
.post(signOutUser)

Router.route("/verify/:string")
.get(verifyMail)

Router.route("/auth/signInToken")
.get(passport.authenticate('jwt',{session:false}),verifyToken)
module.exports = Router