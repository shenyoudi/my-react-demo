import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routers from './routers'
import RouteHOC from './components/router'
import '../mock'
import './App.css';


function App() {
  const getRoute = () => routers.map(({path, component, ...args}) => {
    if (path === '/login' || path === '/404' || path === '/') {
      return <Route key={path} exact {...args} path={path} component={component}></Route>
    }
  })
  

  return (
    <Router>
      <div className="App">
        <Switch>
          {getRoute()}
          <RouteHOC routerConfig={routers}></RouteHOC>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
