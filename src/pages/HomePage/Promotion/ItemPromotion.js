import React from "react";
import "./ItemPromotion.css";
import { Link } from "react-router-dom";
function ItemPromotion(props) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="box1">
        <img src={props.promotion.imagePro} alt="" />
        <div className="box-content">
          <Link to={`/promotion/${props.promotion.links}`}>
            <button type="button" className="btn btn-outline-warning">
              CHI TIẾT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemPromotion;
