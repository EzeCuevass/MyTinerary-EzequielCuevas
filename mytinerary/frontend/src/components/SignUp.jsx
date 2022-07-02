import React, {useState} from "react";
import userActions from "../redux/actions/userActions";
import { connect } from "react-redux"
import TextField from '@mui/material/TextField';
import GoogleSignUp from "./gSignup";

function SignUp(props){
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [photo, setPhoto] = useState("")
    var countries = ["", "Argentina", "Bolivia","Brasil", "Chile", "Colombia", "Ecuador", "Peru", "Paraguay", "Venezuela", "Uruguay"]
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            fullname: fullname,
            email: email,
            password: password,
            country: country,
            photo: photo,
            from: "form-Signup",
        }    
    props.signUp(userData)
}
    return(
        <>
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <TextField type="text" id="filled-basic fullname" label="Full name" variant="filled" name="fullname" itemID="fullname" value={fullname} onChange={e=>setFullname(e.target.value)} required/>
                <TextField type="text" id="filled-basic email" label="Email" variant="filled" name="email" itemID="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                <TextField type="text" id="filled-basic password" label="Password" variant="filled" name="password" itemID="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                <select name="country" id="country" onChange={e=>setCountry(e.target.value)} required>
                    {countries.map( everyCountry =>
                        <option key={everyCountry} value={everyCountry}>{everyCountry}</option>)}
                </select>
                <TextField type="text" id="filled-basic photo" label="Photo" variant="filled" name="photo" itemID="photo" value={photo} onChange={e=>setPhoto(e.target.value)} required/>
                <button type="submit">sign up!</button>
                <GoogleSignUp />
                {/* <input type='text' name='fullname' id='fullname' placeholder='Full name' value={fullname} onChange={e=>setFullname(e.target.value)} required />
                <input type='text' name='email' id='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} required />
                <input type='text' name='password' id='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} required />
                <select name="country" id="country" onChange={e=>setCountry(e.target.value)} required>
                    {countries.map( everyCountry =>
                        <option key={everyCountry} value={everyCountry}>{everyCountry}</option>)}
                </select>
                <input type='text' name='photo' id='photo' placeholder='Photo URL' value={photo} onChange={e=>setPhoto(e.target.value)} required />
                <button type="submit">sign up!</button> */}
            </form>
        </div>
        </>
    )
}
const mapDispatchToProps = {
    signUp: userActions.signUp
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (SignUp)