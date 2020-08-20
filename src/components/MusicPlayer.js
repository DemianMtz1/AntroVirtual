import React from "react";
import '../styles/MusicPlayer.css';


const MusicPlayer = ({playlist,djIg,djName}) => {
  return (
    <div>
      <div className='playlist-about'>
      <h1>Playlist by <a href={djIg}>{djName}</a></h1>
      </div>
      <div className='playlist'>
      <iframe
        src={playlist}
        width="300"
        height="380"
        frameBorder='0'
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      </div>
      
    </div>
  );
};

export default MusicPlayer;
