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
              playlist="https://open.spotify.com/embed/artist/4PwlsrN0t5mLN0C827cbEU"
              djIg="https://www.instagram.com/angelvalle_/?hl=es-la"
              djName="L'Impératrice"
            />
          </div>
          <div className="disco-img">
          <iframe src="https://giphy.com/embed/l3q2xK6E4Ost3fWFi" width="300" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
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


