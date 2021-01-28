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
  const [{prevResult, newOp}, addNewOperation ] = useState({prevResult:"", newOp:""});
  // console.log("opnd1:"+opnd1+", op"+op+", opnd2:"+opnd2+", result:"+result+", prevResult:"+prevResult+", newOp:"+newOp);
  if(newOp){
    setOpnd1(prevResult);
    setOp(newOp);
    addNewOperation({prevResult:"", newOp:""});
  }

  function takeNumInput(input) {
    if (op === "") {
      setOpnd1((prevValue) => {
        return prevValue + input;
      });
    } else if (op !== "" && result === "") {
      setOpnd2((prevValue) => {
        return prevValue + input;
      });
    } else {
      console.log("!error in takeNumInput in App.js");
    }
  }

  function takeOpInput(opInput) {
    if (opnd1 === "") {
      opInput === "-" && takeNumInput(opInput);
    } else if (op === "") {
      setOp(opInput);
    }else if(opnd2 ===""){
      opInput === "-" && takeNumInput(opInput);
    } else if (result==="" && opInput === "=") {
      setResult(() => {
        return calculate(opnd1, op, opnd2);
      });
    }
    else if(result!=="" && opInput !=="="){
      delInput("AC");
      addNewOperation({prevResult:result, newOp:opInput});
    }
  }

  function delInput(input) {
    if (input === "AC") {
      setOpnd1("");
      setOp("");
      setOpnd2("");
      setResult("");
      addNewOperation({prevResult:"", newOp:""});
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
