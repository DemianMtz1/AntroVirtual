import React, {useEffect} from 'react';
import BackgroundEffects from './BackgroundEffects';


// Consume la api rest
const Bar = () =>{

    return(
        <div>
            <p>Hola desde el bar</p>
            <BackgroundEffects />
        </div>
    )
}

export default Bar;