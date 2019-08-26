import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextDisplayer from './components/TextDisplayer';
import TextChangeButton from './components/TextChangeButton';

function App() {
  return (
    <div className="App">
      <TextDisplayer></TextDisplayer>
      <TextChangeButton></TextChangeButton>
    </div>
  );
}

export default App;
