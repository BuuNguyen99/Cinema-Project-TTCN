import React, { useEffect } from "react";
import ItemPromotion from "./ItemPromotion";
import { actFetchDataPromotionRequest } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Pro() {
  const dispatch = useDispatch();
  const promotion =
    useSelector((state) => state.reducerMovie.promotion, []) || [];

  useEffect(() => {
    dispatch(actFetchDataPromotionRequest());
  }, [dispatch]);

  let linksStyle = {
    fontSize: "18px",
    color: "black",
    textTransform: "uppercase",
  };

  let dataItemPromotion = promotion.map((promotion, index) => {
    return <ItemPromotion key={`promotion ${index}`} promotion={promotion} />;
  });
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12">
          <Link to="/event">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              Tin khuyến mãi
            </p>
          </Link>
        </div>
      </div>
      <div className="row">{dataItemPromotion}</div>
    </div>
  );
}

export default React.memo(Pro);
