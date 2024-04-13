'use client'

import { useState } from "react";


export default function Home() {
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(0);
  const [isVIsible, setIsVisible] = useState(false);
  const [futurePrice, setFuturePrice] = useState('');
  
  function handleNumberChange(event: any) {
    const input = event.target.value;
    if (!isNaN(input)) {
      setNumber(input);
    }
  };

function handleAgeChange(event: any) {
  const input = event.target.value;
    if (!isNaN(input)) {
      setAge(input);
    }
}

function calculateFutureValueCompoundInterest(price: number, interestRate: number, years: number) {
  const r = interestRate / 100; // Convert interest rate to decimal
  const n = years;
  const futureValue = price * Math.pow(1 + r, n);
  return futureValue.toFixed(2); // Return the future value rounded to 2 decimal places
}

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log('Form is submitted with number: ', number, 'and age: ', age);
    const futurePrice = calculateFutureValueCompoundInterest(number, 8, 67 - age);
    setFuturePrice(futurePrice);
    setIsVisible(true);
  }

  return (
    <div>
      <h1>What&apos;s it in retirement?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          How much is it?: <br></br>
          <input
            type="text"
            value={number === 0 ? '' : number}
            onChange={handleNumberChange}
            placeholder="Enter a price"
          />
        </label><br></br>
        <label>
          How old are you?: <br></br>
          <input
            type="text"
            value={age === 0 ? '' : age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </label><br></br>
      <button type="submit">Submit</button>
      {isVIsible && (<p>Your investment will be worth {futurePrice} in retirement</p>)}
    </form>
    </div>
  );
}
