import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './FitnessTracker.css';
import img1 from './images/carabiner.svg';

function FitnessTracker() {
    const [sport, setSport] = useState("");
    const [weight, setWeight] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState("");

    const option = [
        { label: 'Running🏃' },
        { label: 'Skiing⛷️' },
        { label: 'Climbing🧗' }
    ];

    function handleWeightchange(event){
        setWeight(event.target.value);
    }

    function handleTimechange(event){
        setTime(event.target.value);
    }

    const calculateCalories = (event) => {
        event.preventDefault();
        let burnedCalories = 0;

        if(sport === "Climbing🧗"){
            burnedCalories = 5 * weight * time;
        }
        setCalories(burnedCalories);
    }

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
                    <form onSubmit={calculateCalories}>
                        <p>Selected sport: {sport}</p>
                        <br />
                        <label>
                            Weight: <input name="WeightInput" placeholder="your weight..." onChange={handleWeightchange}/>
                        </label>
                        <br />
                        <label>
                            Time: <input name="TimeInput" placeholder="time spent (min)..." type="number" onChange={handleTimechange}/>
                        </label>
                        <br />
                        <p>CALORIES BURNED: {calories}</p>
                        <input type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FitnessTracker;
