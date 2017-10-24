import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {increasing: false}
  }
  update() {
    ReactDOM.render(<App val={this.props.val + 1}/>,document.getElementById('root'));
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    return nextProps.val % 5 == 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }
  render() {
    console.log(this.state.increasing);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.update.bind(this)}>
          {this.props.val}
        </button>
      </div>
    );
  }
}
App.defaultProps = {val: 0}
export default App;
