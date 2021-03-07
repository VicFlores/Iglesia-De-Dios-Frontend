import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginUser from '../components/LoginUser/LoginUser';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Request from '../pages/Request';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginUser} />
          <Route exact path='/request' component={Request} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
