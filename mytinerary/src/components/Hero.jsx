import React from "react";
import { Stack } from "@mui/material";
import Button from "@mui/material";
import "../styles/button.css"

function button(){
    return(
        <div className="button-background">
            <h3 className="text-hero">Click here to see our Cities</h3>
            <button className="button-hero">CLICK HERE!</button>
        </div>
    )
}
export default button