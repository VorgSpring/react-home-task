import React, { Component as ReactComponent } from 'react'
import video from './Video.mp4'
import './VideoPlayer.css'

class VideoPlayer extends ReactComponent {
    static displayName = 'VideoPlayer'

    play = () => {
        this.player.play()
    }

    stop = () => {
        this.player.pause()
    }

    render() {
        return (
            <div className="video-player">
                <video ref={elem => this.player = elem} className="video-player__source">
                    <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                </video>
                <div>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.stop}>Stop</button>
                </div>
            </div>
        )
    }
}

export default VideoPlayer