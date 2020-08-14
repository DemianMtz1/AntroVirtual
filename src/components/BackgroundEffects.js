import React, { useEffect, useState } from 'react';
import Effect from './Effect'


// Consume la api rest
const Bar = () => {

    return (
        <div>
            <h3 >Background effects</h3>
            <div className="container form-group my-4">

                <Effect title="Bartender working" />
                <Effect title="People talking" />
                <Effect title="Full room" />
                <Effect title="Rain on window" />
                <Effect title="Night ambiance" />
                <Effect title="Servering drinks" />
                <Effect title="Street ambience" />
            </div>
        </div>
    )
}

export default Bar;