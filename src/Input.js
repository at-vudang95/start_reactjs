import React, { Component } from 'react'
import './App.css';

class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = ({name: ''});
    this.sendName = this.sendName.bind(this);
  }
  sendName = (e) => {
    e.preventDefault();
    this.state.name = e.target.value;
    this.props.sendName(this.state.name);
  }
  render() {
    return (
       <input type="text" name="name" onChange={this.sendName}/>
    );
  }
}

export default InputName;
