import React, { Component } from 'react';
import pinLogic from '../services/pin-logic';
import Button from './atoms/button';
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
        <section>
          <Button
           text="1"
           onClick={() => { pinLogic.selectDigit(1); }} />
          <Button
           text="2"
           onClick={() => { pinLogic.selectDigit(2); }} />
          <Button
           text="3"
           onClick={() => { pinLogic.selectDigit(3); }} />
          <Button
           text="4"
           onClick={() => { pinLogic.selectDigit(4); }} />
          <Button
           text="5"
           onClick={() => { pinLogic.selectDigit(5); }} />
          <Button
           text="6"
           onClick={() => { pinLogic.selectDigit(6); }} />
          <Button
           text="7"
           onClick={() => { pinLogic.selectDigit(7); }} />
          <Button
           text="8"
           onClick={() => { pinLogic.selectDigit(8); }} />
          <Button
           text="9"
           onClick={() => { pinLogic.selectDigit(9); }} />
          <Button
           text="0"
           onClick={() => { pinLogic.selectDigit(0); }} />
        </section>
      </div>
      </div>
    );
  }
}

export default App;
