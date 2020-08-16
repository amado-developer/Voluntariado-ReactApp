import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Auth from '../components/auth';
import ProjectRequest from '../components/projectRequest';
import ProjectRequestApproval from '../components/ProjectRequestApproval';
const App = () => (
  <BrowserRouter>
    <div>
      <Route path= "/" exact component={Auth} />
      <Route path = "/project-request" component={ProjectRequest} />
      <Route path = "/project-request-approval" component={ProjectRequestApproval} />
    </div>
  </BrowserRouter>
);

export default App;
