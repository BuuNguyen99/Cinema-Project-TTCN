import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import "./ItemMovie.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  actDeleteMovieRequest,
  actFetchDataMovieRequest,
} from "../../../actions/action";

function ItemMovie(props) {
  const dispatch = useDispatch();

  const DeleteMovie = (idMovie) => {
    let result = window.confirm("Bạn có muốn xóa Phim này ?");
    if (result) {
      dispatch(actDeleteMovieRequest(idMovie));
      dispatch(actFetchDataMovieRequest());
      alert("Xóa Phim thành công");
    }
  };

  const UpdateMovie = (movie) => {
    localStorage.setItem("updateMovie", JSON.stringify(movie));
  };
  let { movie } = props;
  console.log(props);
  let intro = movie.intro.substring(0, 10);
  let image = movie.image.substring(0, 15);
  let imageInfo = movie.imageInfo.substring(0, 15);
  let videoTrailer = movie.video.substring(0, 15);
  const date = moment(movie.premiereDate).format("DD-MM-YYYY");
  return (
    <>
      <TableRow>
        <TableCell align="center">
          <Link
            to="/admin-page/ManageMovies/UpdateMovie"
            onClick={() => UpdateMovie(movie)}
          >
            <i className="fas fa-user-edit iconUp"></i>
          </Link>
        </TableCell>
        <TableCell align="center">
          <i
            className="fas fa-user-minus iconDel"
            onClick={() => DeleteMovie(movie._id)}
          ></i>
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.name}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.slug}
        </TableCell>
        <TableCell
          className="whiteText"
          align="center"
        >{`${intro}...`}</TableCell>
        <TableCell className="whiteText" align="center">
          {movie.type}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.author}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.actor}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.time}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.nation}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {date}
        </TableCell>
        <TableCell className="whiteText" align="center">
          {movie.price}
        </TableCell>
        <TableCell
          className="whiteText"
          align="center"
        >{`${image}...`}</TableCell>
        <TableCell
          className="whiteText"
          align="center"
        >{`${imageInfo}...`}</TableCell>
        <TableCell
          className="whiteText"
          align="center"
        >{`${videoTrailer}...`}</TableCell>
        <TableCell
          className="whiteText"
          align="center"
        >{movie.vote.rate}</TableCell>
        <TableCell className="whiteText" align="center">
          {movie.vote.numberOfReviews}
        </TableCell>
      </TableRow>
    </>
  );
}

export default ItemMovie;
