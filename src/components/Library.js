import React from "react";
import LibrarySong from "./LibrarySong"

const Library = ({songs, setCurrentSong, audioRef, isPlaying,setSongs, LibraryStatus}) => {
    return(
        <div className={`library ${LibraryStatus ? 'active-library' : "" }`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                    setSongs={setSongs}
                    song= {song} 
                    setCurrentSong={setCurrentSong}
                    songs={songs}
                    id={song.id}
                    key={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}

                    />))}
            </div>
        </div>
    )
}

export default Library;