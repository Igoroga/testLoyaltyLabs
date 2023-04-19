import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={}>
      <BrowserRouter>
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;