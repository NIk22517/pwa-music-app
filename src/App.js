import React,{useState, useRef} from "react";

//Import styles

import './styles/app.scss';

//Adding components

import Song from "./components/song";
import Player from "./components/player";
import Library from "./components/Library";
import Nav from "./components/nav";

//import data file

import data from "./data";

function App(){
      //Ref
      const audioRef = useRef(null);

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,                
        animationPercentage: 0,         
    });
  const [LibraryStatus, SetLibraryStatus] = useState(false);

    //Event Handler
    const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        //calculate Percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);
        setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation});
    };

    const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await  setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if(isPlaying) audioRef.current.play();
    }
  
  return(
    <div className={`App ${LibraryStatus ? 'library-active' : ""}`}>
    <Nav
    LibraryStatus={LibraryStatus}
    SetLibraryStatus={SetLibraryStatus} 

    />
      <Song currentSong={currentSong} />
      <Player 
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      songs={songs}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      audioRef={audioRef}
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying} 
      currentSong={currentSong} 

      />
      <Library
      LibraryStatus={LibraryStatus} 
      setSongs={setSongs}
      isPlaying={isPlaying}
      audioRef={audioRef}
      songs={songs} 
        setCurrentSong={setCurrentSong}
      />
       <audio 
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler} 
            ref={audioRef} 
            src={currentSong.audio}
            onEnded={songEndHandler}
            >
            </audio>
    </div>
  )
}
export default App;