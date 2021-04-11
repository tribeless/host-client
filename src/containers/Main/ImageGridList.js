import React from 'react';
import {useSelector} from "react-redux";
import shortId from "shortid";
import "../../index.css";

const ImageGridList = ()=>{
    const records = useSelector(state=>state.pageReducer.retrievedRecords);

    return (
        <div className="main">
            <div className="container">
                {
                    records.length > 0 ? 
                        
                            records.map(({imageurl,name})=>(
                                <div key={shortId.generate()} className="box">
                                    <div className="content">
                                        <img src={imageurl} alt={name} />
                                        <p>{name}</p>
                                    </div>
                                </div>
                            ))
                        
                        :(
                            <p style={{color:"#ffffff",fontSize:"20px"}}>Uooh, you reached the last page! Go back and get random pics!</p>
                        )
                }
            </div>
        </div>
    )
}

export default ImageGridList;