import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import Calculator from '../components/temperatureInput';
import FancyBorder from '../components/demo';
import CustomTextInput from '../components/customtextinput';

class PageRouter extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const data = this.props.data;
        const list = data.map((item) => (<li key={item.toString()}><Link to={item[1]}>{item[0]}</Link></li>));
        const routers = data.map((item) => (<Route exact path={item[1]} component={item[0]}/>));

        return (
            <Router>
                <div>
                    <ul>{list}</ul>
                    <hr/>
                    <Route exact path="/" component={Calculator}/>
                    <Route path="/CustomTextInput" component={CustomTextInput}/>
                    <Route path="/FancyBorder" component={FancyBorder}/>
                </div>
            </Router>
        );
    }
}

export default PageRouter;
