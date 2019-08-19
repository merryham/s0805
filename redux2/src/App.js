import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlPanel from './components/ControlPanel';
import APage from './components/APage';

function App() {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <APage></APage>
    </div>
  );
}

export default App;
