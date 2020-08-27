import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {configureStore} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Auth from '../components/log.in';
import ProjectRequest from '../components/project.request';
import Home from '../components/home';

import AuthRoute from '../components/auth/auth.route';
const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Route exact path= "/login"  component={Auth} /> 
          <AuthRoute exact path="/" component={[Home, ProjectRequest]} />
          <Route path = "/project-request" component={ProjectRequest} />
          {/* <Route path = "/project-request-approval" component={ProjectRequestApproval} /> */}
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
