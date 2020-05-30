import React from 'react';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import history from './services/history'
import store from './store'

import Header from './components/Header'
import Routes from './routes'
import Auth from './components/Auth'

import './global.css'
function App() {
  return (
    <Provider store={store}>
      <Auth>
        <Router history={history}>
          <Header />
          <Routes />
        </Router>
      </Auth>
    </Provider>
  );
}

export default App;
