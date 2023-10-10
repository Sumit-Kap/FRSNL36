import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./Homepage";
import Test from "./Test";
import Demo from "./Demo";
import Component from "./Component";
// functional component
// class based component - functional components were called as dumb components.
// functional component + hooks
// class based component + lifecycle methods.
// HMR - Hot module reloading - whatever changes I do on my local it will automatically refresh my server with those changes
// Routing
// props and state -
// props - function arguments
// Parent
// Next week - Example on these methods, routing, design patterns in react class components. functional components and hooks,
// Create a todo application using react.js similar to google keep
// Inheritance
// Polymorphism
// Abstraction
// Encapsulation

// value, reference - memory address, undefined, shallow copy

// shallow cloning -
// const obj =

class App extends React.Component {
  constructor(props) {
    super(props); // instantiate the parent class constructor method.
    console.log("In constructor");
    this.state = {
      name: "",
      data: "",
      learnerName: "Sumit",
    };
    this.handleCallback = this.handleCallback.bind(this);
  }
  handleChange(e) {
    console.log(this);
    this.setState({
      name: e.currentTarget.value,
    });
  }
  static getDerivedStateFromProps(props, state) {
    console.log("In getDerivedStateFromProps", props, state);
  }

  componentDidMount() {
    console.log("In componentDidMount");
  }
  shouldComponentUpdate(props, state) {
    console.log("In should component update", props, state);
    return false;
  }
  componentWillMount() {
    console.log("In componentWillMount");
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log("In getSnapshotBeforeUpdate", props, state);
  }
  componentDidUpdate(props, state) {
    console.log("In componentDidUpdate", props, state);
  }
  handleCallback(data) {
    const response = data.split(",");
    this.setState({ data: response[0] }); // where we are getting the callback data
    this.setState({ learnerName: response[1] });
  }
  componentWillUnmount() {
    console.log("In componentWillUnmount");
  }
  render() {
    // mandatory method
    console.log("In render");
    const { name, data, learnerName } = this.state;
    return (
      <React.Fragment>
        <h1>
          Welcome to the geeksforgeeks fullstack course {data} {learnerName}
        </h1>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <Homepage learnerName={name} cb={this.handleCallback} />
        <Homepage learnerName={name} cb={this.handleCallback} />
        <Homepage learnerName={name} cb={this.handleCallback} />
        <Homepage learnerName={name} cb={this.handleCallback} />
        <a href="http://www.google.com">Click me</a>
        <Test />
        <Demo />
        <Component />
      </React.Fragment>
    );
  }
}

export default App;

// function a(x,y){
//   x= 14;
//   y=15
// }
// x=10;
// y=12;
// a(x,y)

// Mounting
// Update
// Unmount

// Mounting - UNSAFE_componentWillMount - (static getDerivedStateFromProps), constructor, render, componentDidMount
// Update - getDerivedStateFromProps - ComponentWillReceiveProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate,
// Unmount Destroy - componentWillUnmount();

// Update phase - componentWilUpdate, ComponentWillReceiveProps
