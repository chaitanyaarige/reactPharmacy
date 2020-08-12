import React from "react";
import 'assets/scss/styles.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="assets/images/logo.svg" alt="logo"></img>
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src="assets/images/logo-mini.png" alt="logo"></img>
            </a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="mdi mdi-menu"></span>
            </button>
            <div className="search-field d-none d-md-block">
              <form className="d-flex align-items-center h-100" action="#">
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-transparent border-0"
                    placeholder="Search projects"
                  ></input>
                </div>
              </form>
            </div>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="profileDropdown"
                  href="www.google.com"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="nav-profile-img">
                    <img src="assets/images/faces/avatar.png" alt="hjkhk">
                    </img>
                    <span className="availability-status online"></span>
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">Chaitanya Arige</p>
                  </div>
                </a>
                <div
                  className="dropdown-menu navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <a className="dropdown-item" href="gfhjk.com">
                    <i className="mdi mdi-cached mr-2 text-success"></i> Activity
                    Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="www.ggoogle.com">
                    <i className="mdi mdi-logout mr-2 text-primary"></i> Signout
                  </a>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block full-screen-link">
                <div className="nav-link">
                  <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="messageDropdown"
                  href="www.gg.com"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count-symbol bg-warning"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="messageDropdown"
                >
                  <h6 className="p-3 mb-0">Messages</h6>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/avatar.png"
                        alt="imjkljhage"
                        className="profile-pic"
                      ></img>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        Mark send you a message
                      </h6>
                      <p className="text-gray mb-0"> 1 Minutes ago </p>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/avatar.png"
                        alt="imgjhkljage"
                        className="profile-pic"
                      ></img>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        Cregh send you a message
                      </h6>
                      <p className="text-gray mb-0"> 15 Minutes ago </p>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/avatar.png"
                        alt="gfhj"
                        className="profile-pic"
                      ></img>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                        Profile picture updated
                      </h6>
                      <p className="text-gray mb-0"> 18 Minutes ago </p>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="kljhgfhjkl.com"
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <div className="dropdown-divider"></div>
                  <a href="kjhgjk.com" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">
                        Event today
                      </h6>
                      <p className="text-gray ellipsis mb-0">
                        Just a reminder that you have an event today
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="jhk.com" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">
                        Settings
                      </h6>
                      <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="www.gofol.com" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">
                        Launch Admin
                      </h6>
                      <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                </div>
              </li>
              <li className="nav-item nav-logout d-none d-lg-block">
                <a className="nav-link" href="www.google.com">
                  <i className="mdi mdi-power"></i>
                </a>
              </li>
              <li className="nav-item nav-settings d-none d-lg-block">
                <a className="nav-link" href="www.hjkjh.com">
                  <i className="mdi mdi-format-line-spacing"></i>
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav> 
      </div>
    );
  }
}

export default HomePage;
