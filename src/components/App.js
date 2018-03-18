import React, { Component } from 'react';
import pinLogic from '../services/pin-logic';
import ButtonsSection from './molecules/buttons-section';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div
        className="App">

        <header
          className="App-header">
          Guillaume's Simple Pin Pad
        </header>

        <div>
          <div>
            Screen display
          </div>
          <ButtonsSection />
        </div>

      </div>
    );
  }
}

export default App;
