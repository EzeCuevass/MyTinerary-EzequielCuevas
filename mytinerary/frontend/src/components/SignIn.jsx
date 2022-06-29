import React from "react";


function SignIn(){
const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event.target[3].value)
    const logedUser = {
        email: event.target[0].value,
        password: event.target[1].value,
        from: "form-Signup",
    }
    await props.signInUser(logedUser)
} 
    return(
        <div>
            <h1>aca iria el el sign up</h1>
            <img src="https://statics.memondo.com/p/99/ccs/2016/11/CC_2625107_6387d6a30b874e648c2b5d04cdf75b59_meme_otros_solo_estan_locas_thumb_fb.jpg?cb=7720515" alt="imglol"/>
            <p>si tan solo tuviera uno</p>
        </div>
    )
}
export default SignIn