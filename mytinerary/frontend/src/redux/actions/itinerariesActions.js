import axios from "axios";

const itinerariesActions = {
    getItineraries: ()=>{
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/itineraries")
            dispatch({type: "GETITINERARIES", payload: res.data.response.itineraries})
        }
    },
    getOneItinerary: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            dispatch({type: "GETONEITINERARY", payload: res.data.response})
        }
    },
    findTinFromCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/cities/${id}`)
            // console.log(res);
            dispatch({ type: 'FIND_ITINERARY_FROM_CITY', payload: res.data.response.itineraries})
        }
    },
    like: (id) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itineraries/likes/${id}`, {},
                {headers: {
                    Authorization: 'Bearer '+ token
                    }
                })
                console.log(response)
                return response
            }catch (error) {
                console.log(error)
            }
        }
    }
}
export default itinerariesActions