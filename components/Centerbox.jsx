import { useState } from "react";

export default function Centerbox({ state, setState }) {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    daysLivedTogether: "",
    billAmount: "",
    flatmate1Missed: "",
    flatmate2Missed: "",
    bothMissed: "",
  });

  function handleChange(event) {
    setFormdata({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("https://localhost:5000/run_code", {
      method: "POST",
      headers: { "Content-Type": "appication/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setResult(data);
  }

  if (state === false) {
    return (
      <div className="center-box">
        <h2>Welcome to Flatmates Bill Calculator!</h2>
        <p>
          This App helps you and your flatmates fairly split household bills. It
          takes into account the number of days each flatmate was present,
          ensuring those who were absent don't overpay. A simple yet effective
          solution to avoid conflicts!
        </p>
        <button onClick={setState}>Calculate the billsplit!</button>
      </div>
    );
  }

  if (state === true) {
    return (
      <div className="center-box">
        <h2>input the values!</h2>
        <label>Days Lived together</label>
        <input></input>
        <label>Amount of the Bill</label>
        <input></input>
        <label>Number of days flatmate1 missed</label>
        <input></input>
        <label>Number of days flatmate2 missed</label>
        <input></input>
        <label>
          Number of days flatmate1 and flatmate2 were not present at home
        </label>
        <input></input>
        <button>Submit</button>
        {result && (
          <div className="result-box">
            <h3>Bill Split Result:</h3>
            <p>Flatmate 1 should pay: {result.flatmate1Share}</p>
            <p>Flatmate 2 should pay: {result.flatmate2Share}</p>
          </div>
        )}
      </div>
    );
  }
}
