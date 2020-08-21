import React, { useState } from 'react';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import '../styles/Effects.css'



const Effect = ({ title, sound }) => {

    const [effectVolume, setEffectVolume] = useState({ volume: ".5" });
    const [effectPlay, setEffectPlay] = useState({ play: true });
    const [audio, setAudio] = useState(new Audio(sound));

    const handleVolume = (e) => {
        setEffectVolume({
            ...effectVolume,
            [e.target.name]: e.target.value
        })
        console.log(effectVolume);
        audio.volume = effectVolume.volume;
    }

    const onClickPlay = (e) => {
        setEffectPlay({
            [e.target.name]: (effectPlay.play === false) ? true : false
        })
        console.log(effectPlay, 'effect play')

        if (effectPlay.play === true) {
            console.log('play');
            audio.play();
        } else {
            console.log("pause");
            audio.pause();
        }
    }



    return (
        <div>
            <p>
                <label>{title}</label>
            </p>
            <div className="container-effects">
                <button id='btn-play' className={(effectPlay.play === true) ? 'fas fa-play' : 'fas fa-pause'} name="play" onClick={onClickPlay}></button>
                <div className="container-range">
                    <input className="input-range" type="range" name="volume" min="0" max="1" defaultValue={effectVolume.volume} step=".01"
                        onChange={handleVolume} />
                </div>
            </div>


        </div>
    );
}

export default Effect;