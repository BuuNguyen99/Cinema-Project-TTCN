import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { actFetchDataMovieRequest } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import ItemMovie from "./ItemMovie";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ManageMovies() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.reducerMovie.movie) || [];
  useEffect(() => {
    dispatch(actFetchDataMovieRequest());
  }, [dispatch]);

  let showDataMovies = movie.map((movie, index) => {
    return <ItemMovie key={`itemUser ${index}`} movie={movie} />;
  });
  let margin = {
    marginBottom: "150px",
  };
  return (
    <div className="container-fluid" style={margin}>
      <div className="row mb-3">
        <div className="col-md-12">
          <Link to="/admin-page/ManageMovies/AddMovie">
            <button type="button" className="btn btn-outline-info ml-3">
              Thêm Phim
            </button>
          </Link>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Tên Phim</TableCell>
              <TableCell align="center">Slug</TableCell>
              <TableCell align="center">Giới Thiệu</TableCell>
              <TableCell align="center">Thể Loại</TableCell>
              <TableCell align="center">Đạo Diễn</TableCell>
              <TableCell align="center">Diễn Viên</TableCell>
              <TableCell align="center">Thời Lượng</TableCell>
              <TableCell align="center">Quốc Gia</TableCell>
              <TableCell align="center">Ngày Công Chiếu</TableCell>
              <TableCell align="center">Giá Tiền</TableCell>
              <TableCell align="center">Ảnh Phim ĐC</TableCell>
              <TableCell align="center">Ảnh TT PHim</TableCell>
              <TableCell align="center">Video Trailer</TableCell>
              <TableCell align="center">Lượt Đánh Giá</TableCell>
              <TableCell align="center">Số Lượng ĐG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{showDataMovies}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default React.memo(ManageMovies);
