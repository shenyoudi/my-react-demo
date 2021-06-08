import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import routers from './routers'
import RenderRoutes from './routers/router'
import store from '@/store'
import {Provider} from 'react-redux'
import '../mock'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <RenderRoutes routes={routers}></RenderRoutes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
