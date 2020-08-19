import React from 'react';
import Background from '../assets/backgroundVideo/BackgroundVideo.mp4'





const Bar = () => {

    return (
        <div>
            <div className="col-sm">
                <h1>Antro Digital by <a href="https://www.instagram.com/cripsregios/?hl=es-la">CripsRegios</a></h1>

            </div>

                <video
                className='BackgroundVideo'
                autoPlay
                loop
                muted
                style={{
                    position:'absolute',
                    width:'100%',
                    left:'50%',
                    top:'50%',
                    height:'100%',
                    objectFit:'cover',
                    transform: 'translate(-50%,-50%)',
                    zIndex:-1,
                }}
                
                > 

                    <source src={Background} type='video/mp4'/>
                </video>
           
        </div>
    )
}

export default Bar;