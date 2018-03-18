import React, { Component } from 'react';
import ScreenDisplay from './atoms/screen-display';
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
          <ScreenDisplay
            display="Screen display" />
          <ButtonsSection />
        </div>

      </div>
    );
  }
}

export default App;
