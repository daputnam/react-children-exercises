import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ErrorBox = props => {
  return (
    <div className="error-box">
     <i class="fa fa-address-book"></i>
     &nbsp;{props.children}
    </div>
  )
};

ReactDOM.render(<ErrorBox>Watch Out</ErrorBox>, document.getElementById("root"));

