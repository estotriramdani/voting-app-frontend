import React, { Component } from 'react';

class RegisterForm extends Component {
  state = {
    email: '',
    nama: '',
    password: '',
    password2: '',
    isEmail: true,
    readyToSubmit: true,
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: null,
  };

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

  handleChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="modal-wrapper">
        <div className="login-wrapper">
          <div className="header-login">
            <h2>Registrasi</h2>
            <i className="bi bi-x-circle" onClick={0}></i>
          </div>
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
            <input
              className="input"
              type="password"
              name="password2"
              id="password2"
              value={this.state.password2}
              placeholder="Ulangi password"
              onChange={(event) => this.handleChangeForm(event)}
              required
            />
          </div>
          {this.state.formValid === false ? (
            <small className="alert-form">Periksa data Anda</small>
          ) : (
            ''
          )}

          <button
            type="submit"
            className={`button button-action ${
              this.state.formValid === false || this.state.formValid === null
                ? this.errorClass()
                : ''
            }`}
            disabled={!this.state.formValid}
          >
            Daftar
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
