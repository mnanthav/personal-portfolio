//=========================================================================
// File: .../src/App.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavBar';
import routes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div>
          <Routes>
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/