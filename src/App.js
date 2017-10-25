import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {items: []}
  }
  componentWillMount() {
    fetch('/data.json').then(res => res.json())
        .then( ({results: items}) => {
              this.setState({items})
        }
        );

  }
  filter(e) {
    this.setState({filter: e.target.value})
  }
  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter( item => item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <div>
         <input type="text" onChange={this.filter.bind(this)}/>
         {items.map(item =>
               <List key={item.name} name={item.name}></List>
         )}
       </div>
      </div>
    );
  }
}
const List = (props) =>
  <h4>{props.name}</h4>;

export default App;
