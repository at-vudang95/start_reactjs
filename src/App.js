import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Buttons>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
          <button>D</button>
        </Buttons>
      </div>
    );
  }
}
class Buttons extends Component {
  constructor() {
    super();
    this.state = {selected: 'None'};
  }
  selectItem(selected){
    this.setState({selected})
  }
  render() {
    let fn = child => React.cloneElement(child, {
      onClick: this.selectItem.bind(this, child.props.children)
    })
    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>
          You have selected: {this.state.selected}
        </h2>
        {items}
      </div>
    )
  }
}
export default App;
