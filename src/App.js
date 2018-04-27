import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import PageRouter from './router/router';

// import Element from './components/element';
// import Clock from './components/clock';
// import Welcome from './components/component-test';
// import Toggle from './components/toggle';
// import Greeting from './components/greet';
// import NameForm from './components/nameform';
// import FlavorForm from './components/flavorform';
// import FileInput from './components/fileinput';
// import Calculator from './components/temperatureInput';
// import FancyBorder from './components/demo';
// import CustomTextInput from './components/customtextinput';
import Header from './components/header';
import Main from './components/main';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const styles = {
  list:{
    listStyle:'none',
    padding:'0 0 20px 0',
    margin:'0 0 20px 0',
    borderBottom:'1px solid #ddd'
  },
  list_item: {
    display:'inline-block',
    margin:10
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul style={styles.list}>
              <li style={styles.list_item}>
                <Link to="/">Calculator</Link>
              </li>
              <li style={styles.list_item}>
                <Link to="/FancyBorder">FancyBorder</Link>
              </li>
              <li style={styles.list_item}>
                <Link to="/CustomTextInput/6">CustomTextInput</Link>
              </li>
              <li style={styles.list_item}>
                <Link to="/FileInput">FileInput</Link>
              </li>
            </ul>
            <Route exact path="/" component={Calculator} />
            <Route exact path="/FancyBorder" component={FancyBorder} />
            <Route path="/CustomTextInput/:number" render={(props) => (<h1>this is {props.match.params.number}</h1>)} />
            <Route path="/FileInput" component={FileInput} />
          </div>
        </Router> */}
        {/* <Element user={{
            firstNmae: 'Header',
            lastName: 'Perez'
        }} />
        <Clock />
        <Welcome name="郑智刚" />
        <Toggle />
        <Greeting isLoggedIn="true" />
        <NameForm />
        <FlavorForm />
        <FileInput /> */}
        {/* <PageRouter data={page_data}/> */}
        <Router history={history}>
          <div>
            <Header />
            <Main />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
