import React, { useEffect } from "react";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import "../styles/itineraries.css"
let emoji = "💵"

function Itineraries(){
    const {id}= useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(itinerariesActions.findTinFromCity(id))
    },[])
    const itinerary = useSelector(store=>store.itinerariesReducer.itinerary)
    console.log(itinerary)
    const tags = itinerary.hashtags
    return(
            <div className="itineraries-container">
                {itinerary.length>0?
                itinerary.map(itinerary=>(
                <div className="itinerary">
                    <div className="itinerary-box-one">
                        <img src={itinerary.personPhoto} alt="photo" className="photo-itinerary"/>
                        <div className="person-name">
                            <p>{itinerary.person}</p>
                        </div>
                    </div>
                    <div className="itinerary-box-two">
                        <div className="itinerary-body">
                            <h3>{itinerary.itineraryName}</h3>
                            <p>{emoji.repeat(itinerary.price)}</p>
                            <p>{itinerary.duration}</p>
                            <p>{itinerary.likes} 👍 Likes</p>
                        </div>
                    </div>
                    <div className="itinerary-box-three">
                        {/* <p>{itinerary.hashtags}</p> */}
                        {itinerary.hashtags.map(hashtags=>(
                            <p className="hashtag-css">{hashtags}</p>
                        ))}
                    </div>
                </div>
            )): <div className="error-message">
                    <p className="noitineraries">No itineraries available</p>
                </div>
            }
            </div>
    )
}
export default Itineraries