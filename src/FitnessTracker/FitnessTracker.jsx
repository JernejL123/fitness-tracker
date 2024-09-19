import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './FitnessTracker.css';
import img1 from './images/carabiner.svg';

function FitnessTracker() {
    const [sport, setSport] = useState("");

    const option = [
        { label: 'Running' },
        { label: 'Skiing' },
        { label: 'Climbing' }
    ];

    return (
        <div className="main-app">
            <div className="left-menu">
                <DropDownMenu title={'Menu'} options={option}
                    selectedSport={sport} onSportSelect={setSport} />

                <div className="image-container">
                    <img src={img1} alt="image not found :(" width="500" height="250" />
                </div>
            </div>

            <div className="right-content">


                <div className="selection-bar">
                    <p>Selected sport: {sport}</p>
                    <br />
                    <label>
                        Height: <input name="HeightInput" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Weight: <input name="WeightInput" />
                    </label>
                    <br />
                    <br />
                    <p>CALORIES BURNED: </p>
                </div>
            </div>
        </div>
    );
}

export default FitnessTracker;
