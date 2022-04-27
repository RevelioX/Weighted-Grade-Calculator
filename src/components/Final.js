import react from "react";

export default function Final({final}){
    console.log(final)
    return(
        <div className="final">
            <h2>El promedio ponderado es:{final}</h2>
        </div>
    )
}