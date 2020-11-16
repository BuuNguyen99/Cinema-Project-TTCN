import React, { useEffect } from "react";
import ItemSupport from "./ItemSupport";
import "./SupportPage.css";
import { actFetchDataSupportRequest } from "./../../actions/action";
import { useSelector, useDispatch } from "react-redux";

function SupportPage() {
  const dispatch = useDispatch();
  const dataSupport =
    useSelector((state) => state.reducerSupport.support, []) || [];

  useEffect(() => {
    dispatch(actFetchDataSupportRequest());
  }, [dispatch]);

  let linksStyle = {
    color: "black",
    textTransform: "uppercase",
  };
  return (
    <div className="container mb-5">
      <div className="nav-tabs my-4">
        <div className="col-md-12">
          <ul className="nav movie-home link-cout">
            <li className="link-wrapper">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                Giải đáp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {dataSupport.map((support, index) => {
          return <ItemSupport key={index} support={support} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(SupportPage);
