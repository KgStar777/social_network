import loading_2 from "../../../assets/images/svg/loader/loading_2.gif";
import React from "react";

let Preloader = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex'
        }}>
            <img src={loading_2}
                 style={{
                     width: '50px',
                     margin: '0 auto'
                 }}/>
        </div>
    )
}

export default Preloader