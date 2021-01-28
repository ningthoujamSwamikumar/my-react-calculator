import React from "react";

export default function DisplayArea(props) {
  return (
    <div className="display">
      <div name="opnd1" value={props.input1} className="innerDisplay">
        {props.input1}
      </div>
      <div name="opAndOpnd2" value={props.input23} className="innerDisplay">
        {props.input23[0]==="*" ? "x" : props.input23[0]} {props.input23[1]}
      </div>
      <div name="result" value={props.output} className="innerDisplay">
        {props.output !== "" && "="} {props.output}
      </div>
    </div>
  );
}
