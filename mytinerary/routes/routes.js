const Router = require("express").Router();

const citiesControllers = require("../controllers/citiescontrollers");
const {getCities, getOneCity, addCity, updateCity, removeCity} = citiesControllers

Router.route("/cities")
.get(getCities)
.post(addCity)

Router.route("/cities/:id")
.delete(removeCity)
.put(updateCity)
.get(getOneCity)

module.exports = Router