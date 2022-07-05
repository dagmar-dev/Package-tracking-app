import React, { Component } from 'react';
import Form from './components/Form';
import Items from './components/Items';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Form />
            <div className="itemsArea">
                <Items />
                <Items />
                <Items />
            </div>
        </div>
    )
  }
}

export default App;
