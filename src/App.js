import React from "react";
import Bar from "./components/Bar";
import BackgroundEffects from "./components/BackgroundEffects";
import MusicPlayer from "./components/MusicPlayer";
import './styles/App.css'

function App() {
  return (
    <div >
      <div>
      <Bar />
        <div className="row">
          <div className="col-sm">
            
            <MusicPlayer
              playlist="https://open.spotify.com/embed/playlist/0B95fPMM2fetTJDE2AoSlL"
              djIg="https://www.instagram.com/angelvalle_/?hl=es-la"
              djName="Djcucaracha"
            />
          </div>
          <div className="col-sm">
            <p>imagen</p>
          </div>
          <div className="col-sm">
            <BackgroundEffects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


