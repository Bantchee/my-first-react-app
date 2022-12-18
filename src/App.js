// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Overview } from './components/Overview.js'

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
         <Overview />
       </div>
     )
   }
}

export default App;
