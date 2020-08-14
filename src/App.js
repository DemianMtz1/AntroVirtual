import React from 'react';
import Bar from './components/Bar'
import BackgroundEffects from './components/BackgroundEffects';


function App() {
  return (
    <div>
      <div className="container-fluid bg-light py-5 m-auto">
        <div className="row">

          <div className="col-sm">
            <Bar />
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
