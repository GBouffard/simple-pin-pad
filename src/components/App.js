import React, { Component } from 'react';
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
          <button>
            1
          </button>
          <button>
            2
          </button>
          <button>
            3
          </button>
          <button>
            4
          </button>
          <button>
            5
          </button>
          <button>
            6
          </button>
          <button>
            7
          </button>
          <button>
            8
          </button>
          <button>
            9
          </button>
          <button>
            0
          </button>
        </section>
      </div>
      </div>
    );
  }
}

export default App;
