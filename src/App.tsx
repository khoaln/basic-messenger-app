import React from 'react';
import './App.css';
import Layout from './components/Layout';
import CurrentUserContext from './contexts/CurrentUserContext';

function App(): JSX.Element {
  return (
    <CurrentUserContext.Provider value={{ id: 1 }}>
      <div className="App">
        <h3>Basic Messenger App</h3>
        <Layout />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
