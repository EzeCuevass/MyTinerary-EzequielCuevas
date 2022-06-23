import React, { useState } from "react";
import CardCities from "./CardCities";
import Error from "./Error"
import TextField from '@mui/material/TextField';
// import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux" 
import citiesActions from "../redux/actions/citiesActions"

function Cities(){
    const [inputValue, setInputValue] = useState("")
    // const [cities, setCities] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
        // axios.get("http://localhost:4000/api/cities")
        //     .then(response => setCities(response.data.response.cities))
        dispatch(citiesActions.getCities())
    }, [])
    const citiesRedux = useSelector(store=>store.citiesReducer.cities)
    const citiesfilter = useSelector(store=>store.citiesReducer.filterCity)
    // let cityFilter = cities?.filter(city => city.cityname.toLowerCase().startsWith(inputValue.toLowerCase().trim()))
    return (
        <>
        <div className="cities-first-box">
            <h2 className="title-cities">Let´s explore the world!</h2>
            <TextField id="outlined-basic" label="Search" variant="outlined" onKeyUp={(event) => setInputValue(event.target.value)}/>
        </div>
        <div className="cities-container">
            {citiesRedux?.length> 0 ? (<CardCities cardFilter={citiesRedux} />) : (<Error />)}
        </div>
        </>
    )
    
}
export default Cities