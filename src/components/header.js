import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../static/css/header.css';

class Header extends Component {
    render () {
        return (
            <header className="header">
                <ul>
                    <li><NavLink to="/player" activeClassName="selected">播放器</NavLink></li>
                    <li><NavLink to="/song-list" activeClassName="selected">歌曲列表</NavLink></li>
                </ul>
            </header>
        );
    }
}

export default Header;