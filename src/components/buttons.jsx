import React from "react";

export default function Buttons(props) {
  function clickHandler(event) {
    const clickedButtonType = event.target.name;
    const clickedButton = event.target.innerHTML;
    if (clickedButtonType === "operator") {
      props.onOpInput(clickedButton);
    } else if (clickedButtonType === "operand") {
      props.onNumInput(clickedButton);
    } else if (clickedButtonType === "delOperator") {
      props.onDelInput(clickedButton);
    }
  }

  return (
    <div className="container-fluid">
      <div className="inner-div-btn">
        <button
          name="delOperator"
          onClick={clickHandler}
          className="functionBtn"
        >
          AC
        </button>
        <button
          name="delOperator"
          onClick={clickHandler}
          className="functionBtn"
        >
          DEL
        </button>
        <button name="operator" onClick={clickHandler} className="functionBtn">
          +
        </button>
        <button name="operator" onClick={clickHandler} className="functionBtn">
          -
        </button>
      </div>
      <div className="inner-div-btn">
        <button name="operand" onClick={clickHandler}>
          7
        </button>
        <button name="operand" onClick={clickHandler}>
          8
        </button>
        <button name="operand" onClick={clickHandler}>
          9
        </button>
        <button name="operator" onClick={clickHandler} className="functionBtn">
          *
        </button>
      </div>
      <div className="inner-div-btn">
        <button name="operand" onClick={clickHandler}>
          4
        </button>
        <button name="operand" onClick={clickHandler}>
          5
        </button>
        <button name="operand" onClick={clickHandler}>
          6
        </button>
        <button name="operator" onClick={clickHandler} className="functionBtn">
          /
        </button>
      </div>
      <div className="inner-div-btn">
        <button name="operand" onClick={clickHandler}>
          1
        </button>
        <button name="operand" onClick={clickHandler}>
          2
        </button>
        <button name="operand" onClick={clickHandler}>
          3
        </button>
        <button name="operator" onClick={clickHandler} className="functionBtn">
          %
        </button>
      </div>
      <div className="inner-div-btn">
        <button name="operand" onClick={clickHandler}>
          0
        </button>
        <button name="operand" onClick={clickHandler}>
          .
        </button>
        <button
          name="operator"
          onClick={clickHandler}
          className="equalToBtn functionBtn"
        >
          =
        </button>
      </div>
    </div>
  );
}
