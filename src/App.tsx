import React from 'react';
import {NavLink, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routers from './routers'
import RouteHOC from './components/router'
import '../mock'
import './App.css';


function App() {
  const getRoute = () => routers.map(({path, component, ...args}) => {
    if (path === '/login' || path === '/404') {
      return <Route key={path} exact {...args} path={path} component={component}></Route>
    }
  })
  

  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/page1'>Page1</NavLink>
        </div>
        <div className="Section">
          <Switch>
            {getRoute()}
            <RouteHOC routerConfig={routers}></RouteHOC>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
