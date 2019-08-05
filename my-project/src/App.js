import React from 'react';
import logo from './logo.svg';
import Sample1 from './sample1'
import Sample2 from './sample2'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sample2></Sample2>
      <Sample2></Sample2>
      <Sample2></Sample2>
      <Sample2></Sample2>
      <Sample1 title="A1"></Sample1>
      <Sample1 title="A2"></Sample1>
      <Sample1 title="A3"></Sample1>
      <Sample1 title="A4"></Sample1>
      <Sample1 title="A5"></Sample1>
    </div>
  );
}

export default App;
