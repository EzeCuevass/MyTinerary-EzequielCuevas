import React, { useState } from "react";
import userActions from "../redux/actions/userActions"
import { connect } from "react-redux"
import TextField from '@mui/material/TextField';


function SignIn(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault()
        const logedUser = {
            email: email,
            password: password,
            from: "form-Signin",
        }
        await props.signIn(logedUser)
} 
    return(
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <TextField type="text" id="filled-basic email" label="Email" variant="filled" name="email" itemID="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                <TextField type="password" id="filled-basic password" label="Password" variant="filled" name="password" itemID="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    signIn: userActions.signIn
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
