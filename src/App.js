import React from 'react';
import './App.css';
import TestBlock from '../src/testblock/TestBlock';

function App() {
  return (
    <div className="App">
      <h1 className='site-title'>Austin's Library Site</h1>
      <div className='grid-container'>
        <TestBlock title='testblock1' content='testblock1 description'/>
        <TestBlock title='testblock2' content='testblock2 description'/>
        <TestBlock title='testblock3' content='testblock3 description'/>
        <TestBlock title='testblock4' content='testblock4 description'/>
        <TestBlock title='testblock5' content='testblock5 description'/>
        <TestBlock title='testblock6' content='testblock6 description'/>
        <TestBlock title='testblock7' content='testblock7 description'/>
        <TestBlock title='testblock8' content='testblock8 description'/>
        <TestBlock title='testblock9' content='testblock9 description'/>
      </div>
    </div>
  );
}

export default App;
