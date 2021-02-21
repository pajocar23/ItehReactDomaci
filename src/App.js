import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>

        </PageWrapper>
      </Router>
    );
  }

}

export default App;
