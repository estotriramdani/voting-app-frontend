import React, { Component, Fragment, Suspense } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../component/Button/Button';
import CardLoading from '../../../component/CardLoading/CardLoading';
import RegisterForm from '../../../component/RegisterFrom/RegisterForm';
import LoginForm from '../../../component/LoginForm/LoginForm';

const CardEvent = React.lazy(() =>
  import('../../../component/CardEvent/CardEvent')
);

class Home extends Component {
  state = {
    isFormShow: false,
    whichForm: '',
  };

  popUpForm = () => {
    if (this.props.whichForm === 'login') {
      return <LoginForm />;
    } else if (this.props.whichForm === 'register') {
      return <RegisterForm />;
    }
  };

  render() {
    return (
      <Fragment>
        {this.props.isFormShow === true ? this.popUpForm() : ''}
        <div className="hero"></div>
        <div className="home">
          <div className="button-login-register">
            <div
              className="button-login-register-item"
              onClick={this.props.showForm}
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
              onClick={this.props.showForm}
            >
              <i className="bi bi-person-plus"></i> &nbsp; | &nbsp;
              <p id="register">Daftar Akun Baru</p>
            </div>
          </div>
          <div className="how-button">
            <div onClick={this.props.showForm} style={{ marginRight: '10px' }}>
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

const reduxState = (state) => {
  return {
    isFormShow: state.isFormShow,
    whichForm: state.whichForm,
  };
};

const reduxDispatch = (dispatch) => ({
  showForm: (data) => {
    console.log(data.target.id);
    return dispatch({
      type: 'CHANGE_SHOWMODAL',
      value: true,
      form: data.target.id,
    });
  },
});

export default connect(reduxState, reduxDispatch)(Home);
