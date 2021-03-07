import React from "react";
import CardEvent from "../CardEvent/CardEvent";

const CardSection = (props) => {
  return (
    <div className="cardSection">
      <div className="top">
        <h2>
          <i className={props.sectionIcon}></i> &nbsp; {props.sectionTitle}
        </h2>
        <div className="more">Lebih Banyak</div>
      </div>
      <div className="card-wrapper">
        <CardEvent
          eventName="Pemilihan Ketua OSIS"
          eventStartDate="21/02/2021"
          eventEndDate="22/02/2021"
          eventDesc="Ini deksripsi dari acara"
        />
        <CardEvent
          eventName="Pemilihan Ketua OSIS"
          eventStartDate="21/02/2021"
          eventEndDate="22/02/2021"
          eventDesc="Ini deksripsi dari acara"
        />
        <CardEvent
          eventName="Pemilihan Ketua OSIS"
          eventStartDate="21/02/2021"
          eventEndDate="22/02/2021"
          eventDesc="Ini deksripsi dari acara"
        />
        <CardEvent
          eventName="Pemilihan Ketua OSIS"
          eventStartDate="21/02/2021"
          eventEndDate="22/02/2021"
          eventDesc="Ini deksripsi dari acara"
        />
      </div>
    </div>
  );
};

export default CardSection;
