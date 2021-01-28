import React, { useState } from "react";
import "./styles.css";
import Buttons from "./components/buttons";
import DisplayArea from "./components/displayArea";
import calculate from "./components/calculate";

export default function App() {
  const [opnd1, setOpnd1] = useState("");
  const [op, setOp] = useState("");
  const [opnd2, setOpnd2] = useState("");
  const [result, setResult] = useState("");

  function takeNumInput(input) {
    if (op === "") {
      setOpnd1((prevValue) => {
        return prevValue + input;
      });
    } else if (op !== "") {
      setOpnd2((prevValue) => {
        return prevValue + input;
      });
    } else {
      console.log("!error in takeNumInput in App.js");
    }
  }

  function takeOpInput(input) {
    if (opnd1 === "") {
      input === "-" && takeNumInput(input);
    } else if (op === "") {
      setOp(() => {
        return input === "*" ? "x" : input;
      });
    } else if (input === "=") {
      setResult(() => {
        return calculate(opnd1, op, opnd2);
      });
    }
  }

  function delInput(input) {
    if (input === "AC") {
      setOpnd1("");
      setOp("");
      setOpnd2("");
      setResult("");
    } else if (input === "DEL") {
      if (op === "") {
        setOpnd1((prevValue) => {
          return prevValue.slice(0, -1);
        });
      } else if (opnd2 === "") {
        setOp("");
      } else if (result === "") {
        setOpnd2((prevValue) => {
          return prevValue.slice(0, -1);
        });
      } else {
        setResult((prevValue) => {
          return String(prevValue).slice(0, -1);
        });
      }
    }
  }

  return (
    <div className="App">
      <div className="setMargin"></div>
      <DisplayArea input1={opnd1} input23={[op, opnd2]} output={result} />
      <Buttons
        onNumInput={takeNumInput}
        onOpInput={takeOpInput}
        onDelInput={delInput}
      />
    </div>
  );
}
