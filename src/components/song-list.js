import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../static/css/song-list.css';

class SongList extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h2>我的歌单</h2>
                <ul className="list">
                    <li>
                        <Link to={{
                            pathname: '/',
                            query:{
                                type: 'SONG_URL',
                                id: 0,
                                name: '等一分钟',
                                songer: '徐誉滕',
                                url: 'http://up.mcyt.net/?down/46453.mp3'
                            }
                        }}>等一分钟</Link>--徐誉滕
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/',
                            query:{
                                type: 'SONG_URL',
                                id: 1,
                                name: '匹夫',
                                songer: '黄晓明',
                                url: 'http://up.mcyt.net/?down/46453.mp3'
                            }
                        }}>匹夫</Link>--黄晓明
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/',
                            query:{
                                type: 'SONG_URL',
                                id: 2,
                                name: '离人愁',
                                songer: '李袁杰',
                                url: 'http://up.mcyt.net/?down/46300.mp3'
                            }
                        }}>离人愁</Link>--李袁杰
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/',
                            query:{
                                type: 'SONG_URL',
                                id: 3,
                                name: '醉赤壁',
                                songer: '林俊杰',
                                url: 'http://up.mcyt.net/?down/46419.mp3'
                            }
                        }}>醉赤壁</Link>--林俊杰
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/',
                            query:{
                                type: 'SONG_URL',
                                id: 4,
                                name: '任然',
                                songer: '任然',
                                url: 'http://up.mcyt.net/?down/45959.mp3'
                            }
                        }}>任然</Link>--任然
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/',
                            query:{
                                type: 'SONG_URL',
                                id: 5,
                                name: '怎么会狠心伤害我',
                                songer: '郑源',
                                url: 'http://up.mcyt.net/?down/46415.mp3'
                            }
                        }}>怎么会狠心伤害我</Link>--郑源
                    </li>
                </ul>
            </div>
        );
    }
}

export default SongList;