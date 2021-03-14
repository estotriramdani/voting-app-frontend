import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nama: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      emailExist: '',
      isSuccess: null,
      buttonTitle: 'Daftar',
      isLoading: false,
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  };

  errorClass = () => {
    return 'disabled';
  };

  checkEmailExist = () => {
    fetch('http://localhost:3004/email')
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].email === this.state.email) {
            this.setState({
              emailExist: true,
            });
            break;
          } else {
            this.setState({
              emailExist: false,
            });
          }
          // console.log(res[i].email);
        }
      })
      .catch((err) => console.log(err));
  };

  handleChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });

    // document.addEventListener('keyup', (event) => {
    //   if (event.which === 13) {
    //     this.handleSubmit();
    //   }
    // });
  };

  handleSubmit = () => {
    this.checkEmailExist();

    // isLoading true dahulu
    this.setState({
      isLoading: true,
    });

    // isLoading dikembalikan jadi false ketika sudah 2 detik tombol diklik
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);

    setTimeout(() => {
      if (this.state.emailExist === false) {
        this.setState({
          isSuccess: true,
        });
        setTimeout(() => {
          this.props.showForm();
        }, 2000);
      } else {
        this.setState({
          isSuccess: false,
        });
      }

      if (!this.state.isSuccess) {
        this.setState({
          email: '',
          password: '',
          formValid: false,
        });
      }
    }, 1500);
  };

  render() {
    return (
      <div className="modal-wrapper">
        <div className="login-wrapper">
          <div className="header-login">
            <h2>Registrasi</h2>
            <i
              className="bi bi-x-circle"
              onClick={() => this.props.showForm()}
            ></i>
          </div>
          {this.state.isSuccess === false ? (
            <small className="alert-form-danger">Email sudah dipakai</small>
          ) : (
            ''
          )}
          <div className="form-wrapper">
            <input
              className="input"
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama Lengkap"
              autoComplete="off"
              onChange={(event) => this.handleChangeForm(event)}
            />

            <input
              className="input"
              type="text"
              name="email"
              value={this.state.email}
              id="email"
              placeholder="Email"
              onChange={(event) => this.handleChangeForm(event)}
              autoComplete="off"
              required
            />
            {this.state.formErrors.email.length > 0 ? (
              <small className="alert-form">Masukkan Email yang Valid</small>
            ) : (
              ''
            )}
            <input
              className="input"
              type="password"
              name="password"
              value={this.state.password}
              id="password"
              placeholder="Password"
              onChange={(event) => this.handleChangeForm(event)}
              required
            />
            {this.state.formErrors.password.length > 0 ? (
              <small className="alert-form">Password terlalu pendek</small>
            ) : (
              ''
            )}
          </div>
          {this.state.isSuccess === false || this.state.isSuccess === null ? (
            <button
              type="submit"
              className={`button button-action ${
                this.state.formValid === false || this.state.formValid === null
                  ? this.errorClass()
                  : ''
              }`}
              disabled={!this.state.formValid}
              onClick={this.handleSubmit}
            >
              {this.state.isLoading === false ? 'Daftar' : 'Mengecek ...'}
            </button>
          ) : (
            <div>
              <small className="alert-form-success-btn">
                <i className="bi bi-check-circle"></i> Pendaftaran Berhasil
              </small>{' '}
              <br />
              <small className="alert-form-success">
                Pendaftaran berhasil, silakan login
              </small>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const reduxState = (state) => {
  return {
    isFormShow: state.isFormShow,
  };
};

const reduxDispatch = (dispatch) => ({
  showForm: () => {
    return dispatch({
      type: 'CHANGE_SHOWMODAL',
      value: false,
    });
  },
});
export default connect(reduxState, reduxDispatch)(RegisterForm);
