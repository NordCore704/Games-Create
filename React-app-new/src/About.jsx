import React from "react";
import reactGrey from './assets/react-icon-large.png'
import "./App.css";
const MainComp = (props) => {
    return (
        <main className="main">
                <img src={props.item.image} alt="" className="location--image"/>
            <div className="content">
                <div className="location--content">
                    <img className="location-img" src={props.item.locationSvg} alt="" />
                    <p>{props.item.location}</p>
                    <a className="location-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <div className="description--content">
                    <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="text">{props.item.description}</p>
                </div>
            </div>
        </main>
    )
}
export default MainComp