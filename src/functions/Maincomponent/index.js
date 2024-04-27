import React from "react"

import "./syles.css"
import Button from "../../components/Common/Button";
function MainComponent(){

    return(
        <div className="flex_info">
            <div className="main_left">
                <h1 className="track_crypto_heading">Track Crypto</h1>
                <h1 className="real_time_heading"> Real Time .</h1>
             <p className="info-text">Track crypto through a public api in real time. Visit the dashboard to do so!</p>
           <div className="btn-flex">
            <Button text={"Dashboard"}/>
            <Button text={"Share"} outlined={true}/>
           </div>
            </div>
            <div className="phone">Phone</div>
        </div>
    )
}

export default MainComponent;