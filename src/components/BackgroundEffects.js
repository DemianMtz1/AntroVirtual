import React from 'react';
import Effect from './Effect'
import '../styles/Effects.css'
import PeopleTalking from './../assets/BackgoundEfffects/people-talking.mp3';
import Rain from './../assets/BackgoundEfffects/rainOnWindow.mp3';
import  NightAmbience from './../assets/BackgoundEfffects/N-ambience.mp3'
import BartenderWorking from './../assets/BackgoundEfffects/BartenderWorking.mp3'
import ServingDrinks from './../assets/BackgoundEfffects/ServingDrinks.mp3'

// Consume la api rest
const Bar = () => {

    return (
        <div>
            <h3 className='title-effects'>Background effects</h3>
            <div>
                <Effect title="Bartender working" sound={BartenderWorking}/>
                <Effect title="People talking" sound={PeopleTalking}/>
                <Effect title="Rain on window" sound={Rain}/>
                <Effect title="Night ambiance" sound={NightAmbience}/>
                <Effect title="Servering drinks" sound={ServingDrinks}/>

            </div>
        </div>
    )
}

export default Bar;