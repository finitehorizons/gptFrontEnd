import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
    return (
        <div>
            <div>
                <div />
                <h1>{title} </h1>
            </div>
            <div className='gpt__features-container_feature-text'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;
