import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div >
      <TipCalculator />
    </div>
  );
}

function TipCalculator()
{

  const [bill, setBill] = useState("");
  const [percentage1, SelectPercentage1] = useState(0);
  const [percentage2, SelectPercentage2] = useState(0);

  const tip = bill * (( percentage1 + percentage2 ) /2 /100);

  function handleReset(){
    setBill('');
    SelectPercentage1(0);
    SelectPercentage2(0);
   
  }

  return(
    <div className='TipCalculator'>
        <BillInput bill={bill} setBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={SelectPercentage1}>
          How did you like the service?
        </SelectPercentage >
        <SelectPercentage percentage={percentage2} onSelect={SelectPercentage2}>
          How did you your friend like the service?
        </SelectPercentage >
        { 
          bill > 0 && 
        <>
          <Output bill={bill} setBill={setBill} tip={tip} />
          <Reset OnReset={handleReset} />
        </>
        }
   </div>
  );
}

function BillInput({bill, setBill}){
  return(
    <div>
      <label>How Much was the bill?</label>
      <input type='number' placeholder='Bill Value' value={bill} onChange={(e)=>setBill(Number(e.target.value))} />
    </div>
  );
}

function SelectPercentage({children, percentage, onSelect}){
 return(
  <div>
    <label>{children}</label>
    <select value={percentage} onChange={(e)=>onSelect(Number(e.target.value))}>
    <option value='0'>Dissatisfied (0%)</option>
    <option value='5'>It Was Okey (5%)</option>
    <option value='10'>It Was Good (10%)</option>
    <option value='20'>Absolutely amazing (20%)</option>
    </select>
  </div>
 );
}

function Output({bill, setBill, tip}){
 
  const result = bill + tip;

  return(
    <h3>You Pay {result}$ (${bill} + ${tip} Tip)</h3>
  );
}

function Reset({OnReset}){
  return(
    <button onClick={OnReset}>Reset</button>
  );
}