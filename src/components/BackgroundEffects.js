import React, { useEffect } from 'react';



// Consume la api rest
const Bar = () => {

    return (
        <div>
            <h3 >Background effects</h3>
            <form className="container form-group my-4">
                
                <div className="my-2">
                    <p className="my-1">
                        <label>Bartender working</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <p className="my-1">
                        <label>People talking</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <p className="my-1">
                        <label>Full room</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <p className="my-1">
                        <label>Rain on window</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <p className="my-1">
                        <label>Night ambiance</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <p className="my-1">
                        <label>Serving drinks</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <p className="my-1">
                        <label>Street ambience</label>
                    </p>
                    <div className="row justify-content-start">
                        <div className="col-">
                            <button>Play</button>
                        </div>
                        <div className="col-4">
                            <input type="range"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Bar;