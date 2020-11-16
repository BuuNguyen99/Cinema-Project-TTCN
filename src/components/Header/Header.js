import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBox from "../SearchBox/SearchBox";
import Login from "./Login";
import Register from "./Register";
import "./styleHeader.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Logo from "../../assets/images/logo.png";
import history from "../../commons/history";
import { connect } from "react-redux";
import { actSearchMovie } from "../../actions/action";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      openSearch: false,
    };
  }

  onDelete = () => {
    let result = window.confirm("bạn có muốn đăng xuất ?");
    if (result === true) {
      window.localStorage.removeItem("account");
    }
  };

  handleToggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu,
    });
    if (this.state.openSearch) {
      this.setState({
        openSearch: !this.state.openSearch,
      });
    }
  }

  handleToggleSearch() {
    this.setState({
      openSearch: !this.state.openSearch,
    });
    if (this.state.openMenu) {
      this.setState({
        openMenu: !this.state.openMenu,
      });
    }
  }
  handleOnEnter = (e, keyword) => {
    if (e.keyCode === 13) {
      this.props.searchMovie(keyword);
      history.push("/search");
    }
  };
  render() {
    let showMenu = this.state.openMenu ? "showMenu" : "hideMenu";
    let showSearch = this.state.openSearch ? "showSearch" : "hideSearch";
    return (
      <div className="wrapper-header">
        {/* Header banner */}
        <div className=" container-fluid">
          <div className="container">
            <div className="wrap-header row d-flex align-items-center">
              <div className="col-4 col-md-4 col-lg-3">
                <Link to="/">
                  <img className="imageLogo" src={Logo} alt="logo"></img>
                </Link>
              </div>
              <div className="col-8 col-md-8 col-lg-9 text-right text-secondary">
                <ShowFunction account={this.props} onDelete={this.onDelete} />
              </div>
            </div>
          </div>
        </div>

        {/* menu mobile */}
        <div className={`skip-links`}>
          <span
            className="skip-links-item"
            onClick={this.handleToggleMenu.bind(this)}
          >
            <a href="/#" className="linkItem">
              <span className="icon">
                <span>
                  <i className="fas fa-bars"></i>
                </span>
              </span>
              <span className="label">Menu</span>
            </a>
          </span>
          <span
            className="skip-links-item"
            onClick={this.handleToggleSearch.bind(this)}
          >
            <a href="/#" className=" linkItem skip-link skip-search">
              <span className="icon">
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </span>
              <span className="label">Tìm kiếm</span>
            </a>
          </span>
        </div>

        {/* Navigation */}
        <Navigation style={showMenu} />

        {/* Search */}
        <SearchBox
          handleOnEnter={this.handleOnEnter}
          styleSearch={`${showSearch}`}
        />
      </div>
    );
  }
}

function ShowFunction(props) {
  let { onDelete } = props;
  if (!localStorage.getItem("account")) {
    localStorage.setItem("account", JSON.stringify(""));
  }
  let account = JSON.parse(localStorage.getItem("account"));
  if (Object.keys(account).length === 0) {
    return (
      <div>
        <Login /> <span>/</span> <Register />
      </div>
    );
  } else if (Object.keys(account).length !== 0) {
    let role = account.role;
    if (role === "admin") {
      return (
        <div>
          <span>
            Admin:
            <Link to="/admin-page" className="mx-1">
              {account.userName}
            </Link>{" "}
            |{" "}
          </span>

          <Link to="/" onClick={() => onDelete()}>
            Thoát
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <span>
            {" "}
            User:
            <Link to="/user-page" className="mx-1">
              {account.userName}
            </Link>{" "}
            |{" "}
          </span>

          <Link to="/" onClick={() => onDelete()}>
            Thoát
          </Link>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (keyword) => {
      dispatch(actSearchMovie(keyword));
    },
  };
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withRouter, withConnect)(Header);
