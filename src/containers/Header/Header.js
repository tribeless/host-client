import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {MuiTypography} from "../../components/Typography";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Header = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar style={{backgroundColor:"grey"}} position="fixed">
                <Toolbar>
                    <IconButton style={{color:"white",fontSize:"20px"}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <MuiTypography text="Gallery" variant="subtitle1" />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;