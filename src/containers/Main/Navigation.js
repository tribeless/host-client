import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {MuiButton} from "../../components/Button";
import {decrement,increment} from "../../redux/actions/pageAction";
import "../../index.css";

const Navigation =()=>{
    const dispatch = useDispatch();
    const page = useSelector(state=>state.pageReducer.currentPage);

    const handleClick = (stateValue="none") => {
        stateValue==="increment" ? dispatch(increment()) : dispatch(decrement());
    }
    return (
        <div className="btn">
            <MuiButton 
                text="Prev"
                disabled={page===1}
                className="start"
                click={()=>handleClick("decrement")}
                color="secondary"
                variant="contained"
                size="small"
                start
            />
            <MuiButton 
                text="Next"
                disable={page===5}
                click={()=>handleClick("increment")}
                color="secondary"
                variant="contained"
                size="small"
            />
        </div>
    )
}

export default Navigation;