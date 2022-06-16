import React, { useState } from "react";
import CardCities from "./CardCities";
import Error from "./Error"
import TextField from '@mui/material/TextField';
import axios from "axios";
import {useEffect} from "react";

function Cities(){
    const [inputValue, setInputValue] = useState("")
    const [cities, setCities] = useState()

    useEffect(()=>{
        axios.get("http://localhost:4000/api/cities")
            .then(response => setCities(response.data.response.cities))
    }, [])
    
    var cityFilter = cities?.filter(city => city.name.toLowerCase().startsWith(inputValue.toLowerCase().trim()))
    return (
        <>
        <div className="cities-first-box">
            <h2 className="title-cities">Let´s explore the world!</h2>
            <TextField id="outlined-basic" label="Search" variant="outlined" onKeyUp={(event) => setInputValue(event.target.value)}/>
        </div>
        <div className="cities-container">
            {cityFilter?.length> 0 ? (<CardCities cardFilter={cityFilter} />) : (<Error />)}
        </div>
        </>

    )
    
}
export default Cities