import React, { Component } from 'react';
import { connect } from 'react-redux';
import passwordHash from 'password-hash';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailExist: '',
      isSuccess: false,
      passwordMatch: '',
      buttonTitle: 'Daftar',
      isLoading: false,
    };
  }

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
    this.setState({ [name]: value });
    this.setState({
      emailExist: '',
      passwordMatch: '',
    });
  };

  handleSubmit = () => {
    this.checkEmailExist();
    // isLoading dijadikan true dahulu
    this.setState({
      isLoading: true,
    });

    // isLoading dikembalikan jadi false ketika sudah 2 detik tombol diklik
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);

    setTimeout(() => {
      if (this.state.emailExist === true) {
        fetch('http://localhost:3004/email')
          .then((res) => res.json())
          .then((res) => {
            for (let i = 0; i < res.length; i++) {
              if (res[i].email === this.state.email) {
                if (this.state.password === res[i].password) {
                  this.setState({
                    passwordMatch: true,
                    isSuccess: true,
                  });
                  // masukkan info user ke localStorage
                  const hashedUser = passwordHash.generate(this.state.email);
                  localStorage.setItem('userId', hashedUser);

                  // close modal
                  setTimeout(() => {
                    this.props.showForm();
                  }, 2000);
                } else {
                  this.setState({
                    passwordMatch: false,
                    password: '',
                  });
                }
                break;
              }
            }
          })
          .catch((err) => console.log(err));
      }
    }, 1000);
  };

  render() {
    return (
      <div>
        <div className="modal-wrapper">
          <div className="login-wrapper">
            <div className="header-login">
              <h2>Masuk</h2>
              <i
                className="bi bi-x-circle"
                onClick={() => this.props.showForm()}
              ></i>
            </div>
            <div className="form-wrapper">
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChangeForm(e)}
              />

              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChangeForm(e)}
              />
              {this.state.passwordMatch === false ? (
                <div>
                  <small className="alert-form">Password salah</small>
                  <br />
                </div>
              ) : (
                ''
              )}
              {this.state.isSuccess === false ? (
                <div>
                  <button
                    className="button button-action"
                    onClick={this.handleSubmit}
                  >
                    {this.state.isLoading === true ? 'Mengecek...' : 'Masuk'}
                  </button>{' '}
                  &nbsp;
                  <small
                    className="alert-form-success"
                    style={{ textDecoration: 'underline' }}
                  >
                    Lupa password?
                  </small>
                </div>
              ) : (
                <div>
                  <br />
                  <small className="alert-form-success-btn">
                    Login Berhasil. Mohon tunggu....
                  </small>
                </div>
              )}
            </div>
          </div>
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
export default connect(reduxState, reduxDispatch)(LoginForm);
