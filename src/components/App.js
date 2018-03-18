import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScreenDisplay from './atoms/screen-display';
import ButtonsSection from './molecules/buttons-section';
import '../css/App.css';

class App extends Component {
  render() {

    const updateScreenDisplay = () => {
      const element = (
        <ScreenDisplay
          display={sessionStorage.getItem('display')} />
      );

      ReactDOM.render(element, document.getElementById('screen-displayer'));
    }
    setInterval(updateScreenDisplay, 100);

    return (
      <div
        className="App">

        <header
          className="App-header">
          Guillaume's Simple Pin Pad
        </header>

        <div>
          <div
            id="screen-displayer" />

          <ButtonsSection />
        </div>

      </div>
    );
  }
}

export default App;
