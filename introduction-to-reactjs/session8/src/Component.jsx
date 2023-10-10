import React from "react";
// useEffect - componentDidMount, componentDidUpdate, ComponentWillReceiveProps or getDerivedStateFromProps
// useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer, useLayoutEffect
// useEffect()

// useEffectUpdateHook() that shold not invoke useEffect for the first time and always do for the next set of rerenders
// useMemo(function, [])
function calculateFactorial(num) {
  console.log("calculate factorial of ", num);
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}
function Component() {
  const [counter, setCounter] = React.useState(0);
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState(2);
  const focusRef = React.useRef(null);
  const intervalRef = React.useRef(null);
  const number = React.useMemo(() => {
    return calculateFactorial(value);
  }, [value]);

  const theme = React.useMemo(
    () => ({
      backgroundColor: counter ? "black" : "blue",
      color: counter ? "white" : "black",
    }),
    []
  );
  React.useEffect(() => {
    console.log("Inside the effect");
    intervalRef.current = setInterval(function () {
      setCounter((counter) => counter + 1);
    }, 1000);
    if (focusRef.current) {
      focusRef.current = false;
      return;
    } else {
      console.log("Inside useEffect", focusRef);
    }
  }, [name]);
  const handleChange = () => {
    setCounter(counter + 1);
  };

  const handleClick = () => {
    console.log("In here", intervalRef.current);
    clearInterval(intervalRef.current);
  };
  console.log(theme);
  return (
    <div className="App">
      <div style={theme}>counter is {counter}</div>
      <div>name is {name}</div>
      <input
        ref={focusRef}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <input type="text" value={number} />
      </div>
      <button onClick={handleChange}>Increment</button>
      <button onClick={handleClick}>clear Interval</button>
    </div>
  );
}

export default Component;

// React.useEffect(function,deps)
