import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {configureStore} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './app.css';

import Auth from '../components/log.in';
import ProjectRequest from '../components/project.request';
import Home from '../components/home';
import ProjectRequestDetail from '../components/project.request.detail'
import AuthRoute from '../components/auth/auth.route';
import Terms from '../components/terms';
import Student from '../components/student'; 
import Projects from '../components/company/active.projects';
const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Route exact path= "/login"  component={Auth} /> 
          <Route path = "/test" component={Projects} />
          <AuthRoute exact path="/" component={[Home, Student]} />
          <Route path = "/project-request" component={ProjectRequest} />
          <Route path = "/project-request-detail" component={ProjectRequestDetail} />
          <Route path = "/terms" component={Terms} />
          {/* <Route path = "/project-request-approval" component={ProjectRequestApproval} /> */}
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
