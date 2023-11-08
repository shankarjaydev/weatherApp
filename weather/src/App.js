import React from 'react'
import { useState } from 'react'

const App = () => {
  const [city,setCity]=useState('');
  const [result,setResult]=useState('');
  const changeHandler=e=>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then((res)=>res.json()).then(
      data=>{
        const kelvin=data.main.temp;
        const celcius=kelvin-273.15;
        setResult("Temperature at "+city+" "+"\n"+Math.round(celcius)+"c")
      }
    ).catch(error=>console.log(error))
    setCity('');
  }
  return (
    <>
      <div>
        <center>
          <h1>WeatherSearch</h1>
          <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler} value={city}/>&nbsp;&nbsp;
            <input type='submit'/>
          </form>
          <div>
            <h1>{result}</h1>
          </div>
        </center>
      </div>
    </>
  )
}

export default App