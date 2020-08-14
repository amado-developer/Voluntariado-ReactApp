import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Auth from '../components/auth';
import ProjectRequest from '../components/projectRequest';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path= "/" exact component={Auth} />
      <Route path = "/project-request" component={ProjectRequest} />
    </div>
  </BrowserRouter>
);

export default App;
