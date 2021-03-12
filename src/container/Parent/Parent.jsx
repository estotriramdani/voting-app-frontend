import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../scss/style.scss";
import Loading from "../Pages/Home/Home";
const Home = React.lazy(() => import("../Pages/Home/Home"));

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
          <div className="item-bottom-nav" onClick={this.changePathName}>
            <Link to="/akun" style={{ textDecoration: "none" }}>
              <div className="icon">
                {this.state.pathName === "/akun" ? (
                  <i className="bi bi-emoji-smile-fill"></i>
                ) : (
                  <i className="bi bi-emoji-smile"></i>
                )}
              </div>
            </Link>
            <div className="title">Akun</div>
          </div>

          <div className="item-bottom-nav" onClick={this.changePathName}>
            <Link to="/acara-saya" style={{ textDecoration: "none" }}>
              <div className="icon">
                {this.state.pathName === "/acara-saya" ? (
                  <i className="bi bi-folder-fill"></i>
                ) : (
                  <i className="bi bi-folder"></i>
                )}
              </div>
            </Link>
            <div className="title">Acara Saya</div>
          </div>

          <div className="item-bottom-nav" onClick={this.changePathName}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="icon">
                {this.state.pathName === "/" ? (
                  <i className="bi bi-house-fill"></i>
                ) : (
                  <i className="bi bi-house"></i>
                )}
              </div>
            </Link>
            <div className="title">Beranda</div>
          </div>

          <div className="item-bottom-nav" onClick={this.changePathName}>
            <Link to="/daftar-acara" style={{ textDecoration: "none" }}>
              <div className="icon">
                {this.state.pathName === "/daftar-acara" ? (
                  <i className="bi bi-flag-fill"></i>
                ) : (
                  <i className="bi bi-flag"></i>
                )}
              </div>
            </Link>
            <div className="title">Daftar Acara</div>
          </div>

          <div className="item-bottom-nav" onClick={this.changePathName}>
            <Link to="/keluar" style={{ textDecoration: "none" }}>
              <div className="icon">
                {this.state.pathName === "/keluar" ? (
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

export default Parent;
