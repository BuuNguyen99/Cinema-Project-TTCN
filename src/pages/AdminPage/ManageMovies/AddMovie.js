import React, { Component } from "react";
import {
  actAddMovieRequest,
} from "../../../actions/action";
class AddMovie extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      txtName: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtSlug: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtIntro: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtType: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtAuthor: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtActor: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtTime: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtNation: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtPrice: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtImage: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtImageInfo: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtVideoTrailer: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtDate: "",
    };
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

  handleChangeDate = (event) => {
    this.setState({
      txtDate: event.target.value,
    });
    console.log(this.state.txtDate);
  };

  onBack = () => {
    let { history } = this.props;
    history.goBack();
  };

  onSave = (e) => {
    e.preventDefault();
    let {
      txtName,
      txtSlug,
      txtIntro,
      txtType,
      txtAuthor,
      txtActor,
      txtTime,
      txtNation,
      txtPrice,
      txtImage,
      txtImageInfo,
      txtVideoTrailer,
      txtDate,
    } = this.state;
    let { history } = this.props;

    if (
      txtName.value !== "" &&
      txtName.isInputValid === true &&
      txtSlug.value !== "" &&
      txtSlug.isInputValid === true &&
      txtIntro.value !== "" &&
      txtIntro.isInputValid === true &&
      txtType.value !== "" &&
      txtType.isInputValid === true &&
      txtAuthor.value !== "" &&
      txtAuthor.isInputValid === true &&
      txtActor.value !== "" &&
      txtActor.isInputValid === true &&
      txtTime.value !== "" &&
      txtTime.isInputValid === true &&
      txtNation.value !== "" &&
      txtNation.isInputValid === true &&
      txtPrice.value !== "" &&
      txtPrice.isInputValid === true &&
      txtImage.value !== "" &&
      txtImage.isInputValid === true &&
      txtImageInfo.value !== "" &&
      txtImageInfo.isInputValid === true &&
      txtVideoTrailer.value !== "" &&
      txtVideoTrailer.isInputValid === true &&
      txtDate !== ""
    ) {
      var premiereDate = new Date(txtDate);
      var arrDate = [];
      for (let i = 1; i <= 3; i++) {
        var currentDate = new Date(
          premiereDate.getTime() + i * 24 * 60 * 60 * 1000
        );
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        let date = month + "/" + day + "/" + year;
        arrDate.push(date);
      }

      let movie = {
        name: txtName.value,
        slug: txtSlug.value,
        intro: txtIntro.value,
        type: txtType.value,
        author: txtAuthor.value,
        actor: txtActor.value,
        time: txtTime.value,
        nation: txtNation.value,
        premiereDate: txtDate,
        price: txtPrice.value,
        image: txtImage.value,
        imageInfo: txtImageInfo.value,
        video: txtVideoTrailer.value,
        vote: {
          rate: 0,
          numberOfReviews: 0,
        },
        date: [
          {
            dateMovie: arrDate[0],
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "11:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "19:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: arrDate[1],
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: arrDate[2],
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      };
      console.log(movie);
      let result = window.confirm("Bạn có muốn Thêm Phim ?");
      if (result) {
        actAddMovieRequest(movie).then((res) => {
          console.log(res.data);
          let notification = res.data;
          if (!notification.success) {
            alert(notification.message);
          } else {
            alert(notification.message);
            history.goBack();
          }
        });
      }
    } else {
      alert("Vui Lòng điền đầy đủ thông tin và đúng định dạng");
    }
  };
  render() {
    let {
      txtName,
      txtSlug,
      txtIntro,
      txtType,
      txtAuthor,
      txtActor,
      txtTime,
      txtNation,
      txtPrice,
      txtImage,
      txtImageInfo,
      txtVideoTrailer,
      txtDate,
    } = this.state;
    let linksStyle = {
      fontSize: "18px",
      color: "black",
      textTransform: "uppercase",
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              Thêm Phim
            </p>
          </div>
        </div>
        <form onSubmit={this.onSave} id="MovieForm">
          <div className="row mt-4">
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label>Tên Phim</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtName"
                  name="txtName"
                  value={txtName.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtName"
                  isHidden={this.state.txtName.isInputValid}
                  errorMessage={this.state.txtName.errorMessage}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label>Slug</label>
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  name="txtSlug"
                  value={txtSlug.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtSlug"
                  isHidden={this.state.txtSlug.isInputValid}
                  errorMessage={this.state.txtSlug.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label>Ngày Chiếu</label>
                <input
                  type="date"
                  name="txtDate"
                  id="txtDate"
                  max="3000-12-31"
                  min="1000-01-01"
                  className="form-control"
                  value={txtDate}
                  onChange={this.handleChangeDate}
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <label>Thể Loại</label>
              <input
                type="text"
                className="form-control"
                id="txtType"
                name="txtType"
                value={txtType.value}
                onChange={this.handleInput}
                onBlur={this.handleInputValidation}
              />
              <FormError
                type="txtType"
                isHidden={this.state.txtType.isInputValid}
                errorMessage={this.state.txtType.errorMessage}
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <label>Đạo Diễn</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtAuthor"
                  name="txtAuthor"
                  value={txtAuthor.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtAuthor"
                  isHidden={this.state.txtAuthor.isInputValid}
                  errorMessage={this.state.txtAuthor.errorMessage}
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <label>Thời Gian</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtTime"
                  name="txtTime"
                  value={txtTime.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtTime"
                  isHidden={this.state.txtTime.isInputValid}
                  errorMessage={this.state.txtTime.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-lg-3">
              <div className="form-group">
                <label>Diễn Viên</label>
                <input
                  type="text"
                  name="txtActor"
                  id="txtActor"
                  className="form-control"
                  value={txtActor.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtActor"
                  isHidden={this.state.txtActor.isInputValid}
                  errorMessage={this.state.txtActor.errorMessage}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="form-group">
                <label>Quốc Gia</label>
                <input
                  type="text"
                  name="txtNation"
                  id="txtNation"
                  className="form-control"
                  value={txtNation.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtNation"
                  isHidden={this.state.txtNation.isInputValid}
                  errorMessage={this.state.txtNation.errorMessage}
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label>Ảnh Phim Đang Chiếu</label>
                <input
                  type="text"
                  name="txtImage"
                  id="txtImage"
                  className="form-control"
                  value={txtImage.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtImage"
                  isHidden={this.state.txtImage.isInputValid}
                  errorMessage={this.state.txtImage.errorMessage}
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="form-group">
                <label>Giá Tiền</label>
                <input
                  type="txt"
                  name="txtPrice"
                  id="txtPrice"
                  className="form-control"
                  value={txtPrice.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtImage"
                  isHidden={this.state.txtPrice.isInputValid}
                  errorMessage={this.state.txtPrice.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label>Ảnh Thông tin Phim</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtImageInfo"
                  name="txtImageInfo"
                  value={txtImageInfo.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtImageInfo"
                  isHidden={this.state.txtImageInfo.isInputValid}
                  errorMessage={this.state.txtImageInfo.errorMessage}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label>Video Trailer</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtVideoTrailer"
                  name="txtVideoTrailer"
                  value={txtVideoTrailer.value}
                  onChange={this.handleInput}
                  onBlur={this.handleInputValidation}
                />
                <FormError
                  type="txtVideoTrailer"
                  isHidden={this.state.txtVideoTrailer.isInputValid}
                  errorMessage={this.state.txtVideoTrailer.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 col-lg-12">
              <label>Thông Tin Phim</label>
              <textarea
                rows="5"
                type="text"
                className="form-control"
                id="txtIntro"
                name="txtIntro"
                value={txtIntro.value}
                onChange={this.handleInput}
                onBlur={this.handleInputValidation}
              ></textarea>
              <FormError
                type="txtIntro"
                isHidden={this.state.txtIntro.isInputValid}
                errorMessage={this.state.txtIntro.errorMessage}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4 col-lg-4">
              <button
                type="button"
                onClick={this.onBack}
                className="btn btn-info mb-5 mr-3"
              >
                Trở Lại
              </button>

              <button
                type="submit"
                form="MovieForm"
                className="btn btn-success mb-5"
              >
                Lưu lại
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const validateInput = (type, checkingText) => {
  if (type === "txtPrice") {
    const regexp = /^[0-9]+$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Chỉ Chứa Số.",
      };
    }
  }

  if (
    type === "txtIntro" ||
    type === "txtImage" ||
    type === "txtImageInfo" ||
    type === "txtVideoTrailer" ||
    type === "txtTime" ||
    type === "txtSlug" ||
    type === "txtType" ||
    type === "txtAuthor" ||
    type === "txtActor" ||
    type === "txtNation" ||
    type === "txtName"
  ) {
    console.log(checkingText);
    if (checkingText !== "") {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Vui lòng nhập",
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

export default AddMovie;
