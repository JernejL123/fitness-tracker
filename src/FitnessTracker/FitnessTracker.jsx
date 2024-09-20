import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import './FitnessTracker.css';
import img1 from './images/carabiner.svg';
import DoughnutChart from "../DoughnutChart/DoughnutChart";

function FitnessTracker() {
    const [sport, setSport] = useState("NONE⛔");
    const [weight, setWeight] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState('0.00');
    const [goal, setGoal] = useState("");
    const [hasCalculated, setHasCalculated] = useState(false);

    const option = [
        { label: 'Running🏃', METvalue: 9.8},
        { label: 'Skiing⛷️', METvalue: 6.8},
        { label: 'Bouldering🪨', METvalue: 5},
        { label: 'Swimming🏊', METvalue: 8},
        { label: 'Football⚽', METvalue: 10.3},
        { label: 'Cycling🚴', METvalue: 6}
    ];

    function handleWeightchange(event) {
        setWeight(event.target.value);
    }

    function handleTimechange(event) {
        setTime(event.target.value);
    }

    function handleGoalchange(event) {
        setGoal(event.target.value);
    }

    const calculateCalories = (event) => {
        event.preventDefault();

        if (hasCalculated) {
            return;
        }

        const selectedSport = option.find(opt => opt.label === sport)

        const calorieRate = selectedSport.METvalue;

        if (calorieRate) {
            const burnedCalories = calorieRate * weight * (time / 60);
            setCalories(burnedCalories.toFixed(2));
            setHasCalculated(true);
        } else {
            setCalories("0.00");
        }
    };

    const handleReset = () => {
        setSport("NONE⛔");
        setTime("");
        setWeight("");
        setCalories(0.00);
        setGoal("");
        setHasCalculated(false);
    }

    const remainingCalories = Math.max(goal - calories, 0);

    return (
        <div className="main-app">
            <div className="left-menu">
                <DropDownMenu title={'Sports'} options={option}
                    selectedSport={sport} onSportSelect={setSport} />

                <div className="image-container">
                    <img src={img1} alt="image not found :(" width="500" height="250" />
                </div>
            </div>


            <div className="middle-chart">
                <DoughnutChart goal={goal} progress={calories} deficit={remainingCalories}/>
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
                    <label>
                        kcal🔥goal: <input name="GoalInput" placeholder="set kcal goal..." onChange={handleGoalchange} value={goal}/>
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
