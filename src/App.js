import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  function plus(e) {
    e.preventDefault();
    if (result == 0 && Number(inputRef.current.value) != 0) {
      setResult(Number(inputRef.current.value));
      setOperator(" + ");
      inputRef.current.value = null;
    } else {
      setOperator(" + ");
      inputRef.current.value = null;
    }
  }

  function minus(e) {
    e.preventDefault();
    if (result == 0 && Number(inputRef.current.value) != 0) {
      setResult(Number(inputRef.current.value));
      setOperator(" - ");
      inputRef.current.value = null;
    } else {
      setOperator(" - ");
      inputRef.current.value = null;
    }
  }

  function times(e) {
    e.preventDefault();
    if (result == 0 && Number(inputRef.current.value) != 0) {
      setResult(Number(inputRef.current.value));
      setOperator(" x ");
      inputRef.current.value = null;
    } else {
      setOperator(" x ");
      inputRef.current.value = null;
    }
  }

  function divide(e) {
    e.preventDefault();
    if (result == 0 && Number(inputRef.current.value) != 0) {
      setResult(Number(inputRef.current.value));
      setOperator(" / ");
      inputRef.current.value = null;
    } else {
      setOperator(" / ");
      inputRef.current.value = null;
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    setOperator("");
  }

  function equals(e) {
    e.preventDefault();
    if (operator == " + ") {
      setResult((result) => result + Number(inputRef.current.value));
      setOperator("");
    } else if (operator == " - ") {
      setResult((result) => result - Number(inputRef.current.value));
      setOperator("");
    } else if (operator == " x ") {
      setResult((result) => result * Number(inputRef.current.value));
      setOperator("");
    } else if (operator == " / ") {
      setResult((result) => result / Number(inputRef.current.value));
      setOperator("");
    }
  }

  function seven(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".7");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "7");
    }
  }

  function eight(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".8");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "8");
    }
  }

  function nine(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".9");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "9");
    }
  }

  function four(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".4");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "4");
    }
  }

  function five(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".5");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "5");
    }
  }

  function six(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".6");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "6");
    }
  }

  function one(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".1");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "1");
    }
  }

  function two(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".2");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "2");
    }
  }

  function three(e) {
    e.preventDefault();
    if (inputRef.current.value.substr(-2) == ".0") {
      inputRef.current.value = inputRef.current.value.replace(".0", ".3");
    } else {
      inputRef.current.value = Number(inputRef.current.value + "3");
    }
  }

  function zero(e) {
    e.preventDefault();
    inputRef.current.value = String(inputRef.current.value + "0");
  }

  function period(e) {
    e.preventDefault();
    inputRef.current.value = String(inputRef.current.value + ".0");
  }

  function deleteNum(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value.slice(
      0,
      inputRef.current.value.length - 1
    );
  }

  function posNeg(e) {
    e.preventDefault();
    if (Number(inputRef.current.value) > 0) {
      inputRef.current.value = -inputRef.current.value;
    } else {
      inputRef.current.value = inputRef.current.value * -1;
    }
  }

  return (
    <>
      <div className="App">
        <form>
          <p className="display" ref={resultRef}>
            {result}
            {operator}
          </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <div className="keypad">
            <button onClick={deleteNum}>Del</button>
            <button onClick={resetInput}>CE</button>
            <button onClick={resetResult}>C</button>
            <button onClick={equals}>=</button>

            <button onClick={seven}>7</button>
            <button onClick={eight}>8</button>
            <button onClick={nine}>9</button>
            <button onClick={plus}>+</button>

            <button onClick={four}>4</button>
            <button onClick={five}>5</button>
            <button onClick={six}>6</button>
            <button onClick={minus}>-</button>

            <button onClick={one}>1</button>
            <button onClick={two}>2</button>
            <button onClick={three}>3</button>
            <button onClick={times}>x</button>

            <button onClick={posNeg}>+/-</button>
            <button onClick={zero}>0</button>
            <button onClick={period}>.</button>
            <button onClick={divide}>/</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
