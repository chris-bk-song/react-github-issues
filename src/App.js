import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IssuesList from './components/IssuesList';
import IssueDetail from './components/IssueDetail.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={IssuesList} />
          <Route exact path="/issue/:issueNumber" component={IssueDetail} />
          <Route>
            <h1>Error! 404 - Not Found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;