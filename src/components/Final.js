import react from "react";

export default function Final({final}){
    console.log(final)
    return(
        <div className="final">
            <h2>The weighted average is:{final}</h2>
        </div>
    )
}