import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../static/css/player.css';

const song_list = [
    {
        id: 0,
        name: '等一分钟',
        songer: '徐誉滕',
        link: 'http://up.mcyt.net/?down/46411.mp3',
        img: require('../static/img/20170828155323590.jpg')
    },
    {
        id: 1,
        name: '匹夫',
        songer: '黄晓明',
        link: 'http://up.mcyt.net/?down/46453.mp3',
        img: require('../static/img/20150831143542916397.jpg')
    },
    {
        id: 2,
        name: '离人愁',
        songer: '李袁杰',
        link: 'http://up.mcyt.net/?down/46300.mp3',
        img: require('../static/img/20180416103443680061.jpg')
    },
    {
        id: 3,
        name: '醉赤壁',
        songer: '林俊杰',
        link: 'http://up.mcyt.net/?down/46419.mp3',
        img: require('../static/img/20150718065653668323.jpg')
    },
    {
        id: 4,
        name: '空空如也',
        songer: '任然',
        link: 'http://up.mcyt.net/?down/45959.mp3',
        img: require('../static/img/20171214123018566357.jpg')
    },
    {
        id: 5,
        name: '怎么会狠心伤害我',
        songer: '郑源',
        link: 'http://up.mcyt.net/?down/46415.mp3',
        img: require('../static/img/T002R300x300M000003VnpNe4aLEqO.jpg')
    }
]

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            barLeft: '-5',
            current: 0,
            barState: true
        }
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleCount = this.handleCount.bind(this);
    }

    componentDidMount () {
        const data = this.props.location.query;
        let song_url;
        if (data && data.url && data.type == 'SONG_URL') {
            this.refs.audio.src = data.url;
            this.setState((prevState) => {
                return {
                    isPlay: true,
                    barState: true,
                    current: data.id
                }
            });
        }
    }

    handleClickPrev () {
        const audio = this.refs.audio;
        this.setState((prevState) => {
            return {
                isPlay: true,
                barLeft: '-5',
                current: this.state.current <= 0 ? (song_list.length - 1) : (prevState.current - 1),
                barState: true
            }
        });
    }

    handleClickNext () {
        clearInterval(this.timer);
        const audio = this.refs.audio;
        this.setState((prevState) => {
            return {
                isPlay: true,
                barLeft: '-5',
                current: this.state.current >= (song_list.length-1) ? 0 : (prevState.current + 1),
                barState: true
            }
        });
    }

    handleCount () {
        this.timer = setInterval(() => {
            const audio = this.refs.audio;
            if (this.state.isPlay) {
                const current_length = audio.currentTime; // 音频当前长度
                let length = audio.duration; // 音频长度
                var proportion = current_length/length;
                if (!proportion) {
                    proportion = 0;
                }
                this.setState({barLeft: (this.refs.progress.clientWidth - 5) * proportion,barState:false});
            }
        },500);
    }

    handleClickPlay (e) {
        this.setState((prevState) => {
            return {
                isPlay: !this.state.isPlay,
                barState: true
            }
        });
    }

    componentDidUpdate () {
        if (!this.state.barState) {
            return false;
        }
        const audio = this.refs.audio;
        this.state.isPlay ? (() => {audio.play();})() : (() => {audio.pause();clearInterval(this.timer);})();
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        return (
            <div>
                <h2>音乐播放器(暂不支持快进快退)</h2>
                <div className="player">
                    <audio ref="audio" src={song_list[this.state.current].link} onPlay={this.handleCount} onEnded={this.handleClickNext}></audio>
                    <h3 className="song_name">{song_list[this.state.current].name}<span className="songer_name">--{song_list[this.state.current].songer}</span></h3>
                    <div className="progress" ref="progress">
                        <div className="played" style={{width: this.state.barLeft + 5}}></div>
                        <span className="bar" style={{left: this.state.barLeft}}></span>
                    </div>
                    <div className="img" onClick={this.handleClickImg}>
                        <img className={this.state.isPlay ? "rotate" : "rotate pause"} src={song_list[this.state.current].img} onClick={this.handleClickPlay}/>
                    </div>

                    <div className="control">   
                        <div className="buttons">  
                            <a className="palyer_btn prev_bg" onClick={this.handleClickPrev}></a>  
                            <a className={this.state.isPlay ? "palyer_btn pause_bg" : "palyer_btn play_bg"} onClick={this.handleClickPlay}></a>  
                            <a className="palyer_btn next_bg" onClick={this.handleClickNext}></a>  
                        </div>  
                    </div>  
                </div>
            </div>
        );
    }
}

export default SongList;