import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../../scss/style.scss';
// import Loading from '../Pages/Home/Home';
const Home = React.lazy(() => import('../Pages/Home/Home'));

export class Parent extends Component {
  state = {
    pathName: window.location.pathname,
  };

  changePathName = () => {
    let path = window.location.pathname;
    this.setState({
      pathName: path,
    });
  };

  render() {
    return (
      <Router>
        <div className="header">
          <h1>Lavote</h1>
          <h2>Vote on The Go!</h2>
        </div>
        <div className="bottomNav">
          <div className="item-bottom-nav" onClick={this.props.changePathName}>
            <Link to="/akun" style={{ textDecoration: 'none' }}>
              <div className="icon">
                {this.props.pathName === '/akun' ? (
                  <i className="bi bi-emoji-smile-fill"></i>
                ) : (
                  <i className="bi bi-emoji-smile"></i>
                )}
              </div>
            </Link>
            <div className="title">Akun</div>
          </div>

          <div className="item-bottom-nav" onClick={this.props.changePathName}>
            <Link to="/acara-saya" style={{ textDecoration: 'none' }}>
              <div className="icon">
                {this.props.pathName === '/acara-saya' ? (
                  <i className="bi bi-folder-fill"></i>
                ) : (
                  <i className="bi bi-folder"></i>
                )}
              </div>
            </Link>
            <div className="title">Acara Saya</div>
          </div>

          <div className="item-bottom-nav" onClick={this.props.changePathName}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="icon">
                {this.props.pathName === '/' ? (
                  <i className="bi bi-house-fill"></i>
                ) : (
                  <i className="bi bi-house"></i>
                )}
              </div>
            </Link>
            <div className="title">Beranda</div>
          </div>

          <div className="item-bottom-nav" onClick={this.props.changePathName}>
            <Link to="/daftar-acara" style={{ textDecoration: 'none' }}>
              <div className="icon">
                {this.props.pathName === '/daftar-acara' ? (
                  <i className="bi bi-flag-fill"></i>
                ) : (
                  <i className="bi bi-flag"></i>
                )}
              </div>
            </Link>
            <div className="title">Daftar Acara</div>
          </div>

          <div className="item-bottom-nav" onClick={this.props.changePathName}>
            <Link to="/keluar" style={{ textDecoration: 'none' }}>
              <div className="icon">
                {this.props.pathName === '/keluar' ? (
                  <i className="bi bi-door-closed-fill"></i>
                ) : (
                  <i className="bi bi-door-closed"></i>
                )}
              </div>
            </Link>
            <div className="title">Keluar</div>
          </div>
        </div>
        <Route exact path="/">
          <Suspense fallback={<div>Loading ...</div>}>
            <Home />
          </Suspense>
        </Route>
      </Router>
    );
  }
}

const reduxState = (state) => {
  return {
    pathName: state.pathName,
  };
};

const reduxDispatch = (dispatch) => ({
  changePathName: () => {
    return dispatch({
      type: 'CHANGE_PATHNAME',
      value: window.location.pathname,
    });
  },
});

export default connect(reduxState, reduxDispatch)(Parent);
