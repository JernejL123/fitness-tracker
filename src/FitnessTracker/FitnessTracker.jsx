import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './FitnessTracker.css';
import img1 from './images/carabiner.svg';

function FitnessTracker() {
    const [sport, setSport] = useState("NONE⛔");
    const [weight, setWeight] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState('0.00');

    const option = [
        { label: 'Running🏃' },
        { label: 'Skiing⛷️' },
        { label: 'Bouldering🪨' },
        { label: 'Swimming🏊' },
        { label: 'Football⚽'},
        { label: 'Cycling🚴'}
    ];

    function handleWeightchange(event) {
        setWeight(event.target.value);
    }

    function handleTimechange(event) {
        setTime(event.target.value);
    }

    const calculateCalories = (event) => {
        event.preventDefault();

        const METvalues = {
            "Bouldering🪨": 5,
            "Running🏃": 9.8,
            "Skiing⛷️": 6.8,
            "Swimming🏊": 8,
            'Football⚽': 10.3,
            'Cycling🚴': 6
        };

        const calorieRate = METvalues[sport];

        if (calorieRate) {
            const burnedCalories = calorieRate * weight * (time / 60);
            setCalories(burnedCalories.toFixed(2));
        } else {
            setCalories("0.00");
        }
    };


    const handleReset = () => {
        setSport("NONE⛔");
        setTime("");
        setWeight("");
        setCalories(0.00);
    }

    return (
        <div className="main-app">
            <div className="left-menu">
                <DropDownMenu title={'Sports'} options={option}
                    selectedSport={sport} onSportSelect={setSport} />

                <div className="image-container">
                    <img src={img1} alt="image not found :(" width="500" height="250" />
                </div>
            </div>

            <div className="right-content">
                <form className="selection-bar" onSubmit={calculateCalories}>
                    <p>Selected sport: {sport}</p>
                    <br />
                    <label>
                        Weight: <input name="WeightInput" placeholder="your weight (kg)..." onChange={handleWeightchange} value={weight} />
                    </label>
                    <br />
                    <label>
                        Time: <input name="TimeInput" placeholder="time spent (min)..." type="number" onChange={handleTimechange} value={time} />
                    </label>
                    <br />
                    <p>CALORIES BURNED: {calories} kcal</p>
                    <input className="submit-button" type="submit" value='calculate' />
                    <button className="reset-button" onClick={handleReset}>RESET</button>
                </form>
            </div>
        </div>
    );
}

export default FitnessTracker;
