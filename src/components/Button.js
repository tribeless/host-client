import React from "react";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "../index.css";

export const MuiButton = ({
    disabled,
    click,
    size,
    variant,
    color,
    text,
    start
})=>{
    return (
        <>
            {
                start ? (
                    <Button style={{marginRight:"30px"}} disabled={disabled} onClick={click} size={size} variant={variant} color={color} startIcon={<ArrowBackIcon size="small" />} >
                        {text}
                    </Button>
                    ):(
                    <Button disabled={disabled} onClick={click} size={size} variant={variant} color={color} endIcon={<ArrowForwardIcon size="small" />}>
                        {text}
                    </Button>
                )
            }
        </>
    )
}

// 