import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDisplay from './ex1/CountDisplay';
import CountReduxButton from './ex2/CountReduxButton';
import CountReduxDisplay from './ex2/CountReduxDisplay';

function App() {
  return (
    <div className="App">
      <CountReduxDisplay></CountReduxDisplay>
      <CountReduxButton></CountReduxButton>
    </div>
  );
}

export default App;
