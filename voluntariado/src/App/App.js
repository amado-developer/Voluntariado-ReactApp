import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {configureStore} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Auth from '../components/log.in';
// import Test from '../components/test';
import ProjectRequest from '../components/project.request';
// import ProjectRequestApproval from '../components/project.request.approval';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Route path= "/login" exact component={Auth} />
          <Route path = "/project-request" component={ProjectRequest} />
          {/* <Route path = "/project-request-approval" component={ProjectRequestApproval} /> */}
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
