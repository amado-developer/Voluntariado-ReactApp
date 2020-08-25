import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {configureStore} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Auth from '../components/auth';
// import Test from '../components/test';
import ProjectRequest from '../components/projectRequest';
import ProjectRequestApproval from '../components/ProjectRequestApproval';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Route path= "/" exact component={Auth} />
          {/* <Route path= "/" exact component={Test} /> */}
          <Route path = "/project-request" component={ProjectRequest} />
          <Route path = "/project-request-approval" component={ProjectRequestApproval} />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
