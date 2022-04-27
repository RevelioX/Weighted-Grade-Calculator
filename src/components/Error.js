import React from "react";

export default function({error}){
    return(
        <div className="error">
            <p>{error}</p>
        </div>
    )
}