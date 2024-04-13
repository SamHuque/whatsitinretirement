'use client'

import { useEffect, useState } from "react";


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

  useEffect(() => {
    const output = document.getElementById("output");
    console.log('output element: ', output);
    output?.scrollIntoView({behavior: 'smooth'});
  }, [isVIsible])

  return (
    <div>
      <h1>What&apos;s it in retirement?</h1>
      <div className="flex justify-center items-center h-screen">
        <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              How much is it?: <br></br>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={number === 0 ? '' : number}
                onChange={handleNumberChange}
                placeholder="Enter a price"
              />
            </label><br></br>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              How old are you?: <br></br>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={age === 0 ? '' : age}
                onChange={handleAgeChange}
                placeholder="Enter your age"
              />
            </label><br></br>
          </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        {/* {isVIsible && (<p className="text-sm text-gray-600 mb-4">Your investment will be worth {futurePrice} in retirement</p>)} */}
      </form>
    </div>
    {isVIsible && (<h2 id="output" className="text-gray-600 mb-4">Your investment will be worth {futurePrice} in retirement</h2>)}
    </div>
  );
}
