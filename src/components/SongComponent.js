import React, { Component } from 'react';
import MediaPlayer from './MediaPlayer';

class Song extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="container songCard mt-4">
            <div className="row justify-content-center">
                <div className="col-auto pt-2">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>{this.props.description}</p>
                </div>
            </div>
            <div className="row justify-content-center pb-2">
                <div className="col-auto">
                    <MediaPlayer music={this.props.music}/>
                </div>
            </div>
        </div>
        );
    }
}

export default Song;