import React, { Component, Fragment, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../component/Button/Button';
import CardLoading from '../../../component/CardLoading/CardLoading';
import RegisterForm from '../../../component/RegisterFrom/RegisterForm';
import LoginForm from '../../../component/RegisterFrom/RegisterForm';

const CardEvent = React.lazy(() =>
  import('../../../component/CardEvent/CardEvent')
);

export default class Home extends Component {
  state = {
    isFormShow: false,
    whichForm: '',
  };

  showForm = (data) => {
    this.setState({
      isFormShow: true,
      whichForm: data.target.id,
    });
    console.log(data.target.id);
  };

  popUpForm = () => {
    if (this.state.whichForm === 'login') {
      alert('hahaha');
    } else if (this.state.whichForm === 'register') {
      return <RegisterForm click="halo" />;
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.isFormShow === true ? this.popUpForm() : ''}
        <div className="hero"></div>
        <div className="home">
          <div className="button-login-register">
            <div
              className="button-login-register-item"
              onClick={this.showForm}
              style={{ cursor: 'pointer' }}
              id="login"
            >
              <i className="bi bi-person"></i> &nbsp; | &nbsp;
              <p id="login">Masuk Akun Lama</p>
            </div>
            <div
              className="button-login-register-item"
              id="register"
              style={{ cursor: 'pointer' }}
              onClick={this.showForm}
            >
              <i className="bi bi-person-plus"></i> &nbsp; | &nbsp;
              <p id="register">Daftar Akun Baru</p>
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
                <div className="more">
                  <Link to="/daftar-acara"> Lebih Banyak</Link>
                </div>
              </div>
              <div className="card-wrapper">
                <Suspense fallback={<CardLoading />}>
                  <CardEvent
                    eventName="Pemilihan Ketua OSIS"
                    eventStartDate="21/02/2021"
                    eventEndDate="22/02/2021"
                    eventDesc="Ini deksripsi dari acara"
                  />
                </Suspense>
                <Suspense fallback={<CardLoading />}>
                  <CardEvent
                    eventName="Pemilihan Ketua OSIS"
                    eventStartDate="21/02/2021"
                    eventEndDate="22/02/2021"
                    eventDesc="Ini deksripsi dari acara"
                  />
                </Suspense>
                <Suspense fallback={<CardLoading />}>
                  <CardEvent
                    eventName="Pemilihan Ketua OSIS"
                    eventStartDate="21/02/2021"
                    eventEndDate="22/02/2021"
                    eventDesc="Ini deksripsi dari acara"
                  />
                </Suspense>
                <Suspense fallback={<CardLoading />}>
                  <CardEvent
                    eventName="Pemilihan Ketua OSIS"
                    eventStartDate="21/02/2021"
                    eventEndDate="22/02/2021"
                    eventDesc="Ini deksripsi dari acara"
                  />
                </Suspense>
                <div style={{ width: '100px!important' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
