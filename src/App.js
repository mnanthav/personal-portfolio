//=========================================================================
// File: .../src/App.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import routes from './routes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
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
      </Router>
      <Footer />
    </div>

  );
}

export default App;
/*
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