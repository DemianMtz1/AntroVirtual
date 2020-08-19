import React from 'react';
import Effect from './Effect'


// Consume la api rest
const Bar = () => {

    return (
        <div>
            <h3 >Background effects</h3>
            <div className="">

                <Effect title="Bartender working" sound="http://streaming.tdiradio.com:8000/house.mp3"/>
                <Effect title="People talking" sound="http://streaming.tdiradio.com:8000/house.mp3" />
                <Effect title="Full room" sound="http://streaming.tdiradio.com:8000/house.mp3" />
                <Effect title="Rain on window" sound="http://streaming.tdiradio.com:8000/house.mp3" />
                <Effect title="Night ambiance" sound="http://streaming.tdiradio.com:8000/house.mp3" />
                <Effect title="Servering drinks" sound="http://streaming.tdiradio.com:8000/house.mp3" />

            </div>
        </div>
    )
}

export default Bar;