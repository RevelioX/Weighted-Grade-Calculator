import React from "react";
import {motion} from "framer-motion";

export default function({error}){
    return(
        <motion.div transition={{duration: 0.1}} animate={{scale: [0.98,0.99,1]}} className="error">
            <p>{error}</p>
        </motion.div>
    )
}