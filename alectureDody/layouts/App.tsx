import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import loadable from '@loadable/component';

// 페이지 단위로 코드 스플리팅
const Login =  loadable(() => import('@pages/Login'));
const Signup = loadable(() => import('@pages/Signup'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path='/' to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  )
}

export default App; 