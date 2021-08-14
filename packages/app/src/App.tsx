import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { NavBar } from './components';
import { NotFoundPage, HomePage, SlotsPage } from './pages';
import InstantsPage from './pages/InstantsPage';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/slots" component={SlotsPage} exact />
            <Route path="/instants" component={InstantsPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  </Router>
);

export default App;
