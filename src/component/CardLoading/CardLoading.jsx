import React from "react";
import defaultImage from "../../default_image.png";

export default function CardLoading() {
  return (
    <div className="card-event">
      <div className="cover">
        <img src={defaultImage} alt="" />
      </div>
      <div className="event-name">
        <p>Loading</p>
      </div>
      <div className="event-desc">Still loading...</div>
      <div className="event-date">
        <span style={{ display: "block", marginBottom: "5px" }}>
          {" "}
          Dimulai: <span className="date"> 00/00/000</span>{" "}
        </span>
        Berakhir: <span className="date"> 00/00/0000</span>
      </div>
    </div>
  );
}
