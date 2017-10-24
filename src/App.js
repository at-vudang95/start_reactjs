import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import InputName from "./Input";
import ReactDOM from 'react-dom';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
  );
  return (
      <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
class App extends Component {
  name = '';
  constructor(props){
    super(props);
    this.name = 'Hello';
    this.getName = this.getName.bind(this);
  }
  getName = (e) => {
    this.name = e;
    this.setState({});
  }
  mount() {
    ReactDOM.render(<Hello name={this.name} text="ello"></Hello>, document.getElementById('hello'))
  }
  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('hello'));
  }
  render() {
    console.log('Render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.mount.bind(this)}>Amount</button>
        <button onClick={this.unMount.bind(this)}>Unmount</button>
        <div id="hello"></div>
        <p className="App-intro">
          <InputName sendName={this.getName}></InputName>
        </p>
        <NumberList numbers={numbers} />,
      </div>
    );
  }
}

export default App;
