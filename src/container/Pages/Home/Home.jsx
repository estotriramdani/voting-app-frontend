import React, { Component, Fragment } from "react";
import Button from "../../../component/Button/Button";
import CardEvent from "../../../component/CardEvent/CardEvent";

export default class Home extends Component {
  showForm = () => {
    // alert("ok");
  };
  render() {
    return (
      <Fragment>
        <div className="hero"></div>
        <div className="home">
          <div className="button-login-register">
            <div className="button-login-register-item">
              <i className="bi bi-person"></i> &nbsp; | &nbsp;
              <p>Masuk Akun Lama</p>
            </div>
            <div className="button-login-register-item">
              <i className="bi bi-person-plus"></i> &nbsp; | &nbsp;
              <p>Daftar Akun Baru</p>
            </div>
          </div>
          <div className="how-button">
            <div onClick={this.showForm}>
              <Button
                height="40px"
                width="167px"
                icon="bi bi-calendar-event"
                title="Cara Registrasi Acara"
              />
            </div>
            <div onClick={this.showForm}>
              <Button
                height="40px"
                width="167px"
                icon="bi bi-pencil"
                title="Cara Vote"
              />
            </div>
          </div>
          <div className="section">
            <div className="cardSection">
              <div className="section-title">
                <h2>
                  <i className="bi bi-calendar-event"></i> &nbsp; Vote Sedang
                  Berlangsung
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
                <div style={{ width: "100px!important" }}></div>
              </div>
            </div>
            <div className="cardSection">
              <div className="section-title">
                <h2>
                  <i className="bi bi-calendar-check"></i> &nbsp; Vote Selesai
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
                <div style={{ width: "100px!important" }}></div>
              </div>
            </div>
            <div className="cardSection">
              <div className="section-title">
                <h2>
                  <i className="bi bi-calendar-week"></i> &nbsp; Vote Segera
                  Dimulai
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
                <div style={{ width: "100px!important" }}></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
