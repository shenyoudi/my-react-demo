import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routers from './routers'
import RenderRoutes from './routers/router'
import '../mock'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <RenderRoutes routes={routers}></RenderRoutes>
      </div>
    </Router>
  );
}

export default App;
