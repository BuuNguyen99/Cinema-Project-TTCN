import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import "./ItemUser.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  actDeleteUserRequest,
  actFetchDataUsersRequest,
} from "../../../actions/action";

function ItemUser(props) {
  const dispatch = useDispatch();

  const DeleteUser = (idUser) => {
    let result = window.confirm("Bạn có muốn xóa Tài khoản này ?");
    if (result) {
      dispatch(actDeleteUserRequest(idUser));
      dispatch(actFetchDataUsersRequest());
      alert("Xóa tài khoản thành công");
    }
  };

  const UpdateUser = (user) => {
    localStorage.setItem("updateUser", JSON.stringify(user));
  };
  let { users } = props;
  const birth = moment(users.birth).format("DD-MM-YYYY");

  return (
    <>
      <TableRow>
        <TableCell align="center">{users.userName}</TableCell>
        <TableCell align="center">{users.email}</TableCell>
        <TableCell align="center">{users.phone}</TableCell>
        <TableCell align="center">{users.gender}</TableCell>
        <TableCell align="center">{birth}</TableCell>
        <TableCell align="center">{users.address}</TableCell>
        <TableCell align="center">{users.currentStar}</TableCell>
        <TableCell align="center">{users.targets}</TableCell>
        <TableCell align="center">
          <Link to="/admin-page/ManageUsers/updateUsers" onClick={() => UpdateUser(users)}>
            <i className="fas fa-user-edit iconUp"></i>
          </Link>
        </TableCell>
        <TableCell align="center">
          <i
            className="fas fa-user-minus iconDel"
            onClick={() => DeleteUser(users._id)}
          ></i>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ItemUser;
