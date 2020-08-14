import React from "react";

const MusicPlayer = () => {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/playlist/2dAzhiFI3rcLJ87dcyIQmx"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
