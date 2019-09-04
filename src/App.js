import React, { Component } from "react";

import VC from './VictoryChart'
import VP from './VictoryPie'

import './App.css';

class App extends Component {
  
    render() {
        return (
            <div className="App">
                <VC />
                <VP />
            </div>
        );
    }
}

export default App;
