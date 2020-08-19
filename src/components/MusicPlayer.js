import React from "react";

const MusicPlayer = ({playlist,djIg,djName}) => {
  return (
    <div>
      <h1>Playlist by <a href={djIg}>{djName}</a></h1>
      <iframe
        src={playlist}
        width="300"
        height="380"
        frameBorder='0'
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
