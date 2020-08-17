import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { media } = this.props
    return (
        <a className="btn playBtn" onClick={this._handlePlayPause}>
            {media.isPlaying ? 
            <i className="fas fa-pause 2x"></i> : 
            <i className="fas fa-play 2x"></i>}
        </a>
    )
  }
}

export default withMediaProps(CustomPlayPause);