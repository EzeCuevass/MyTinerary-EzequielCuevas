import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom" 
import "../styles/details.css"


function Details(){
    const{id}=useParams()
    const [card, setCard] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:4000/api/cities/${id}`)
        .then(response => setCard(response.data.response.city)         
            )
    }, [])
    return(
        <div className="body-details">
            <div className="card-container">
                <div className="card">
                    <div className="image-details">
                        <img className="image-card-details" src= {card.photo} alt="cities" />
                    </div>
                    <div className="data-body">
                        <h2>{card.cityname}</h2>
                        <h3>{card.country}</h3>
                        <LinkRouter to={"/cities"}>
                            <button>Go Back!</button>
                        </LinkRouter>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Details