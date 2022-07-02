import axios from "axios";
const userActions = {
    signUp: (userData) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.post("http://localhost:4000/api/auth/signUp",{userData})
                dispatch({type: "MESSAGE",
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                // console.log(res);
                return res
            } catch(error){
                console.log(error);
            }
        }
    },
    signIn: (logedUser) => {
        //console.log(logedUser)
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/auth/signIn",{logedUser})
            //console.log(res)
                dispatch({
                    type: 'MESSAGE',
                    payload: console.log(res)
                })
            }
        } 
    }

export default userActions
