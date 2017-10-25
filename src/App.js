import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const HOC = (InnerComponent) => class extends Component {
  constructor() {
    super();
    this.state = {count: 0}
  }
  update() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
        <InnerComponent
            {...this.props}
            {...this.state}
            update={this.update.bind(this)}
        />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Button>button</Button>
          <br/>
          <LabelHOC>label</LabelHOC>
        </div>
      </div>
    );
  }
}
const Button = HOC((props) => <button onClick={props.update}>{props.children}- {props.count}</button>)
class Label extends Component {
  render() {
    return (
        <label>{this.props.children}</label>
    )
  }
}
const LabelHOC = HOC(Label);
export default App;
