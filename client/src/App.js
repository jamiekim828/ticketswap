import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Alert from './components/Alert';
import Events from './components/Events';
import EventDetail from './components/EventDetail';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/events/:id' component={EventDetail} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
