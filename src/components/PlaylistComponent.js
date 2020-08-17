import React from 'react';
import Song from './SongComponent';

function RenderPlaylist ({music, title, description}) {
    return (
        <Song music={music} title={title} description={description} />
    );
}

const Playlist = (props) => {

    const playlist = props.songs.map((song) => {
        return (
            <div key={song.id}>
                <RenderPlaylist music={song.song} 
                title={song.title} description={song.description}/>
            </div>
        );
    });

    return(
        <div>
            {playlist}
        </div>
    );
}

export default Playlist;