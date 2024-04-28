import React from "react"

import "./syles.css"
import Button from "../../components/Common/Button";
import gradient1 from "../../assests/gradient 1.svg"
import phone from "../../assests/phone 1.svg"
import { motion } from "framer-motion";
function MainComponent(){

    return(
        <div className="flex_info">
            <div className="main_left">
                <motion.h1 className="track_crypto_heading"
                initial={{opacity:'0',y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5}}
                >Track Crypto</motion.h1>
                <motion.h1 
                className="real_time_heading"
                initial={{opacity:'0',y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5,delay:0.5}}
                > Real Time .</motion.h1 
                >
             <motion.p className="
             info-text"
             initial={{opacity:'0',y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5,delay:1}}
             >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
           <motion.div 
           
           className="btn-flex"
           initial={{opacity:'0',x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.5, delay:1.5}}>
            <Button text={"Dashboard"}/>
            <Button text={"Share"} outlined={true}/>
           </motion.div>
            </div>
            <div className="phone-container">
                <motion.img src={phone} className="phone"
                 initial={{y:-10}}
                 animate={{y:10}}
                 transition={{type:"smooth",
                 repeatType:"mirror",
                 duration:2,
                 repeat:Infinity}}></motion.img>
                <motion.img src={gradient1} className="gradient"></motion.img>

            </div>
        </div>
    )
}

export default MainComponent;