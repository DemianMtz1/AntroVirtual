import React from "react";
import '../styles/MusicPlayer.css';


const MusicPlayer = ({playlist,djIg,djName}) => {
  return (
    <div>
      <div className='playlist-about'>
      <h1>Playlist by <br/><a href={djIg}>{djName}</a></h1>
      </div>
      <div className='playlist'>
      <iframe
        className='playlist'
        src={playlist}
        width="250"
        height="350"
        frameBorder='0'
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      </div>
      
    </div>
  );
};

export default MusicPlayer;
