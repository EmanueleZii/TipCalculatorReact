import './App.css';

export default function App() {
  return (
    <div >
      <TipCalculator />
    </div>
  );
}

function TipCalculator(){
  return(
    <div className='TipCalculator'>
        <BillInput />
        <SelectPercentage>
          How did you like the service?
        </SelectPercentage >
        <SelectPercentage>
          How did you your friend like the service?
        </SelectPercentage >
        <Output />
        <Reset />
    </div>
  );
}

function BillInput(){
  return(
    <div>
      <label>How Much was the bill?</label>
      <input type='text' placeholder='Bill Value' />
    </div>
  );
}

function SelectPercentage(){
 return(
  <div>
    <select>
    <option value='0'>Dissatisfied (0%)</option>
    <option value='5'>It Was Okey (5%)</option>
    <option value='10'>It Was Good (10%)</option>
    <option value='20'>Absolutely amazing (20%)</option>
    </select>
  </div>
 );
}

function Output(){

}

function Reset(){

}