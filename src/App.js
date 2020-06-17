import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IssuesList from './components/IssuesList';
import IssueDetail from './components/IssueDetail';
// import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={IssuesList} />
          <Route exact path="/issue/:issueNumber" component={IssueDetail} />
          {/* <Route exact path="/users" component={Users} /> */}
          <Route>
            <h1>ERROR 404 - Page is not found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;