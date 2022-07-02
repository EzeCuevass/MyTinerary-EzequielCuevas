import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'
import {GoogleLogin} from "react-google-login";
import { connect } from 'react-redux';
import { func } from 'joi';

function GoogleSignUp(props) {
    const handleCallback = async (res) => {
    console.log(res)
    const profileObj = jwt_decode(res.credential)
    // const profileObj = decodeJwtResponse(res.credential)
    console.log(profileObj);
    const userData = {
        fullname: profileObj.name,
        email: profileObj.email,
        password: profileObj.jti,
        country: "arg",
        photo: profileObj.picture,
        from: "google"
        }
        console.log(userData)
        await props.signUp(userData)
    }
    // function handleCallback(res) {
    //     console.log(res);
    // } 
    return (
        <div id='googleButton'>
            <GoogleLogin
            /*fields = "name,email,id,picture"*/
            clientId="802070442112-p8eqcc02hidtdhhprf04nrhem1d2mdek.apps.googleusercontent.com"
            buttonText='Sign up with Google'
            onSuccess={handleCallback}
            onFailure={handleCallback}
            // cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
const mapDispatchToProps = {
    signUp: userActions.signUp
}

export default connect(null, mapDispatchToProps) (GoogleSignUp)