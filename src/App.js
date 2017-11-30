import React, { Component } from 'react';
import './App.css';


const element = (
  <div>
    <h1>Hello, Zak!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <h1 className="align-center margin-xl">{element}</h1>
    );
  }
}

export default App;
