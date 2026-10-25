import './App.css'
import { useState } from 'react';
const App = () => {
    const [Good, setGood] = useState(0);
    const [Neutral, setNeutral] = useState(0);
    const [Bad, setBad] = useState(0);
    const [All, setAll] = useState(0)
    const [Avg, setAvg] = useState(0)
    const handleGood = () => {
        const updatedG = Good + 1;
        setGood(updatedG);
        setAll(updatedG + Neutral + Bad);
        setAvg(Avg + 1);
    }
    const handleNeutral = () => {
        const updatedN = Neutral + 1;
        setNeutral(updatedN);
        setAll(updatedN + Good + Bad);
        setAvg(Avg + 0);
    }
    const handleBad = () => {
        const updatedB = Bad + 1;
        setBad(updatedB);
        setAll(updatedB + Good + Neutral);
        setAvg(Avg - 1);
    }
    const handleClear = () => {
        setAll(0);
        setGood(0);
        setBad(0);
        setNeutral(0);
        setAvg(0);
    }
    return (
        <div className="content">
            <div className="feedback">
                <h1>Give FeedBack</h1>
                <div className="buttons">
                    <button onClick={handleGood}>Good</button>
                    <button onClick={handleNeutral}>Neutral</button>
                    <button onClick={handleBad}>Bad</button>
                </div>
            </div>
            <div className="statistics">
                <h1>Statistics</h1>
                <div>
                    {
                        All === 0 ? (
                            <p>No feedback given</p>
                        ) : (
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Statistic</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Good</th>
                                            <td>{Good}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Neutral</th>
                                            <td>{Neutral}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bad</th>
                                            <td>{Bad}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total</th>
                                            <td>{All}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Average</th>
                                            <td>{(Avg / All).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Positive</th>
                                            <td>{((Good / All) * 100).toFixed(1)}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="clear-button" onClick={handleClear}>Clear All</button>
                            </div>

                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default App
