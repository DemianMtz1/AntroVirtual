import React from "react";
import Bar from "./components/Bar";
import BackgroundEffects from "./components/BackgroundEffects";
import MusicPlayer from "./components/MusicPlayer";
import './styles/App.css'

function App() {
  return (
    <div className='disco-container'>
      <div>
      <Bar />
        <div className="disco-content">
          <div className='disco-playlist'>
            
            <MusicPlayer
              playlist="https://open.spotify.com/embed/playlist/0B95fPMM2fetTJDE2AoSlL"
              djIg="https://www.instagram.com/angelvalle_/?hl=es-la"
              djName="Djcucaracha"
            />
          </div>
          <div className="disco-img">
          <iframe src="https://giphy.com/embed/jIRgYs2eJgM0M" width="326" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="disco-effects">
            <BackgroundEffects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


