import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
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
