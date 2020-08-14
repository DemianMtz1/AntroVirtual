import React from 'react';
import Bar from './components/Bar'
import BackgroundEffects from './components/BackgroundEffects';
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div>
      <div className="container-fluid bg-light py-5 m-auto">
        <div className="row">

          <div className="col-sm">
            <Bar />
            <MusicPlayer/>
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
