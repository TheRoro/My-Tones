import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
import CustomPlayPause from './CustomPlayPause';

const {
  CurrentTime,
  SeekBar,
  Duration,
} = controls

class MediaPlayer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Media>
          <div className="media">
            <Player src={this.props.music} className="media-player" />
            <div className="media-controls">
              <div className="row justify-content-center">
                <div className="col-6 col-sm-2 order-2 order-sm-1">
                  <CurrentTime/>
                </div>
                <div className="col-auto col-sm-6 order-1 order-sm-2">
                    <SeekBar/>
                </div>
                <div className="col-auto col-sm-2 order-3 order-sm-3">
                  <Duration/>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <CustomPlayPause/>
                </div>
              </div>
            </div>
          </div>
      </Media>
      </div>
    )
  }
}
export default MediaPlayer;