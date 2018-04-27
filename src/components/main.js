import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SongList from './song-list';
import Player from './player';
import '../static/css/main.css';

class Main extends Component {
    render () {
        return (
            <div className="main">
                <Route exact path="/" component={Player} />
                <Route path="/song-list" component={SongList} />
            </div>
        );
    }
}

export default Main;