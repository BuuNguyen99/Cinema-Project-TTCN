import React from "react";
import Typography from "@material-ui/core/Typography";

function ItemTypoSupport(props) {
  let { content } = props;

  let blockScope = {
    display: "block",
  };

  return (
    <>
      <Typography className="mb-2" component={"span"} style = {blockScope}>
        <i className="fab fa-ethereum ml-2 mr-3"></i> {content}
      </Typography>
    </>
  );
}

export default ItemTypoSupport;
