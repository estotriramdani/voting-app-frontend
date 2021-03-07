import React from "react";
import defaultImage from "../../default_image.png";

export default function CardEvent(props) {
  return (
    <div className="card-event">
      <div className="cover">
        <img src={defaultImage} alt="" />
      </div>
      <div className="event-name">
        <p>{props.eventName}</p>
      </div>
      <div className="event-desc">{props.eventDesc}</div>
      <div className="event-date">
        <span style={{ display: "block", marginBottom: "5px" }}>
          {" "}
          Dimulai: <span className="date"> {props.eventStartDate}</span>{" "}
        </span>
        Berakhir: <span className="date"> {props.eventEndDate}</span>
      </div>
    </div>
  );
}
