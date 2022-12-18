import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { MyComponent } from './components/MyComponent.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

   render() {
     return (
       <div>
         <MyComponent title="React" onButtonClicked={this.countUp} />
         <p>{this.state.count}</p>
       </div>
     )
   }
}

export default App;
