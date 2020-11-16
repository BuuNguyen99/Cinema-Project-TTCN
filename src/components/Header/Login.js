import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
import { actLoginAccountRequest } from "./../../actions/action";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      txtPassword: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtEmail: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      checkingU: false,
      checkingA: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    const newState = { ...this.state[name] }; /* dummy object */
    newState.value = value;
    this.setState({ [name]: newState });
  };

  handleInputValidation = (event) => {
    const { name } = event.target;
    const { isInputValid, errorMessage } = validateInput(
      name,
      this.state[name].value
    );
    const newState = { ...this.state[name] }; /* dummy object */
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    this.setState({ [name]: newState });
  };

  onSave = (e) => {
    e.preventDefault();
    let { txtPassword, txtEmail } = this.state;

    if (
      txtPassword.value !== "" &&
      txtPassword.isInputValid === true &&
      txtEmail.value !== "" &&
      txtEmail.isInputValid === true
    ) {
      let account = {
        password: txtPassword.value,
        email: txtEmail.value,
      };

      actLoginAccountRequest(account).then((res) => {
        let dataAccount = res.data;
        console.log(dataAccount);
        if (!dataAccount.success) {
          alert(dataAccount.message);
        } else {
          if (Object.keys(dataAccount).length !== 0) {
            localStorage.setItem("account", JSON.stringify(dataAccount));
          }
          alert("Logged in successfully");
          this.setState({ show: false });
          window.location.reload();
        }
      });
    } else {
      alert("Vui lòng nhập đúng định dạng.");
    }
  };

  render() {
    let { txtEmail, txtPassword } = this.state;

    let toolbar = {
      display: "content",
    };
    let header = {
      color: "#f26b38",
      borderBottom: "2px solid #f26b38",
    };
    let modalHeader = {
      borderBottom: "none",
    };
    let text = {
      fontSize: "14px",
      color: "#a0a3a7",
    };
    let Buttonn = {
      backgroundColor: "#f26b38",
      border: "1px solid #f26b38",
    };
    let link = {
      display: "inline",
      fontSize: "14px",
      color: "#a0a3a7",
      cursor: "pointer",
    };
    return (
      <ButtonToolbar style={toolbar}>
        <div
          style={link}
          onClick={this.handleShow}
          className="pl-2 text-secondary text-decoration-none "
        >
          <i className="fas fa-user mr-1"></i> Đăng nhập
        </div>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton style={modalHeader}>
            <Modal.Title id="contained-modal-title-lg" style={header}>
              ĐĂNG NHẬP
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <p style={text}>
                  Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội
                  nhận thêm nhiều ưu đãi từ chương trình thành viên Cinema.
                </p>
              </div>
            </div>
            <form onSubmit={this.onSave} id="loginForm">
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="txtEmail"
                    value={txtEmail.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtEmail"
                    isHidden={this.state.txtEmail.isInputValid}
                    errorMessage={this.state.txtEmail.errorMessage}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mật khẩu"
                    name="txtPassword"
                    value={txtPassword.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtPassword"
                    isHidden={this.state.txtPassword.isInputValid}
                    errorMessage={this.state.txtPassword.errorMessage}
                  />
                </div>
              </div>
            </form>
            <div className="row mt-3">
              <div className="col-md-12">
                <a href="/#" style={text}>
                  Quên mật khẩu ?
                </a>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" form="loginForm" style={Buttonn}>
              Đăng Nhập
            </Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

const validateInput = (type, checkingText) => {
  if (type === "txtEmail") {
    if (checkingText !== "") {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Email không được để trống.",
      };
    }
  }
  if (type === "txtPassword") {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Mật khẩu từ 8 kí tự bao gồm chữ và số",
      };
    }
  }
};
function FormError(props) {
  let color = {
    color: "red",
  };

  if (props.isHidden) {
    return null;
  }

  return (
    <div className="m-1" style={color}>
      {props.errorMessage}
    </div>
  );
}

export default Login;
