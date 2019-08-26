import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlPanel from './components/ControlPanel';
import APage from './components/APage';
import BPage from './components/BPage';
import CPage from './components/CPage';

function App() {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <APage></APage>
      <BPage></BPage>
      <CPage></CPage>
    </div>
  );
}

export default App;
