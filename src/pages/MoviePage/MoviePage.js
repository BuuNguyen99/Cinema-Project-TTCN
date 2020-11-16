import React, { useEffect } from "react";
import TabControl from "../../components/Tab/TabControl";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDataMovieRequest } from "../../actions/action";

function MoviePage(props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.reducerMovie.movie, []) || [];

  useEffect(() => {
    dispatch(actFetchDataMovieRequest());
  });

  const isMovieShowing = (date) => {
    const now = new Date().setHours(0, 0, 0, 0);
    if (Date.parse(date) <= now) return true;
    else return false;
  };

  let moviesShowing = movies.filter((item) =>
    isMovieShowing(item.premiereDate)
  );

  let moviesComingSoon = movies.filter(
    (item) => !isMovieShowing(item.premiereDate)
  );
  const { match } = props;
  const tabDefault = match.path === "/now-showing" ? 0 : 1;
  return (
    <div className="container p-0 mt-3 mb-5">
      <TabControl
        tab1="phim đang chiếu"
        tab2="phim sắp chiếu"
        data1={moviesShowing}
        data2={moviesComingSoon}
        tabDefault={tabDefault}
        path={match.path}
      />
    </div>
  );
}

export default React.memo(MoviePage);
