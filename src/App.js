import React from 'react';
import AddEntry from './components/AddEntry';
import EntryList from './components/EntryList';
import './App.css';

const App = () => (
  <div>
    <h1>Internship Documentation</h1>
    <AddEntry />
    <EntryList />
  </div>
);

export default App;
