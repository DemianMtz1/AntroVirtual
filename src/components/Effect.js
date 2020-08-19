import React, { useState } from 'react';
import { PlayCircleOutlined , PauseCircleOutlined } from '@ant-design/icons';
import '../Styles/Effects.css'


const Effect = ({title,sound}) => {

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
            ...effectPlay,
            [e.target.name]: (effectPlay.play === false) ? true : false
        })
        console.log(effectPlay,'effect play')

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
            <div className="my-2">
                <p className="my-1">
                    <label>{title}</label>
                </p>
                <div className="row justify-content-start">
                    <div className="col-">
                    </div>
                        <button className='button' name="play" onClick={onClickPlay}>{(effectPlay.play === true) ? <PlayCircleOutlined /> : <PauseCircleOutlined /> }</button>
                    <div className="col-4">
                        <input type="range" name="volume" min="0" max="1" defaultValue={effectVolume.volume} step=".10"
                            onChange={handleVolume} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Effect;