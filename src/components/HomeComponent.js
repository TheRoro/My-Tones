import React, { Component } from 'react';
import { SONGS } from '../shared/songs';
import Playlist from './PlaylistComponent';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: SONGS
        }
    }
    render() {
        return(
            <div className="container home">
                <div className="row justify-content-center">
                    <div className="col-auto mt-4">
                        <h1>My Tones</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto mt-4">
                        <p>A webpage of random music</p>
                    </div>
                </div>
                <Playlist songs={this.state.songs}/>
            </div>
        );
    }
}

export default Home;