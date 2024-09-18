import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './FitnessTracker.css';


function FitnessTracker() {

    const [sport, setSport] = useState("");

    const option = [
        { label: 'Running' },
        { label: 'Skiing' },
        { label: 'Climbing' }
    ];

    return (
        <div className="main-app">
            <DropDownMenu title={'Menu'} options={option}
                selectedSport={sport} onSportSelect={setSport} />





<img src={image} alt="img not found"/>





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
    )
}

export default FitnessTracker;