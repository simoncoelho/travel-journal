import React from "react";
import icon from "../Images/location-icon.svg";


export default function Post(props) {
    console.log(props.imageUrl)
    return (
        <div className="post">
            <img className="post--clip" src={props.imageUrl} alt={props.title} />
            <div className="post--layout">
                <div className="post--content">
                    <img src={icon} alt="location" />
                    <p>{props.location}</p>
                    <a href="{props.googleMapsUrl}">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}