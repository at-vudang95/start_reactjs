import React, { Component } from 'react'
import './App.css';

class Hello extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
        <h1>{this.props.name}</h1>
    );
  }
}
Hello.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
  }
}
export default Hello;
