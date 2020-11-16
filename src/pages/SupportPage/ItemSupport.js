import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ItemTypoSupport from "./ItemTypoSupport";

function ItemSupport(props) {
  const [checkColor, setCheckColor] = useState(false);
  const handlerChange = () => {
    let Bool = checkColor === true ? false : true;

    setCheckColor(Bool);
  };

  let { support } = props;

  let DataItemSupport = support.content.map((content, index) => {
    return <ItemTypoSupport key={index} content={content} />;
  });
  let bgColorTrue = {
    backgroundColor: "#f26b38",
    color: "white",
  };
  let bgColorFalse = {
    backgroundColor: "#fafafa",
    color: "black",
  };
  return (
    <div>
      <ExpansionPanel className="mt-3">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handlerChange}
          style={checkColor === true ? bgColorTrue : bgColorFalse}
        >
          <Typography>
            <i className="fas fa-bookmark mr-2 "></i> {support.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{DataItemSupport}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ItemSupport;
