import React from "react";
import Typography from "@material-ui/core/Typography";

export const MuiTypography = ({variant,text})=>{
    return (
        <Typography style={{color:"white",fontSize:"20px"}} variant={variant}>
            {text}
        </Typography>
    )
}