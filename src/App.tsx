import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routers, {getRouters} from './routers'
import RouteHOC from './components/router'
import '../mock'
import './App.css';
import Page404 from './views/404'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import PageList from './views/PageList/PageList'


function App() {
  const getRoute = () => routers.map(({name, path, component, ...args}) => {
    if (name === 'login' || name === '404' || name === 'home' || name==='page-list') {
      return <Route key={path} exact {...args} path={path} component={component}></Route>
    }
  })
  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/page-list" component={PageList}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/404" component={Page404}></Route>
          {/* <RouteHOC routerConfig={getRouters()}></RouteHOC> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
