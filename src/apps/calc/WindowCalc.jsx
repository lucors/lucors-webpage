import { memo, useState } from "react";
import Window from "#main/windows/Window";
import "./WindowCalc.css";
import { WINDOW_TITLE } from "./shared";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigit = (digit) => {
    setDisplayValue(
      waitingForSecondOperand || displayValue === "0"
        ? digit
        : displayValue + digit
    );
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (op) => {
    setFirstOperand(parseFloat(displayValue));
    setOperator(op);
    setWaitingForSecondOperand(true);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handlePercent = () => {
    setDisplayValue((parseFloat(displayValue) / 100).toString());
  };

  const handleEquals = () => {
    if (firstOperand === null || operator === null) return;

    const secondOperand = parseFloat(displayValue);
    let result = "0";

    switch (operator) {
      case "+":
        result = (firstOperand + secondOperand).toString();
        break;
      case "-":
        result = (firstOperand - secondOperand).toString();
        break;
      case "*":
        result = (firstOperand * secondOperand).toString();
        break;
      case "/":
        if (secondOperand === 0) {
          result = "Error";
        } else {
          result = (firstOperand / secondOperand).toString();
        }
        break;
      default:
        result = "0";
    }

    setDisplayValue(result);
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="ops">
        <span className={operator == "/" ? "active" : ""}>/</span>
        <span className={operator == "*" ? "active" : ""}>*</span>
        <span className={operator == "-" ? "active" : ""}>-</span>
        <span className={operator == "+" ? "active" : ""}>+</span>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handlePercent}>%</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => handleDigit("7")}>7</button>
        <button onClick={() => handleDigit("8")}>8</button>
        <button onClick={() => handleDigit("9")}>9</button>
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleDigit("4")}>4</button>
        <button onClick={() => handleDigit("5")}>5</button>
        <button onClick={() => handleDigit("6")}>6</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleDigit("1")}>1</button>
        <button onClick={() => handleDigit("2")}>2</button>
        <button onClick={() => handleDigit("3")}>3</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleDigit("0")}>0</button>
        <button onClick={() => handleDigit(".")}>.</button>
      </div>
    </div>
  );
}

export default memo(function WindowCalc({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<Calculator />} />;
});
